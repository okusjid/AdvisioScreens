from rest_framework import serializers
from .models import Gamification

class GamificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gamification
        fields = '__all__'
