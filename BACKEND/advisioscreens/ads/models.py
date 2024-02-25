from django.db import models
from django.utils.translation import gettext_lazy as _

class Advertisement(models.Model):
    class AdStatus(models.TextChoices):
        PENDING = 'P', _('Pending Approval')
        APPROVED = 'A', _('Approved')
        REJECTED = 'R', _('Rejected')

    title = models.CharField(max_length=255, verbose_name=_("Title"))
    description = models.TextField(verbose_name=_("Description"))
    target_url = models.URLField(verbose_name=_("Target URL"))
    qr_code = models.ImageField(upload_to='qr_codes/', blank=True, null=True, verbose_name=_("QR Code"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Created At"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Updated At"))
    status = models.CharField(
        max_length=1,
        choices=AdStatus.choices,
        default=AdStatus.PENDING,
        verbose_name=_("Status")
    )
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name=_("Price"), null=True, blank=True)

    def __str__(self):
        return self.title
