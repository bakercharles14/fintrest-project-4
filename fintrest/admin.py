from django.contrib import admin
from .models import Post, Creator, Fin

admin.site.register([Post, Creator, Fin])


