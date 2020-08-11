from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect, HttpResponse
from kitchen.models import Comments,Visitors
import json
import datetime
from django.template import RequestContext
from django.contrib.staticfiles.utils import get_files
from django.contrib.staticfiles.storage import StaticFilesStorage
from django.conf import settings
import random
import os


def home(request):
    try:
        time_1,date_1 = get_date_time()
        ss = Visitors(page = "home" , time = time_1 , date = date_1 , meta_information = request.META)
        ss.save()
    except Exception as ee:
        print(ee)
    return render(request,'home.html')


def design(request):
    try:
        time_1,date_1 = get_date_time()
        ss = Visitors(page = "design" , time = time_1 , date = date_1 , meta_information = request.META)
        ss.save()
    except Exception as ee:
        print(ee)
    return render(request,'mysite.html')

def portfolio(request):
    try:
        time_1,date_1 = get_date_time()
        ss = Visitors(page="portfolio", time=time_1, date=date_1, meta_information=request.META)
        ss.save()
    except Exception as ee:
        print(ee)
    return render(request,'portfolio.html')

def contactus(request):
    try:
        time_1,date_1 = get_date_time()
        ss = Visitors(page="contact", time=time_1, date=date_1, meta_information=request.META)
        ss.save()
    except Exception as ee:
        print(ee)
    return render(request,'contact.html')


def contact(request):
    if request.method == 'POST':
        try:
            name=request.POST.get('name', '')
            email = request.POST.get('email', '')
            msg_subject = request.POST.get('msg_subject', '')
            message = request.POST.get('message', '')
            time_1,date_1 = get_date_time()
            ss = Comments(name=name, email=email, subject=msg_subject, time = time_1 , date = date_1, text=message)
            ss.save()
            response_data = {}
            return HttpResponse(json.dumps(response_data), content_type="application/json")
        except:
            print("ds")
            return HttpResponse(status=401,content='Your message here')


def handler404(request, exception, template_name="404.html"):
    response = render(request,"404.html")
    response.status_code = 404
    return response


def handler500(request):
    response = render(request,"500.html")
    response.status_code = 500
    return response



"""def album(request):

    images = []
    try:
        s = StaticFilesStorage()
        l = list(get_files(s, location='album/images'))
        #p = static("album/images/")
        #l = list(get_files(p))
        #p = staticfiles_storage.path("album/images")
        p = static("album/images/")
        #s = os.listdir(p)
        print(l)
        #images = glob.glob(p)
        #print(images)
    except Exception as e:
        print(e)
    images = ["static/album/images/img_1.jpg","static/album/images/img_2.jpg","static/album/images/img_3.jpg","static/album/images/img_4.jpg","static/album/images/img_5.jpg","static/album/images/img_6.jpg","static/album/images/img_7.jpg","static/album/images/img_8.jpg","static/album/images/img_9.jpg","static/album/images/img_10.jpg"]
    random.shuffle(images)
    desc = "محل اجرای این پروژه کوی فراز میباشد."
    #return render_to_response('album.html')
    return render_to_response('album.html', {'images': images,'description':desc})"""


def get_date_time():
    time_1 = datetime.datetime.now().time()
    date_1 = datetime.datetime.now().date()
    return time_1,date_1