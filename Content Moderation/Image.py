import requests
import json
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Define the parameters for the API request
params = {
    'models': 'nudity-2.1,weapon,alcohol,recreational_drug,medical,offensive,scam,text-content,face-attributes,gore-2.0,violence',
    'api_user': os.getenv('API_USER'),  # Ensure these names match your .env file
    'api_secret': os.getenv('API_SECRET'),
}

files = {'media': open('Content Moderation\Gun.jpeg', 'rb')}
r = requests.post('https://api.sightengine.com/1.0/check.json', files=files, data=params)

output = json.loads(r.text)
# print(output)

def analyze_results(data):
    messages = []
    # Define thresholds for each category
    thresholds = {
        'nudity': 0.02, 'weapon': 0.01, 'recreational_drug': 0.01, 'medical': 0.01,
        'alcohol': 0.01, 'offensive': 0.01, 'scam': 0.05, 'violence': 0.01, 'gore': 0.01
    }

    # Check each category against its threshold
    if data['nudity']['none'] < (1 - thresholds['nudity']):
        messages.append('Nudity')
    if data['weapon']['classes']['firearm'] > thresholds['weapon']:
        messages.append('Firearm')
    if data['recreational_drug']['prob'] > thresholds['recreational_drug']:
        messages.append('Recreational drug content')
    if data['medical']['prob'] > thresholds['medical']:
        messages.append('Medical-related content')
    if data['alcohol']['prob'] > thresholds['alcohol']:
        messages.append('Alcohol-related content')
    if data['offensive']['prob'] > thresholds['offensive']:
        messages.append('Offensive content')
    if data['scam']['prob'] > thresholds['scam']:
        messages.append('Possible scam')
    if data['violence']['prob'] > thresholds['violence']:
        messages.append('Violence')
    if data['gore']['prob'] > thresholds['gore']:
        messages.append('Gore')
    else:
        messages.append('No concerning content')    

    # Generate a summary statement
    if messages:
        
        return "Posible Alert: " + " or ".join(messages) + "."
    else:
        return "No concerning content detected."

# Usage
result_statement = analyze_results(output)
print(result_statement)
