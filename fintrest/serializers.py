from rest_framework import serializers
from .models import Creator, Post, Fin


class CreatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Creator
        fields = '__all__'


class FinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fin
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class AllPostsSerializer(serializers.ModelSerializer):
    fins = FinSerializer(many=True, read_only=True)
    creator = CreatorSerializer(many=False, read_only=True)

    class Meta:
        model = Post
        fields = ('id',
                  'title',
                  'date',
                  'content',
                  'image'
                  'fins',
                  'creator'
                  )
