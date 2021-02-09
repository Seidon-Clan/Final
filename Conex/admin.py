from django.contrib import admin
from .models import Message

# Register your models here.

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'body')
    list_filter = ('created_on',)
    search_fields = ('name', 'email', 'subject', 'created_on')

