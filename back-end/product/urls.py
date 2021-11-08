from django.urls import path
from .views import ProductList, ProductDetail, ProductTagList, ProductTagDetail

urlpatterns = [
    path('', ProductList.as_view(), name='product-list'),
    path('<uuid:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('tags/', ProductTagList.as_view(), name='product-tag-list'),
    path('tags/<uuid:pk>/', ProductTagDetail.as_view(), name='product-tag-detail'),
]