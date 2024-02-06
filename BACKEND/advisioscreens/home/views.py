from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def main(request):
    Welcome = "<h1 style='text-align: center;'>Welcome to AdvisioScreens</h1>"
    return HttpResponse(Welcome)

