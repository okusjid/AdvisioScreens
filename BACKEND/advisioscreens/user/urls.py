from django.urls import path
from user import views
from django.conf import settings
from django.conf.urls.static import static
from .views import *

urlpatterns = [
    path("upload/", views.UploadImage.as_view(), name="upload_image"),
    path("get-approved-images/", views.get_approved_images, name="get_approved_image"),
    path("get-unapproved-images/",views.get_unapproved_images,name="get_unapproved_image",),
    path("upload_video/", views.UploadVideo.as_view(), name="upload_video"),
    path("feedback_form/", views.FeedbackView.as_view(), name="feedback_form"),
    path("get-feedback-count/", views.get_feedback, name="get-feedback-count"),
    path("get-rejected-items/", views.get_rejected_items, name="get-rejected-items"),
    path("get-feedback/", views.get_feedback_for_ad, name="get-feedback-for-ad"),
    path('save_user_data/', views.save_user_data, name='save_user_data'),
    path('get_user_role/', views.get_user_role, name='get_user_role'),
    path('set_user_role/', views.set_user_role, name='set_user_role'),
    path('get_user_data/', views.get_user_data, name='get_user_data'),
    path('get-all-images/', views.get_all_images, name='get_all_images'),
    path('set-image-approved/', views.set_image_approved, name='set_image_approved'),
    path('set-image-rejected/', views.set_image_rejected, name='set_image_rejected'),
    path('get-all-rejected-images/', views.get_all_rejected_images, name='get_all_rejected_images'),
    path('get-all-approved-images/', views.get_all_accepted_images, name='get_all_accepted_images'),
    path('gamification/', views.update_gamification, name='update_gamification'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

