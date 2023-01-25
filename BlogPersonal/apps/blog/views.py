from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import Post, ViewCount
from apps.category.models import Category

from .serializers import PostSerializer, PostListSerializer
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination

class BlogListView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        if Post.objects.all().exists():
            
            posts = Post.objects.all()

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)

            serializer = PostListSerializer(posts, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_404_NOT_FOUND)



class ListPostsByCategoryView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        if Post.objects.all().exists():
            
            slug = request.query_params.get('slug')
            print(slug)
            posts = Post.objects.order_by('-published').all()

            
            print(posts)
            return  Response({'success':'success'}, status=status.HTTP_200_OK)
        else:
             return Response({'error': 'No posts found'}, status=status.HTTP_404_NOT_FOUND)
