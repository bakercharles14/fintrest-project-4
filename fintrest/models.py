from django.db import models


class Creator(models.Model):
    name = models.CharField(max_length=150)
    description = models.CharField(max_length=255)
    image = models.TextField()

    def __str__(self):
        return self.name


class Post(models.Model):
    title = models.CharField(max_length=255)
    date = models.DateField(auto_now=True)
    content = models.TextField()
    image = models.TextField()
    creator = models.ForeignKey(
        Creator, on_delete=models.CASCADE, related_name='post')

    def __str__(self):
        return self.title


class Fin(models.Model):
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name='fins')
    creator = models.ForeignKey(
        Creator, on_delete=models.CASCADE, related_name='fins')
