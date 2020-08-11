from django.conf import settings
from django.contrib import sitemaps
from django.urls import reverse
from django.utils.text import slugify

class StaticViewSitemap(sitemaps.Sitemap):
    priority = 0.5
    changefreq = 'weekly'
    protocol = "http"

    def items(self):
        return ['home', 'portfolio', 'contact', 'design']

    def location(self, item):
        return reverse(item)