const listUser1 = "http://localhost:3000/user";

fetch(listUser1)
.then((res) => res.json())
.then((data) => {
    data.forEach(element => {
        var userid = localStorage.getItem('listuser');
        if (userid == element.id){
            document.getElementById("name-user").innerHTML = element.name;
        }
    });
})
