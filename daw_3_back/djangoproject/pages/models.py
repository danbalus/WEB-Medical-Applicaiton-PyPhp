from django.db import models
from rest_framework import serializers



class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    content = models.CharField(max_length=255);
    rating = models.IntegerField();
    hide = models.IntegerField();
    doctor_id = models.IntegerField();

    class Meta:
        managed = False
        db_table = 'comments'

    # def __init__(self):
    #     self.name = name
    #     self.email = email
    #     self.all_contacts.append(self)


class User(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.CharField(max_length=255);
    password = models.CharField(max_length=255);
    type = models.CharField(max_length=255);

    class Meta:
        managed = False
        db_table = 'users'


# Create your models here.
class Doctor(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255);
    specialization = models.CharField(max_length=255);
    graduationYear = models.IntegerField();
    profilePicture = models.CharField(max_length=255);
    #medical_units = models.ManyToManyField(Medical_Unit, through='DoctorsMedicalUnit')

    class Meta:
        managed = False
        db_table = 'doctors'

class Medical_Unit(models.Model):
    id = models.AutoField(primary_key=True,verbose_name="id")
    name = models.CharField(max_length=255);
    location = models.CharField(max_length=255);
    type = models.CharField(max_length=255);
    logo = models.CharField(max_length=255);
    latitude = models.CharField(max_length=255);
    longitude = models.CharField(max_length=255);
    doctors = models.ManyToManyField('Doctor', through='DoctorsMedicalUnit')

    class Meta:
        managed = False
        db_table = 'medical_units'





class DoctorsMedicalUnit(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE,)
    medical_unit= models.ForeignKey(Medical_Unit, on_delete=models.CASCADE,)

    class Meta:
        managed = False
        db_table = 'doctors_medical_units'
        unique_together = (('doctor', 'medical_unit'))



class MedicalUnitChart(models.Model):
    id = models.AutoField(primary_key=True, verbose_name="id")
    medical_unit_name = models.CharField(max_length=255);
    medical_unit_rating = models.FloatField();

    class Meta:
        managed = False



class MedicalUnitChartSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalUnitChart
        fields = "__all__"
#
# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         # fields ="__all__"
#         fields = ('id', 'user', 'text', 'photos', 'feature', 'tags')


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"

class MedicalUnitsSerializer(serializers.ModelSerializer):
    #doctors = DoctorSerializer(many=True, read_only=True)
    class Meta:
        model = Medical_Unit
        fields = "__all__"


class DoctorSerializer(serializers.ModelSerializer):
    medical_units= MedicalUnitsSerializer(many=True, read_only=True)
    class Meta:
        model = Doctor
        fields = "__all__"
        #exclude = ('medical_units',)

        # fields = ('id', 'name', 'specialization', 'graduationYear', 'profilePicture')

