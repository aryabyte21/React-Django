# Generated by Django 4.0.5 on 2022-06-20 20:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('players', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='position',
            field=models.CharField(default='None', max_length=256),
        ),
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, upload_to='static/images/'),
        ),
    ]