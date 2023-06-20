from django.urls import path
from .views import TaskView, TaskDetailView

urlpatterns = [
    path('tasks/', TaskView.as_view()),
    path('tasks/<int:task_id>/', TaskDetailView.as_view())
]