from rest_framework import serializers
from .models import *

class PlayerSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True)
    class Meta:
        fields = (
            'first_name',
            'last_name',
            'state',
            'tournament',
            'video_url',
            'dob',
            'description',
            'date_posted',
            'author',
            'image',
            'position',
        )
        model = Post
