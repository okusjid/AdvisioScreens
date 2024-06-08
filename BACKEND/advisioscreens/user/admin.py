from django.contrib import admin
from .models import *

# Register your models here.


# @admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "role", "created_at")
    list_filter = ("role", "created_at")
    search_fields = ("name", "email")


class UploadAdmin(admin.ModelAdmin):
    list_display = ["name","clerk_id", "location", "item", "approved","rejected"]
    list_filter = ["approved","rejected"]


# class UploadedVideoAdmin(admin.ModelAdmin):
#     list_display = ["video_id", "clerk_id", "location", "video", "approved"]
#     list_filter = ["approved"]


class FeedbackAdmin(admin.ModelAdmin):
    list_display = ["get_upload_name", "option_id"]

    def get_upload_name(self, obj):
        return obj.item_id.name  # Access the name field of the related Upload object

    get_upload_name.short_description = 'Upload Name'


admin.site.register(User, UserAdmin)
admin.site.register(Upload, UploadAdmin)
# admin.site.register(UploadedVideo, UploadedVideoAdmin)
admin.site.register(Feedback, FeedbackAdmin)
admin.site.register(Gamification)