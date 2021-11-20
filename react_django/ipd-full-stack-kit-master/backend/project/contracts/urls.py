from rest_framework.routers import DefaultRouter
from . import views

app_name = "contracts"
router = DefaultRouter()
router.register("", views.ContractViewSet)


urlpatterns = router.urls
