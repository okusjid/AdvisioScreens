import requests
import json
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()


def analyze_media(media_path):
    print("Bhae path yeh hai = ",media_path)
    media_path = media_path.replace('\\','/')
    
    # Determine file type
    if media_path.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
        api_url = 'https://api.sightengine.com/1.0/check.json'
    elif media_path.lower().endswith('.mp4'):
        api_url = 'https://api.sightengine.com/1.0/video/check-sync.json'
    else:
        return "Unsupported file type"

    # Define API parameters
    params = {
        'models': 'nudity-2.1,weapon,alcohol,recreational_drug,medical,offensive,scam,text-content,face-attributes,gore-2.0,violence',
        'api_user': os.getenv('API_USER') or '1412173450',
        'api_secret': os.getenv('API_SECRET') or '2KvxAtRyMDW52x6LJ3unrMKctjPF7cza',
    }

    # Send the request to Sightengine API
    with open(media_path, 'rb') as file:  
        files = {'media': file}
        response = requests.post(api_url, files=files, data=params)
        output = response.json()
    print("Output",output)
    return analyze_results(output)

def analyze_results(data):
    messages = []
    thresholds = {
        'nudity': 0.02, 'weapon': 0.01, 'recreational_drug': 0.01, 'medical': 0.01,
        'alcohol': 0.01, 'offensive': 0.01, 'scam': 0.05, 'violence': 0.01, 'gore': 0.01
    }

    # Example of handling different structures in data for images and videos
    if 'nudity' in data and data['nudity']['none'] < (1 - thresholds['nudity']):
        messages.append('Possible Nudity detected')
    if 'weapon' in data and data.get('weapon', {}).get('classes', {}).get('firearm', 0) > thresholds['weapon']:
        messages.append('Possible Firearm detected')
    if 'recreational_drug' in data and data['recreational_drug']['prob'] > thresholds['recreational_drug']:
        messages.append('Possible Recreational drug content detected')
    if 'medical' in data and data['medical']['prob'] > thresholds['medical']:
        messages.append('Possible Medical-related content detected')
    if 'alcohol' in data and data['alcohol']['prob'] > thresholds['alcohol']:
        messages.append('Possible Alcohol-related content detected')
    if 'offensive' in data and data['offensive']['prob'] > thresholds['offensive']:
        messages.append('Possible Offensive content detected')
    if 'scam' in data and data['scam']['prob'] > thresholds['scam']:
        messages.append('Possible scam detected')
    if 'violence' in data and data['violence']['prob'] > thresholds['violence']:
        messages.append('Possible Violence detected')
    if 'gore' in data and data['gore']['prob'] > thresholds['gore']:
        messages.append('Possible Gore detected')
  
    if not messages:
        return "Posibbly No concerning content detected."
    return "Possible Alert: " + "; ".join(messages) + "."


# Example usage
# print(analyze_media())
