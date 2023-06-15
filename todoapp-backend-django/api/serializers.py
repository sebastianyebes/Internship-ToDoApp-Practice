from rest_framework import serializers
from .models import Tasks

class TasksSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)

    class Meta:
        model = Tasks
        fields = ['id', 'task']