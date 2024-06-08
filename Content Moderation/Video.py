import requests
import json
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Define the path for the video file
video_path = r'Content Moderation\Night-gun-firing-whatsapp-status---real-gun-shooting-status---Shahzada-Saleem--.mp4'

# API credentials
api_user = os.getenv('api_user')
api_secret = os.getenv('api_secret')

# API parameters
params = {
    'models': 'nudity-2.1,weapon,alcohol,recreational_drug,medical,offensive,scam,text-content,face-attributes,gore-2.0,violence',
    'api_user': api_user,
    'api_secret': api_secret
}

# Open the video file and send it to the API
with open(video_path, 'rb') as video_file:
    files = {'media': video_file}
    response = requests.post('https://api.sightengine.com/1.0/video/check-sync.json', files=files, data=params)

# Load JSON response
output = response.json()
print(json.dumps(output, indent=2))  # Print raw output for debugging

# Function to analyze and summarize the results
def summarize_results(data):
    messages = []
    thresholds = {
        'nudity': 0.05,
        'weapon': 0.05,
        'alcohol': 0.05,
        'recreational_drug': 0.05,
        'offensive': 0.05,
        'violence': 0.05,
        'scam': 0.05
    }

    for frame in data.get('data', {}).get('frames', []):
        for key, threshold in thresholds.items():
            if frame.get(key, {}).get('prob', 0) >= threshold:
                messages.append(f"{key} detected with probability {frame[key]['prob']}")

    if not messages:
        return "No concerning content detected."
    else:
        return "Alert: " + "; ".join(messages)

# Use the summarize_results function to generate a final statement
final_statement = summarize_results(output)
print(final_statement)
