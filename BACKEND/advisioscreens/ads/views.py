from django.http import JsonResponse
from .models import Advertisement

def list_approved_ads_with_pricing(request):
    ads = Advertisement.objects.filter(status=Advertisement.AdStatus.APPROVED).values('title', 'description', 'target_url', 'price')
    return JsonResponse(list(ads), safe=False)
