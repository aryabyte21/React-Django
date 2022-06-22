from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from PIL import Image
# Create your models here.
# class Person(models.Model):
#     first_name = models.CharField(max_length=30)
#     last_name = models.CharField(max_length=30)
# class Description(models.Model):
#     description = models.CharField(max_length=100)


class Post(models.Model):
    image = models.ImageField(upload_to='static/images/', blank=True)
    first_name = models.CharField(max_length=256)
    last_name = models.CharField(max_length=256)
    state = models.CharField(max_length=256)
    tournament = models.CharField(max_length=256)
    video_url = models.URLField(max_length=256)
    dob = models.DateField()
    description = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    position = models.CharField(max_length=256, default='None')
    def __str__(self):
        return f'{self.author.username}'

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        img = Image.open(self.image.path)
        if img.height > 400 or img.width > 400:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)



