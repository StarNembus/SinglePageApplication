from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import TableListAPIView

urlpatterns = [
    path('table/<int:pk>', TableListAPIView.as_view()),

]

urlpatterns = format_suffix_patterns(urlpatterns)
