# Generated by Django 3.1.1 on 2021-01-25 14:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Conex', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='message',
            options={'ordering': ['-created_on']},
        ),
    ]
