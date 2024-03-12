from django.contrib import admin
from .models import Advertisement

@admin.register(Advertisement)
class AdvertisementAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'price', 'created_at', 'updated_at')
    list_filter = ('status', 'created_at', 'price')
    search_fields = ('title', 'description')
    actions = ['approve_ads', 'reject_ads']

    def approve_ads(self, request, queryset):
        queryset.update(status=Advertisement.AdStatus.APPROVED)

    approve_ads.short_description = "Approve selected advertisements"

    def reject_ads(self, request, queryset):
        queryset.update(status=Advertisement.AdStatus.REJECTED)

    reject_ads.short_description = "Reject selected advertisements"
