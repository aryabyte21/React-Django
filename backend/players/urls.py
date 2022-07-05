# todos/urls.py
from django.urls import path
from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings
from . import views

urlpatterns = [
    path('', views.ListTodo.as_view()),
    path('<int:pk>/', views.DetailTodo.as_view()),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
