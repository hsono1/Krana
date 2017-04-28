from django.conf.urls import url
from . import views
from django.core.urlresolvers import reverse


urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register, name = "register"),
    url(r'^success$', views.welcome),
    url(r'^login$', views.login, name = "login"),
    url(r'^remove$', views.remove ),
    url(r'^logout$', views.logout, name = "logout"),
    
]
