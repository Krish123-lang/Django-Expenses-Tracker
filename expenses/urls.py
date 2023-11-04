from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('add-expenses', views.add_expenses, name='add-expenses'),
]
