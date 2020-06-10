from django.shortcuts import render

from rest_framework import viewsets

from .serializers import CreatorSerializer, PostSerializer, FinSerializer, AllPostsSerializer
from .models import Creator, Post, Fin


class CreatorView(viewsets.ModelViewSet):
    queryset = Creator.objects.all()
    serializer_class = CreatorSerializer


class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class FinView(viewsets.ModelViewSet):
    queryset = Fin.objects.all()
    serializer_class = FinSerializer


class AllPostsView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = AllPostsSerializer
