from django.db import models

# Create your models here.

class Comments(models.Model):
    name  = models.CharField(max_length=100, blank=True, default='')
    email = models.CharField(max_length=100, blank=True, default='')
    subject = models.CharField(max_length=100, blank=True, default='')
    date = models.DateField()
    time = models.TimeField()
    text = models.TextField()


class Visitors(models.Model):
    page = models.CharField(max_length=100, blank=True, default='')
    date = models.DateField()
    time = models.TimeField()
    meta_information = models.TextField()