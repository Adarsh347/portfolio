from django.contrib import admin
from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'comments', 'submitted_at')  # Ensure these fields exist in the model
    search_fields = ('name', 'email', 'comments')
