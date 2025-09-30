from django.shortcuts import render,redirect
from home.forms import *
# Create your views here.
def home(request):
    if request.method=='POST':
        obj=CreateForm(request.POST)
        if obj.is_valid():
            obj.save()
            return redirect('home')
        else:
            return redirect('home')
    else:
        obj=CreateForm()
        for x in obj.fields.values():
            x.widget.attrs['class']='form-control'
        return render(request,'home.html',{'data':obj})
   

    