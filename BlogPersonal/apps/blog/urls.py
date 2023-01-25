from django.urls import path

from .views import *

urlpatterns = [
    path('list', BlogListView.as_view()),
    path('by_category', ListPostsByCategoryView.as_view()),
]