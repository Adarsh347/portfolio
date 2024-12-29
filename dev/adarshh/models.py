from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    comments = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
