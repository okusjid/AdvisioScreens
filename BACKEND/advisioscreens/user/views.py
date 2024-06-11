from django.http import JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
import json
from django.core import serializers
from django.shortcuts import render, redirect
from .models import *
from rest_framework.parsers import MultiPartParser
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from collections import defaultdict
from rest_framework import generics
from .models import Gamification
from .serializers import GamificationSerializer
from django.utils import timezone
import os
import requests
import json
from dotenv import load_dotenv

load_dotenv()

# Content Moderation
def analyze_media(media_path):
    # Replace the path delimiters if needed and ensure it's a string
    # add this before the path "C:\\Users\\usjid\\OneDrive\\Desktop\\AdvisioScreens\\BACKEND\\AdvisioScreens\\"
    media_path = "C:\\Users\\usjid\\OneDrive\\Desktop\\AdvisioScreens\\BACKEND\\AdvisioScreens\\uploads/" + media_path
    media_path = media_path.replace('\\', '/')
    print("Processed media path:", media_path)
    
    ## Determine file type
    if media_path.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
        api_url = 'https://api.sightengine.com/1.0/check.json'
    elif media_path.lower().endswith('.mp4'):
        api_url = 'https://api.sightengine.com/1.0/video/check-sync.json'
    else:
        return "Unsupported file type"

    # API credentials (fetch from environment variables)
    api_user = os.getenv('API_USER', 'default_user')
    api_secret = os.getenv('API_SECRET', 'default_secret')

    # Configure API parameters
    params = {
        'models': 'nudity-2.1,weapon,alcohol,recreational_drug,medical,offensive,scam,text-content,face-attributes,gore-2.0,violence',
        'api_user': os.getenv('API_USER') or '1412173450',
        'api_secret': os.getenv('API_SECRET') or '2KvxAtRyMDW52x6LJ3unrMKctjPF7cza',
    }

    # Send request to Sightengine API
    with open(media_path, 'rb') as file:
        files = {'media': file}
        response = requests.post(api_url, files=files, data=params)
        result = response.json()
    
    return analyze_results(result)

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
        return "Posibly there is No concerning content in the media."
    return " " + "; ".join(messages) + "."

#Ends here


@csrf_exempt
def update_gamification(request):
    if request.method == 'GET':
        try:
            for user in User.objects.all():    
                gamification = Gamification.objects.get(user=user)
                data = {
                    'user_id': user.clerk_user_id,
                    'points': gamification.points,
                    'level': gamification.level,
                    'age_points': gamification.age_points,
                    'upload_activity_points': gamification.upload_activity_points
                }
                return JsonResponse(data)
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found.'}, status=404)
        except Gamification.DoesNotExist:
            return JsonResponse({'error': 'Gamification record not found.'}, status=404)
        except Exception as e:
            return JsonResponse({'error': f'An error occurred: {str(e)}'}, status=500)

    elif request.method == 'POST':
        try:
            for user in User.objects.all():
                print(user)               
                gamification = Gamification.objects.update_or_create(user=user)

            return JsonResponse({'message': 'Gamification data updated successfully.'})
        except Exception as e:
            return JsonResponse({'error': f'An error occurred: {str(e)}'}, status=500)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)
     
