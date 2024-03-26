from django.urls import path
from user import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("upload/", views.UploadImage.as_view(), name="upload_image"),
    path("get-approved-images/", views.get_approved_images, name="get_approved_image"),
    path(
        "get-unapproved-images/",
        views.get_unapproved_images,
        name="get_unapproved_image",
    ),
    path("upload_video/", views.UploadVideo.as_view(), name="upload_video"),
    path("feedback_form/", views.FeedbackView.as_view(), name="feedback_form"),
    path("get-feedback-count/", views.get_feedback, name="get-feedback-count"),
    path("get-rejected-items/", views.get_rejected_items, name="get-rejected-items"),
    path('save_user_data/', views.save_user_data, name='save_user_data'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
