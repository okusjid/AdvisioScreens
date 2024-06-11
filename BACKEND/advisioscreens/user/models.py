from django.db import models
from django.core.validators import MaxValueValidator
from django.utils import timezone


class User(models.Model):
    clerk_user_id = models.CharField(
        max_length=255, unique=True, verbose_name="Clerk User ID"
    )
    name = models.CharField(max_length=255, verbose_name="Name")
    email = models.EmailField(unique=True, verbose_name="Email")
    role = models.CharField(max_length=50, verbose_name="Role")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Created At")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Updated At")

    def __str__(self):
        return self.name


class Upload(models.Model):
    name =  models.CharField(max_length=255,default="Empty")
    clerk_id = models.CharField(max_length=255)
    location = models.CharField(max_length=100)
    viewers = models.IntegerField(default=0)
    item = models.FileField(upload_to="uploads/")
    approved = models.BooleanField(default=False)
    rejected = models.BooleanField(default=False)


# class UploadedVideo(models.Model):
#     clerk_id = models.CharField(max_length=255)
#     location = models.CharField(max_length=100)
#     video = models.FileField(upload_to="uploads/videos/")
#     approved = models.BooleanField(default=False)


class Feedback(models.Model):
    item_id = models.ForeignKey(Upload, on_delete=models.CASCADE)
    option_id = models.IntegerField()

class Gamification(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='gamification')
    points = models.IntegerField(default=10, verbose_name="Points", validators=[MaxValueValidator(100)])
    level = models.IntegerField(default=1, verbose_name="Level", validators=[MaxValueValidator(10)])
    age_points = models.IntegerField(default=1, verbose_name="Age Points")
    upload_activity_points = models.IntegerField(default=0, verbose_name="Upload Activity Points")
    total_ads_count = models.IntegerField(default=0, verbose_name="Total Ads")  # Renamed from totalads
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.name}'s Gamification"

    def calculate_age_points(self):
        now = timezone.now()
        age = now.year - self.user.created_at.year - ((now.month, now.day) < (self.user.created_at.month, self.user.created_at.day))
        age_points = min(age, 10)  # Cap age points at 10
        return age_points

    def calculate_total_ads(self):
        total_ads = self.user.upload_set.filter(approved=True).count() + self.user.upload_set.filter(rejected=True).count()
        self.total_ads_count = total_ads
        self.save()

    def calculate_points(self):
        self.age_points = self.calculate_age_points()

        update_frequency_points = 5  # Example static point allocation
        self.update_frequency_points = update_frequency_points

        approved_uploads_count = self.user.upload_set.filter(approved=True).count()
        rejected_uploads_count = self.user.upload_set.filter(rejected=True).count()
        upload_activity_points = max((approved_uploads_count - rejected_uploads_count) * 2, 0)  # Ensure non-negative
        self.upload_activity_points = upload_activity_points

        total_points = self.age_points + self.update_frequency_points + self.upload_activity_points
        self.points = min(total_points, 100)  # Adjusted to cap at the maximum points
        self.save()