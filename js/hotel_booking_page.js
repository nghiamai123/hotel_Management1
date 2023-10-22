// hàm thay đổi dao diện phòng.
const searchParams = new URLSearchParams(window.location.search);
const detailId = searchParams.get("id");
const baserooms = "http://localhost:3000/rooms";
const listuser = "http://localhost:3000/user"
var IDuser = JSON.parse(localStorage.getItem("listuser"));
// hàm dành cho form input date thư viện js
$( function() {
    $("#datepicker1").datepicker();
    $("#datepicker2").datepicker();
});

// gán dữ liệu vào cho trang booking default
fetch(baserooms)
.then((res) => res.json())
.then((data) => {
    data.forEach(element => {
        if (detailId == element.id){
            document.getElementById("hinh").src = element.room_image[1];
            document.getElementById("tinhngay").innerHTML = element.price;
            document.getElementById("tongcoban").innerHTML = element.price;
            localStorage.setItem("nameroom", JSON.stringify(element.nameroom));
            localStorage.setItem("price", JSON.stringify(element.price));
        }
    });
})

// tính phí và trả ra số Ngày
function calculateDateDifference() {
    var date1Input = document.getElementById('datepicker1');
    var date2Input = document.getElementById('datepicker2');
    console.log(date1Input.value)
    var pleselement1 = document.getElementById("tinhngay1");
    var pleselement = document.getElementById("tinhngay");
    var tongelement = document.getElementById("tong");
    currentlylogin = localStorage.getItem("currentlylogin");
    if (isNaN(parseInt(date1Input.value)) || isNaN(parseInt(date2Input.value))) {
        pleselement.style.color = "red";
        tongelement.style.color = "red";
        alert("ERROR !!!")
        return;
    }
    else if (currentlylogin != "true"){
        alert("you are need login now");
        return;
    }
    var date1 = new Date(date1Input.value);
    var date2 = new Date(date2Input.value);
    console.log(date1)
    var timeDifference = Math.abs(date2.getTime() - date1.getTime());
    var dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); 

    // Chuyển đổi thành số ngày
    if (date2 > date1){
        pleselement.style.display = "none";
        pleselement1.style.display = "inline";
        pleselement1.innerHTML = document.getElementById("tongcoban").innerHTML + " x " + dayDifference + " night";
        tongelement.innerHTML = 3 + 10 + (dayDifference * parseInt(document.getElementById("tongcoban").innerHTML));
        tongelement.innerHTML = (dayDifference * parseInt(document.getElementById("tongcoban").innerHTML));
    }
    else{
        tongelement.innerHTML = 0;
        alert("YOU NEED ENTER DAY TRUE");
    }
}

// ngày tự động cho checkin
var currentDate = new Date();
var year = currentDate.getFullYear(); 
var month = currentDate.getMonth() + 1; 
var day = currentDate.getDate(); 
var hours = currentDate.getHours(); 
var minutes = currentDate.getMinutes(); 
var seconds = currentDate.getSeconds(); 
document.getElementById("datepicker1").value = `${month}/${day}/${year}`;

/// hàm thanh toán VÀ lưu vào lịch sử đặt phòng thành công

// lấy id user khi người dùng đăng nhập
fetch (listuser)
    .then((res) => res.json())
    .then(data => {
        data.forEach(Element => {
            if (Element.id == IDuser) {
                document.getElementById("in").value = Element.name;
                document.getElementById("InEm").value = Element.email;
            }
        })
    })

function payment() {
    calculateDateDifference();
    var history1 = [];

    var typecard = document.getElementById("infirst1").value;
    var numbercard = document.getElementById("number-card").value;
    var Expirationdate = document.getElementById("Expiration-date").value;
    var CVV = document.getElementById("CVV").value;
    var Email = document.getElementById("InEm").value;
    var country = document.getElementById("infirst2").value;
    var chin = document.getElementById("datepicker1").value;
    var chout = document.getElementById("datepicker2").value;
    var nameroom1 = JSON.parse(localStorage.getItem("nameroom"));
    var price = JSON.parse(localStorage.getItem("price"));
    history1.push(nameroom1, chin, chout, typecard, numbercard, price, Expirationdate, CVV, Email, country);
    // bắt lỗi và lấy thông tin cho history
    console.log(typecard);
    if (typecard == ""){
        alert("Credit or Debit card.");
        return ;
    }
    else if (numbercard == ""){
        alert("You need enter number card.");
        return ;
    }else if (Expirationdate == ""){
        alert("You need Expiration date.");
        return ;
    }
    else if (CVV == ""){
        alert("You need enter CVV.");
        return ;
    }
    else if (Email == ""){
        alert("You need enter email.");
        return ;
    }
    else if (country == ""){
        alert("You need enter email.");
        return ;
    }
// Kiểm tra trạng thái hiển thị của icon2
const updateUser = async (IDuser, newData) => {
    const url = `http://localhost:3000/user/${IDuser}`;
    try {
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
    });

    if (response.ok) {
        console.log(history1);
    } else {
        console.error('Lỗi khi cập nhật dữ liệu người dùng!');
    }
    } catch (error) {
    console.error('Lỗi khi gửi yêu cầu:', error);
    }
};
const newData = {
    history: history1,
};
updateUser(IDuser, newData); // Cập nhật dữ liệu người dùng 
}
