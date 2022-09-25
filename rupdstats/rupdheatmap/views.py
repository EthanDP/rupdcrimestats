from os.path import join

from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.conf import settings

from .crime_utils import CrimeUtils

def index(request):
    crime_util = CrimeUtils()
    frame = crime_util.get_frame()
    images = ["http://127.0.0.1:8000/media/" + "output.png"]
    context = {
        "images": images,
        "weights": crime_util.get_location_json(frame)
    }
    return render(request, "rupdheatmap/index.html", context)

def filter_index(request, filter):
    crime_util = CrimeUtils()
    frame = crime_util.get_frame()
    frame = crime_util.get_filtered_dict(frame, filter)
    print(type(frame))
    images = ["test"]
    context = {
        "images": images,
        "weights": crime_util.get_location_json(frame)
    }
    return render(request, "rupdheatmap/index.html", context)

def infographics(request):
    return render(request, "rupdheatmap/infographics.html")
