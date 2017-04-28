from django.shortcuts import render, redirect
from django.contrib import messages


def index(request):

	music = [ 'krana_app/mp3/numb.mp3' , 'krana_app/mp3/crawling.mp3', 'krana_app/mp3/inthened.mp3']
	context = { "music" : music}

	return render(request, "krana_app/index.html", context)



def dashboard(request):

	if 'user_id' not in request.session:
		messages.error(request, "Please login first")
		return redirect('/login')
	else:
		music = [ 'krana_app/mp3/numb.mp3' , 'krana_app/mp3/crawling.mp3', 'krana_app/mp3/inthened.mp3']
		context = { "music" : music}
		
	return render(request, "krana_app/dashboard.html", context)

	