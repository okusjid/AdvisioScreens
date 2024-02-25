from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Feedback, Advertisement
from django.core.exceptions import ObjectDoesNotExist
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.

@csrf_exempt
@require_http_methods(["POST"])
def submit_feedback(request, ad_id):
    try:
        advertisement = Advertisement.objects.get(pk=ad_id)
    except ObjectDoesNotExist:
        return JsonResponse({'error': 'Advertisement not found'}, status=404)

    try:
        data = json.loads(request.body)
        feedback = Feedback(
            advertisement=advertisement,
            user=request.user,  # Assuming user is authenticated
            comment=data['comment'],
            rating=data['rating']
        )
        feedback.save()
        return JsonResponse({'message': 'Feedback submitted successfully'})
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)

def get_feedback(request, ad_id):
    feedback_list = Feedback.objects.filter(advertisement_id=ad_id).values('user__username', 'comment', 'rating', 'created_at')
    return JsonResponse(list(feedback_list), safe=False)
