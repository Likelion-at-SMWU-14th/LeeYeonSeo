from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


class SignupForm(UserCreationForm):
# 기본 회원가입 Form을 확장하여 사용
    class Meta:
        model = User
        fields = ['username', 'password1', 'password2', 'first_name']
# 메타 클래스에서 어떤 모델을 사용할지, 어떤 필드를 입력받을 지 정의한다.