from django.urls import path, include
from contact.views import contact_view
from django.contrib import admin


urlpatterns = [
    # ... other paths ...
    path('admin/', admin.site.urls),
    path('contact/', contact_view, name='contact')
]