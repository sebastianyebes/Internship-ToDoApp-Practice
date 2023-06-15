from rest_framework import serializers
from .models import Task

class TasksSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)

    class Meta:
        model = Task
        fields = ['id', 'todo']