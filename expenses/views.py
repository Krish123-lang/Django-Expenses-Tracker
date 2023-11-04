from django.shortcuts import render

# Create your views here.
from django.contrib.auth.decorators import login_required

@login_required(login_url='/authentication/login')
def home(request):
    return render(request, 'expenses/index.html')

@login_required(login_url='/authentication/login')
def add_expenses(request):
    return render(request, 'expenses/add_expenses.html')
