const listRooms = "http://localhost:3000/rooms";
const listUser = "http://localhost:3000/user";
function search() { 
    fetch(listRooms)
    .then((res) => res.json())
    .then((data) => {
        let checkroom = document.getElementById("nav_input_search").value;
        if(checkroom == ""){
            alert("you must enter search");
            return;
        }
        document.getElementById("pp").innerHTML = "";
        data.forEach(element => {
            if (element.type.includes(checkroom) || element.nameroom.includes(checkroom) || element.price == checkroom){
                document.getElementById("pp").innerHTML += `
                <div class="col-lg-4 col-md-6" >
                <div class="room-item shadow rounded overflow-hidden">
                <div class="position-relative">
                    <a href="/detail.html?id=${element.id}">
                        <img class="img-fluid" src="${element.room_image[0]}" alt="">
                    </a>
                </div>
                <div class="p-4 mt-2">
                    <div class="d-flex justify-content-between mb-3">
                        <h5 class="mb-0">${element.nameroom} </h5>
                        <div class="ps-2">
                            <img src="assets/star.svg" alt="star">
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <small class="border-end me-3 pe-3"><i class="fa fa-bed text-secondary me-2">
                        </i>${element.type[0]}</small>
                        <small class="border-end me-3 pe-3"><i class="fa fa-bath text-secondary me-2">
                        </i>${element.type[1]}</small>
                        <small><i class="fa fa-wifi text-secondary me-2">
                        </i>${element.type[2]}</small>
                    </div>
                    
                    <div class="d-flex justify-content-between">
                        <h4 style="color: #f45cad;">$${element.price}/night</h4>
                    </div>
                </div>
            </div>
            </div>` 
            }
            else if (document.getElementById("pp").innerHTML.length == 0) {
                window.location.href = "looking_errer_page.html";
            }
            else if(checkroom == ""){
                alert("you must enter search");
                return;
            }
        }) 
    })
}

function dangnhap(){
    document.getElementById("sign").style.display = 'none';
    document.getElementById("register").style.display = 'none';
    document.getElementById("avata").style.display = 'block';
}

var currentlylogin = false;
function login(){
    const loginData = {
        email: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassord").value
    };
    fetch(listUser)
    .then(res => res.json())
    .then(data => {
        var a = data.some(function(user, index){
            return user.email === loginData.email && user.password === loginData.password;
        })
        if (a) {
            alert("Bạn đã đăng nhập thành công");
            dangnhap();
            //
            currentlylogin = true;
            localStorage.setItem("currentlylogin", JSON.stringify(currentlylogin));
            return;
        } 
        else {
            alert("Đăng nhập không thành công");
            return;
        }       
    }
)}
var takelogin = JSON.parse(localStorage.getItem("currentlylogin"));
while(takelogin){
    document.getElementById("sign").style.display = 'none';
    document.getElementById("register").style.display = 'none';
    document.getElementById("avata").style.display = 'block';
    break;
}

/////
function logout() {
    currentlylogin = false;
    localStorage.setItem("currentlylogin", JSON.stringify(currentlylogin));
}
function register() { 
    var name = document.getElementById("registerName").value;
    var email = document.getElementById("registerEmail").value;
    var date = document.getElementById("auth-form__date").value;
    var phone = document.getElementById("registerPhone").value;
    var password = document.getElementById("registerPassword").value;
    var gender = document.getElementById("auth-form__gender").value;

    // Tạo đối tượng chứa dữ liệu đăng ký
    const formData = {
        name: name,
        email: email,
        avata: "https://img4.thuthuatphanmem.vn/uploads/2020/08/27/anh-avatar-zalo-cute-nhat-cho-con-trai_052907656.jpg",
        phone: phone,
        age: date,
        gender: gender,
        password: password
    };

    // Gửi dữ liệu đăng ký lên server
    fetch(listUser, { 
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            if (name == ""){
                alert("Name required.");
                return ;
            }
            else if (email == ""){
                alert("Email required.");
                return ;
            }
            else if (password == ""){
                alert("Password required.");
                return ;
            }
            else if (passwordConfirm == ""){
                alert("Password required.");
                return ;
            }
            else if ( password != passwordConfirm ){
                alert("Password don't match retype your Password.");
                return;
            }
            dangnhap();
            currentlylogin = true;
            localStorage.setItem("currentlylogin", JSON.stringify(currentlylogin));
            console.log('Đăng ký thành công');
        } 
        // else {
        //     document.getElementById("sign").style.display = 'block';
        //     document.getElementById("register").style.display = 'block';
        //     document.getElementById("avata").style.display = 'none';
        // }
    })
}
