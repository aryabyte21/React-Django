from django.contrib import admin

from .models import Post
# Register your models here.
admin.site.register(Post)

# @admin.register(Post)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name')
