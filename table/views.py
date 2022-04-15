from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.viewsets import ModelViewSet
from .models import Table
from .serializers import TableSerializer
from django_filters import rest_framework as filters
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView
from rest_framework.renderers import JSONRenderer


class TableFilter(filters.FilterSet):
    name = filters.CharFilter(field_name='name', lookup_expr='icontains')

    class Meta:
        model = Table
        fields = ['name', 'quantity', 'distance']


class TableModelViewSet(ModelViewSet):
    queryset = Table.objects.all()
    serializer_class = TableSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['name', 'quantity', 'distance']
    filter_class = TableFilter


class TablePagination(PageNumberPagination):
    page_size = 20

class TableListAPIView(ListAPIView):
    renderer_classes = [JSONRenderer]
    queryset = Table.objects.all()
    serializer_class = TableSerializer