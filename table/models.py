from django.db import models


class Table(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=64)
    quantity = models.PositiveIntegerField(default=0)
    distance = models.DecimalField(max_digits=100000, decimal_places=2)

    def __str__(self):
        return f'{self.date} {self.name} {self.quantity} {self.distance}'
