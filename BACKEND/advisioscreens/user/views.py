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
            return JsonResponse({'message': 'New user created successfully.'})
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