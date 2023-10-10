const listRooms = "http://localhost:3000/rooms";
const listUser = "http://localhost:3000/user";
let tang = 0;
async function search() { 
    let checkroom = document.getElementById("nav_input_search").value;
    localStorage.setItem('inputValue', JSON.stringify(checkroom));
    if(checkroom == ""){
        alert("you must enter search");
        return;
    }
    document.getElementById("pp").innerHTML = "";
    try {
        const res = await fetch(listRooms);
        const data = await res.json();
        data.forEach(element => {
            if (element.type.includes(checkroom) || element.nameroom.includes(checkroom) || element.price == checkroom) {
                tang = 1;
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
        });
        if (tang == 0) {
            window.location.href = "looking_errer_page.html";
            return;
        } 
        if (window.location.href != "http://127.0.0.1:5500/hotel_rooms_page.html") {
            window.open("hotel_rooms_page.html", "_blank"); 
            window.addEventListener('load', function() {
                var savedValue = JSON.parse(localStorage.getItem('inputValue'));
                document.getElementById("nav_input_search").value = savedValue;
            });
        }
    } catch (error) {
        console.log(error);
    }
}

function dangnhap(){
    document.getElementById("sign").style.display = 'none';
    document.getElementById("register").style.display = 'none';
    document.getElementById("avata").style.display = 'block';
}

var currentlylogin = false;
function login(){
    var a = true;
    const loginData = {
        email: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassord").value
    };
    fetch(listUser)
    .then(res => res.json())
    .then(data => {
        data.forEach( e =>{
            if (e.email === loginData.email && e.password === loginData.password){
                localStorage.setItem("listuser", JSON.stringify(e.id));
                alert("Bạn đã đăng nhập thành công");
                dangnhap();
                currentlylogin = true;
                localStorage.setItem("currentlylogin", JSON.stringify(currentlylogin));
                a = false;
                return;
            }
        });
        if (a){alert("Bạn đã đăng nhập thành công")};
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
            dangnhap();
            currentlylogin = true;
            localStorage.setItem("currentlylogin", JSON.stringify(currentlylogin));
            console.log('Đăng ký thành công');
        } 
    })
}
