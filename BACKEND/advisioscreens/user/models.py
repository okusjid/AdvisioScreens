from django.db import models

class User(models.Model):
    clerk_user_id = models.CharField(max_length=255, unique=True, verbose_name="Clerk User ID")
    name = models.CharField(max_length=255, verbose_name="Name")
    email = models.EmailField(unique=True, verbose_name="Email")
    role = models.CharField(max_length=50, verbose_name="Role")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Created At")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Updated At")

    def __str__(self):
        return self.name
