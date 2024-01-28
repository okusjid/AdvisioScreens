from django.shortcuts import render
from django.http import JsonResponse
from .models import Contact
from django.views.decorators.csrf import csrf_exempt
import json
from django.core import serializers

@csrf_exempt
def contact_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        contact = Contact(email=data['email'], subject=data['subject'], message=data['message'])
        contact.save()
        return JsonResponse({"message": "Success"}, status=200)
    elif request.method == 'GET':
        # Fetch all Contact objects from the database
        contacts = Contact.objects.all()
        # Serialize the queryset to JSON
        data = serializers.serialize('json', contacts)
        # Return the serialized data as a JsonResponse
        return JsonResponse(data, safe=False)
    else:
        return JsonResponse({"error": "Invalid request"}, status=400)