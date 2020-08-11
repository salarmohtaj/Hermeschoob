"""Hermeschoob URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from kitchen import views
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic import TemplateView
from django.conf.urls import url
from django.contrib.sitemaps.views import sitemap
from kitchen.sitemap import StaticViewSitemap

from django.conf.urls import handler404,handler500


sitemaps = {
    'static': StaticViewSitemap,
}

urlpatterns = [
    path('home/', views.home, name = "home"),
    path('home', views.home, name = "home"),
    path('', views.home, name = "home"),
    path('design/', views.design, name = "design"),
    path('design', views.design, name = "design"),
    path('portfolio/', views.portfolio, name = "portfolio"),
    path('portfolio', views.portfolio, name = "portfolio"),
    path('contact/', views.contactus, name="contact"),
    path('contact', views.contactus, name="contact"),
    #path('album/', views.album),
    #path('album', views.album),
    path('contactform/', views.contact),
    url(r'^robots.txt$', TemplateView.as_view(template_name="robots.txt", content_type='text/plain')),
    url(r'^googlec0272dbc684d7d13.html$', TemplateView.as_view(template_name='googlec0272dbc684d7d13.html')),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps},name='django.contrib.sitemaps.views.sitemap'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


handler404 = views.handler404
handler500 = views.handler500
