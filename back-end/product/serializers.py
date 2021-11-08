from rest_framework import serializers
from .models import Product, ProductTag


class ProductTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductTag
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    tags = ProductTagSerializer(many=True, read_only=True)
    class Meta:
        model = Product
        fields = '__all__'