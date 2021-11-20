from rest_framework import serializers
from .models import Contract
from .utils import send_email
from .utils import make_email_body


class ContractSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contract
        exclude = ()

    def validate(self, data):
        if self.instance:
            term_start = data.get("term_start", self.instance.term_start)
            term_end = data.get("term_end", self.instance.term_end)
        else:
            term_start = data.get("term_start")
            term_end = data.get("term_end")
        if term_start == term_end:
            raise serializers.ValidationError("계약 시작일과 종료일이 동일합니다.")

        # 중복체크

        return data

    def create(self, validated_data):
        print(validated_data)
        user = super().create(validated_data)
        user.save()

        send_email(
            validated_data.get("email"),
            make_email_body(
                validated_data.get("id"),
                validated_data.get("target"),
                validated_data.get("email"),
                validated_data.get("term_start"),
                validated_data.get("term_end"),
                validated_data.get("term1_name"),
                validated_data.get("term2_name"),
                validated_data.get("term3_name"),
                validated_data.get("related_contracts"),
            ),
        )
        return user
