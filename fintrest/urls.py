from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('creator', views.CreatorView)
router.register('post', views.PostView)
router.register('fin', views.FinView)
router.register('allposts', views.AllPostsView)


urlpatterns = [
    path('', include(router.urls))
]
