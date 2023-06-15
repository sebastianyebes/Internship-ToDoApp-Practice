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

    @staticmethod
    def post(request):
        serializer = TasksSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)