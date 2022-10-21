from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic.base import TemplateView

urlpatterns = [
    path('apiadmin/', admin.site.urls),
    re_path('^((?!api).)*$', TemplateView.as_view(template_name='index.html')),
    path('api/', include('api.urls'), name='api'),
]
