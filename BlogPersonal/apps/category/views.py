from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Category


class ListCategoriesView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None): 
        if Category.objects.all().exists():
            print("Categories List")
            return Response({'categories': 'test message'}, status=status.HTTP_200_OK)
        else:
              return Response({'error': 'No categories found'}, status=status.HTTP_404_NOT_FOUND)
