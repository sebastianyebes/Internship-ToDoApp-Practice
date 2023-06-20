from django.db import models

# Create your models here.

class Task(models.Model):
    todo = models.TextField(default="", null=False, blank=False)

    def __str__(self):
        return self.todo