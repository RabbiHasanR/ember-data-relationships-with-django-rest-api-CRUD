from django.shortcuts import render
from rest_framework import generics
from .models import Product, ProductTag
from .serializers import ProductSerializer, ProductTagSerializer

# Create your views here.

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductTagList(generics.ListCreateAPIView):
    queryset = ProductTag.objects.all()
    serializer_class = ProductTagSerializer

class ProductTagDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProductTag.objects.all()
    serializer_class = ProductTagSerializer



