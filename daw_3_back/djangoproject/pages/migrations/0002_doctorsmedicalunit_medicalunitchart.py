# Generated by Django 2.2 on 2019-05-11 00:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DoctorsMedicalUnit',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'db_table': 'doctors_medical_units',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='MedicalUnitChart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('medical_unit_name', models.CharField(max_length=255)),
                ('medical_unit_rating', models.IntegerField()),
            ],
            options={
                'managed': False,
            },
        ),
    ]
