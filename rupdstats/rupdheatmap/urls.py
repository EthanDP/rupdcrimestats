from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("infographics", views.infographics, name="infographics"),
    path("<filter>", views.filter_index, name="filter index"),
] 
