var takelogin = JSON.parse(localStorage.getItem("currentlylogin"));
while(takelogin){
    document.getElementById("img-avt").src = JSON.parse(localStorage.getItem("avata"));
    break;
}