from django import forms
from .models import Message

class MessageForm(forms.ModelForm):
    class Meta:
        model = Message
        fields = ('name', 'email', 'subject', 'body')
        widgets = {
            "name": forms.TextInput(attrs={'placeholder': 'Name'}),
             "email": forms.TextInput(attrs={'placeholder': 'Email or Phone No'}),
             "subject": forms.TextInput(attrs={'placeholder': 'Subject'}),
             "body": forms.Textarea(attrs={'placeholder': 'Describe project...', "height": "10rem", "rows": "10"}),
        }
