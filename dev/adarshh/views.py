from django.shortcuts import render, redirect
from .forms import ContactForm

def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()  # Save the data to the database
            return render(request,'home.html',{'form': form})  # Redirect to a success page
    else:
        form = ContactForm()
    return render(request, "home.html", {'form': form})

def home(request):
    return render (request,"home.html")