from django.shortcuts import render
from rest_framework.views import APIView
from .models import Task
from .serializers import TasksSerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class TaskView(APIView):
    @staticmethod
    def get(request):
        tasks = Task.objects.all()
        serializer = TasksSerializer(tasks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)