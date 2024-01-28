from django.shortcuts import render
from django.http import JsonResponse
from .models import Contact
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def contact_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        contact = Contact(email=data['email'], subject=data['subject'], message=data['message'])
        contact.save()
        return JsonResponse({"message": "Success"}, status=200)
    return JsonResponse({"error": "Invalid request"}, status=400)
