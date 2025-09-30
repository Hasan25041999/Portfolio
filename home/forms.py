from django import forms
from home.models import *
class CreateForm(forms.ModelForm):
    class Meta:
        model=info
        fields='__all__'