from django.db import models

# Create your models here.

class Tasks(models.Model):
    task = models.TextField(default="", null=False, blank=False)

    def __str__(self):
        return self.task