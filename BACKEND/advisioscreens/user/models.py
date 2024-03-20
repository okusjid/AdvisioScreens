from django.db import models


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
