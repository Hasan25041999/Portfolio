from django.db import models

# Create your models here.
class info(models.Model):
    
    FirstName=models.CharField(max_length=50)
    LastName=models.CharField(max_length=50)
    Email=models.EmailField(max_length=50,unique=True)
    msg=models.CharField(max_length=100)
    def __str__(self):
        return self.FirstName