
from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name="home")
]

urlpatterns = [
    path('', views.contact_view, name='contact'),  # URL for the contact form
]
