from django.shortcuts import render, HttpResponse, Http404
from .forms import MessageForm
import datetime

# Create your views here.

def home(request):
    return render(request, 'index.html')

def messages(request):
    year = datetime.datetime.today().year
    if request.method == 'POST':
        message_form = MessageForm(data=request.POST)
        if message_form.is_valid():
            message_form.save(commit=True)
        else:
            return Http404()
    else:
        message_form = MessageForm()
    return render(request, 'index.html', {'message_form': message_form,
                                          'year': year})
