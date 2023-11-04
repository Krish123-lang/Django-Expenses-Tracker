from django.shortcuts import render

# Create your views here.


def home(request):
    return render(request, 'expenses/index.html')


def add_expenses(request):
    return render(request, 'expenses/add_expenses.html')
