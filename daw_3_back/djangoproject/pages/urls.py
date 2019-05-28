from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),

    path('comments/<int:id>/<int:hide>', views.comments),
    path('comments/<int:doctor_id>', views.commentsG, name='commentss'),

    # delete
    path('users/<int:id>', views.usersD),


    path('doctors/<int:id>', views.doctorsUD, name='doctorssUD'),
    path('doctors', views.doctorsC, name='doctorss'),

    path('medicalUnits/<int:id>', views.medicalUnitsUD, name='medicalUnitssUD'),
    path('medicalUnits', views.medicalUnitsC, name='medicalUnitss'),

    path('medical-units-rating', views.medUnitChartData, name='medUnitChartDataa'),
]