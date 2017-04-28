from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User
from django.core.urlresolvers import reverse

def index(request):
    return render(request, 'loginreg/index.html')

def register(request):
    user = User.objects.val_Reg(request.POST)
    if 'errors' in user:
        errors = user['errors']
        for error in errors:
            messages.error(request, error)
        return redirect('/login')
    if 'register' in user:
        request.session['user_id'] = user['register'].id
        return redirect('/login/success')

def login(request):
    user = User.objects.val_Login(request.POST)
    if 'register' in user:
        request.session['user_id'] = user['register'].id
        return redirect("/dashboard")
    else:
        if 'errors' in user:
            errors=user['errors']
            for error in errors:
                messages.error(request, error)
            return redirect('/login')

def welcome(request):
    if 'user_id' not in request.session:
        messages.error(request, "Please login first")
        return redirect('/login')
    else:
        context = {
            'user': User.objects.filter(id=request.session['user_id']),
            'users': User.objects.all()
        }
        return redirect("/dashboard")

def remove(request):
    if int(request.POST['id']) == int(request.session['user_id']):
        User.objects.filter(id = request.POST['id']).delete()
        return redirect("/logout")
    else:
        User.objects.filter(id = request.POST['id']).delete()
        return redirect("/login/success")

def logout(request):
    del request.session['user_id']
    return redirect("/")