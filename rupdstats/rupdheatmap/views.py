from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def index(request):
    context = {
        
    }
    return render(request, "rupdheatmap/index.html", context)

def filter_index(request, filter):
    print(filter)
    context = {
        
    }
    return render(request, "rupdheatmap/index.html", context)
