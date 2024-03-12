from django.urls import path, include
from contact.views import contact_view
from ads.views import list_approved_ads_with_pricing
from django.contrib import admin
from  Feedback.views import submit_feedback, get_feedback


urlpatterns = [
    # ... other paths ...
    path('admin/', admin.site.urls),
    path('contact/', contact_view, name='contact'),  
    path('ads/pricing/', list_approved_ads_with_pricing, name='list_ads_with_pricing'),
    path('ads/<int:ad_id>/feedback/', get_feedback, name='get_feedback'),
    path('ads/<int:ad_id>/submit_feedback/', submit_feedback, name='submit_feedback'),
]