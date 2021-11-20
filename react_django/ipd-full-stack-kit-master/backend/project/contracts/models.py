from django.db import models


class Contract(models.Model):

    target = models.CharField(max_length=140, null=False, blank=False)
    email = models.EmailField(max_length=255, null=False, blank=False)
    term_start = models.DateField(null=False, blank=False)
    term_end = models.DateField(null=False, blank=False)
    term1_name = models.CharField(max_length=255, null=False, blank=False)
    term1_basis = models.CharField(max_length=255, null=False, blank=False)
    term2_name = models.CharField(max_length=255, null=True, blank=True)
    term2_basis = models.CharField(max_length=255, null=True, blank=True)
    term3_name = models.CharField(max_length=255, null=True, blank=True)
    term3_basis = models.CharField(max_length=255, null=True, blank=True)
    related_contracts = models.ManyToManyField("contracts.Contract", blank=True)

    def __str__(self):
        return str(self.term_start.year) + "-" + str(self.pk) + " " + self.target
