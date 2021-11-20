from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from .models import Contract
from .serializers import ContractSerializer


class ContractViewSet(ModelViewSet):

    queryset = Contract.objects.all()
    serializer_class = ContractSerializer
