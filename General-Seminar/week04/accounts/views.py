from django.shortcuts import render, redirect
from .forms import SignupForm
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout #사용자인증

def signup(request):
    if request.method == "POST": # 사용자가 회원가입 버튼을 눌렀을 때
       form = SignupForm(request.POST) 
       if form.is_valid(): # 입력값이 검증되면
        form.save() # 저장하고
        return redirect("login") # login페이지로 이동
    else: # 처음 페이지에 들어왔을 때
       form = SignupForm() # 빈 폼을 생성한다
    return render(request, "signup.html", {"form": form}) # signup.html을 사용자에게 보여줌 + form 데이터를 html로 전달
# Create your views here.

def login(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]

        user = authenticate(request, username=username, password=password)

        if user is not None:
            auth_login(request, user)
            return redirect("main")

    return render(request, "login.html")

def main(request):
    return render(request, "main.html")

def logout(request):
    if request.user.is_authenticated:
        auth_logout(request)
    return redirect("login")
     