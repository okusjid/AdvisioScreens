from django.db import models
from ads.models import Advertisement
from user.models import User
from django.utils.translation import gettext as _

# Create your models here.
class Feedback(models.Model):
    advertisement = models.ForeignKey('ads.Advertisement', on_delete=models.CASCADE, related_name='feedbacks')
    user = models.ForeignKey('user.User', on_delete=models.CASCADE, related_name='feedbacks')
    comment = models.TextField(verbose_name="Comment")
    rating = models.IntegerField(default=5, verbose_name="Rating")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Created At")

    def __str__(self):
        return f"Feedback by {self.user.name} on {self.advertisement.title}"
