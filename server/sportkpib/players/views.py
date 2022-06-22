from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
# Create your views here.


from rest_framework import generics


class ListTodo(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PlayerSerializer


class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PlayerSerializer
