from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import User, Gamification


@receiver(post_save, sender=User)
def update_gamification(sender, instance, created, **kwargs):
    """
    Automatically updates Gamification points when a User is created or updated.
    """
    if created:
        # If a new User is created, create a corresponding Gamification instance
        Gamification.objects.create(user=instance)
    else:
        # If an existing User is updated, recalculate points for the corresponding Gamification instance
        instance.gamification.calculate_points()