@csrf_exempt
def save_user_data(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        clerk_user_id = data.get('clerk_user_id')
        name = data.get('name')
        email = data.get('email')
        role = data.get('role', 'user')  # Default role is set to 'user'

        # Check if user already exists
        try:
            user = User.objects.get(clerk_user_id=clerk_user_id)
            # User exists, update their information
            user.name = name
            user.email = email
            user.save()
            return JsonResponse({'message': 'User data updated successfully.'})
        except User.DoesNotExist:
            # User doesn't exist, create a new entry
            User.objects.create(
                clerk_user_id=clerk_user_id,
                name=name,
                email=email,
                role=role
            )
            Gamification.objects.create(user=user)
            return JsonResponse({'message': 'New user created successfully.'}, )
    else:
        return JsonResponse({'error': 'Only POST requests are allowed.'}, status=400)

class UploadImage(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request):
        print("UploadImage", request.data)
        loc_name = request.data["loc"]
        image = request.data["file"]
        user_id = request.data["user_id"]
        name = request.data["name"]
        if name and image:  # Check if location and image are present
            Upload.objects.create(
                clerk_id=user_id, name=name, location=loc_name, item=image
            )
          
            return JsonResponse({"success": True})
        else:
            return JsonResponse(
                {"success": False, "error": "Location or image missing"}, status=400
            )


class UploadVideo(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request):

        print("UploadVideo", request.data)
        loc_name = request.data["loc"]
        video = request.data["file"]
        user_id = request.data["user_id"]
        name = request.data["name"]
        if name and video:
            Upload.objects.create(
                clerk_id=user_id, name=name, location=loc_name, item=video
            )
            return JsonResponse({"success": True})
        else:
            return JsonResponse(
                {"success": False, "error": "Location or image missing"}, status=400
            )
#get_all_images
def get_all_images(request):
    print("get_all_images")
    user_images = Upload.objects.all()
    images_data = []
    for img in user_images:
        print(img.item.url[8:])
        images_data.append(
            {
                "id": img.id,
                "name": img.name,
                "location": img.location,
                "image_url": img.item.url[8:],
            }
        )
      
    return JsonResponse(images_data, safe=False)

#set-image-approved
@csrf_exempt
def set_image_approved(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        image_id = data.get('image_id')
        try:
            image = Upload.objects.get(id=image_id)
            image.approved = True
            image.rejected = False
            image.save()
            return JsonResponse({'message': 'Image approved successfully.'})
        except Upload.DoesNotExist:
            return JsonResponse({'error': 'Image not found.'}, status=404)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed.'}, status=400)

#set-image-rejected
@csrf_exempt
def set_image_rejected(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        image_id = data.get('image_id')
        try:
            image = Upload.objects.get(id=image_id)
            image.rejected = True
            image.approved = False
            image.save()
            return JsonResponse({'message': 'Image rejected successfully.'})
        except Upload.DoesNotExist:
            return JsonResponse({'error': 'Image not found.'}, status=404)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed.'}, status=400)

# get_all_rejected_images
def get_all_rejected_images(request):
    print("get_all_rejected_images")
    user_images = Upload.objects.filter(rejected=True)
    images_data = []
    for img in user_images:
        print(img.item.url[8:])
        images_data.append(
            {
                "id": img.id,
                "name": img.name,
                "location": img.location,
                "image_url": img.item.url[8:],
            }
        )
    return JsonResponse(images_data, safe=False)

# get_all_accepted_images
def get_all_accepted_images(request):
    print("get_all_accepted_images")
    user_images = Upload.objects.filter(approved=True)
    images_data = []
    for img in user_images:
        print(img.item.url[8:])
        images_data.append(
            {
                "id": img.id,
                "name": img.name,
                "location": img.location,
                "image_url": img.item.url[8:],
            }
        )
    return JsonResponse(images_data, safe=False)        

def get_approved_images(request):
    print("get_approved_images")
    if "user_id" in request.GET:
        user_images = Upload.objects.filter(
            clerk_id=request.GET["user_id"], approved=True
        )
        images_data = []
        for img in user_images:
            print(img.item.url[8:])
            images_data.append(
                {
                    "id": img.id,
                    "name": img.name,
                    "location": img.location,
                    "image_url": img.item.url[8:],
                }
            )
        return JsonResponse(images_data, safe=False)
    else:
        return JsonResponse({"error": "user_id parameter missing"}, status=400)


def get_unapproved_images(request):
    print("get_unapproved_images")
    if "user_id" in request.GET:
        user_images = Upload.objects.filter(
            clerk_id=request.GET["user_id"], approved=False, rejected=False
        )
        images_data = []
        for img in user_images:
            print(img.item.url[8:])
            images_data.append(
                {
                    "id": img.id,
                    "name": img.name,
                    "location": img.location,
                    "image_url": img.item.url[8:],
                }
            )
        return JsonResponse(images_data, safe=False)
    else:
        return JsonResponse({"error": "user_id parameter missing"}, status=400)


def get_rejected_items(request):
    print("get_unapproved_images")
    if "user_id" in request.GET:
        user_images = Upload.objects.filter(
            clerk_id=request.GET["user_id"], rejected=True
        )
        images_data = []
        for img in user_images:
            print(img.item.url[8:])
            img.approved = False
            img.save()
            images_data.append(
                {
                    "id": img.id,
                    "name": img.name,
                    "location": img.location,
                    "image_url": img.item.url[8:],
                }
            )
        return JsonResponse(images_data, safe=False)
    else:
        return JsonResponse({"error": "user_id parameter missing"}, status=400)


class FeedbackView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request):

        print("Feedback", request.data)
        item_id = request.data["image_id"]
        opt_id = request.data["option_id"]
        user_id = request.data["user_id"]

        if item_id and opt_id:
            items = Upload.objects.get(clerk_id=user_id, id=item_id)
            Feedback.objects.create(
                item_id=Upload.objects.get(clerk_id=user_id, id=item_id),
                option_id=opt_id,
            )
            return JsonResponse({"success": True})
        else:
            return JsonResponse(
                {"success": False, "error": "Feedback params not found"}, status=400
            )

@csrf_exempt   
def get_feedback(request):
    feedback_data = Feedback.objects.all()
    feedback_counts = defaultdict(int)
    feedback_list = []
    for feedback in feedback_data:
        if not feedback.item_id.rejected and feedback.item_id.approved:
            feedback_list.append(
                {
                    "option_id": feedback.option_id,
                    "item_id": feedback.item_id.id,
                    "item_name": feedback.item_id.name,
                }
            )
            feedback_counts[feedback.option_id] += 1
    feedback = {
        "feedback_data": feedback_list,
        "feedback_counts": feedback_counts,
    }
    return JsonResponse(feedback)

# Get feedback for a specific ads
def get_feedback_for_ad(request):
    if request.method == 'GET':
        item_id = request.GET.get('item_id')
        if item_id:
            feedback_data = Feedback.objects.filter(item_id=item_id)
            feedback_counts = defaultdict(int)
            for feedback in feedback_data:
                feedback_counts[feedback.option_id] += 1
            return JsonResponse(feedback_counts)
        else:
            return JsonResponse({'error': 'Missing item_id parameter.'}, status=400)
    else:
        return JsonResponse({'error': 'Only GET requests are allowed.'}, status=400)

def get_user_role(request):
    if request.method == 'GET':
        clerk_user_id = request.GET.get('clerk_user_id')
        if clerk_user_id:
            try:
                user = User.objects.get(clerk_user_id=clerk_user_id)
                role = user.role  # Assuming 'role' is a field in your User model
                return JsonResponse({'role': role})
            except User.DoesNotExist:
                return JsonResponse({'error': 'User not found.'}, status=404)
        else:
            return JsonResponse({'error': 'Missing clerk_user_id parameter.'}, status=400)
    else:
        return JsonResponse({'error': 'Only GET requests are allowed.'}, status=400)

# set user role to admin or user
@csrf_exempt   
def set_user_role(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        clerk_user_id = data.get('clerk_user_id')
        role = data.get('role')
        try:
            user = User.objects.get(clerk_user_id=clerk_user_id)
            user.role = role
            user.save()
            return JsonResponse({'message': 'User role updated successfully.'})
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found.'}, status=404)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed.'}, status=400)
    
# get user data of all users
def get_user_data(request):
    if request.method == 'GET':
        users = User.objects.all()
        user_data = []
        for user in users:
            user_data.append({
                'clerk_user_id': user.clerk_user_id,
                'name': user.name,
                'email': user.email,
                'role': user.role
            })
        return JsonResponse(user_data, safe=False)
    else:
        return JsonResponse({'error': 'Only GET requests are allowed.'}, status=400)    

   
@csrf_exempt
def analyze_media_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            print("Yahan path hai = ",data)
            media_path = data.get("media_path")
            if not media_path:
                return JsonResponse({'error': 'media_path parameter missing'}, status=400)
            result = analyze_media(media_path)
            return JsonResponse(result, safe=False)
        except json.decoder.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
