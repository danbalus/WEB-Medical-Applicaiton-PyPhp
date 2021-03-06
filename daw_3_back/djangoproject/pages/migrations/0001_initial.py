# Generated by Django 2.2 on 2019-05-10 00:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('content', models.CharField(max_length=255)),
                ('rating', models.IntegerField()),
                ('hide', models.IntegerField()),
                ('doctor_id', models.IntegerField()),
            ],
            options={
                'db_table': 'comments',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('specialization', models.CharField(max_length=255)),
                ('graduationYear', models.IntegerField()),
                ('profilePicture', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'doctors',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Medical_Unit',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='id')),
                ('name', models.CharField(max_length=255)),
                ('location', models.CharField(max_length=255)),
                ('type', models.CharField(max_length=255)),
                ('logo', models.CharField(max_length=255)),
                ('latitude', models.CharField(max_length=255)),
                ('longitude', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'medical_units',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.CharField(max_length=255)),
                ('password', models.CharField(max_length=255)),
                ('type', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'users',
                'managed': False,
            },
        ),
    ]
