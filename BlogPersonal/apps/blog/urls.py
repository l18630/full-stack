from django.urls import path

from .views import *

urlpatterns = [
    path('list', BlogListView.as_view())
]