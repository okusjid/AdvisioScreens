# Generated by Django 5.0.3 on 2024-05-03 11:33

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_upload_name_upload_rejected'),
    ]

    operations = [
        migrations.CreateModel(
            name='Gamification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('points', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(10)], verbose_name='Points')),
                ('level', models.IntegerField(default=1, validators=[django.core.validators.MaxValueValidator(10)], verbose_name='Level')),
                ('age_points', models.IntegerField(default=0, verbose_name='Age Points')),
                ('update_frequency_points', models.IntegerField(default=0, verbose_name='Update Frequency Points')),
                ('upload_activity_points', models.IntegerField(default=0, verbose_name='Upload Activity Points')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='gamification', to='user.user')),
            ],
        ),
    ]