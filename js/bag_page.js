// display out screan;
const listuser = "http://localhost:3000/user";
var IDuser = JSON.parse(localStorage.getItem("listuser"));
// hàm dành cho form input date thư viện js
$( function() {
    $("#datepicker1").datepicker();
    $("#datepicker2").datepicker();
});
var namer = [];
var price = [];
const basecards = "http://localhost:3000/orders";
fetch(basecards)
.then(res => res.json())
.then(data => {
    var oders = data.map(function(data){
        namer.push(data.nameroom);
        price.push(data.price);
        if (IDuser == data.IDuser){
        return `<div class="div-price-detail">
        <p class="title-small">${data.nameroom}</p>
        <div class="row  d-flex justify-content-center align-items-center">
            <div class="col-7">
                <div class="d-flex ">
                    <p id="price">Price</p>
                </div>
            </div>
            <div class="col-5 text-end">
                <p id="tongcoban">$${tongpriceroom(data.price)}</p>
            </div>
        </div>
        </div>
        <hr>`
    }})
    document.getElementById("cards").innerHTML = `${oders.join("") + `<div class="div-total-price d-flex justify-content-between align-content-center ">
    <p class="title-small">Total (USD)</p>
    <p id="tong" class="price">$${0}</p>
    </div>
    </div>`} `
})

//tính tổng tiền của cách phòng gộp thành 1;
localStorage.setItem("tongpricerooms", JSON.stringify(0));
function tongpriceroom(price){
    let num = JSON.parse(localStorage.getItem("tongpricerooms"));
    let tong = parseInt(price) + parseInt(num);
    parseInt(tong);
    localStorage.setItem("tongpricerooms", JSON.stringify(tong));
    return parseInt(tong);
}

function calculateDateDifference() {
    var date1Input = document.getElementById('datepicker1');
    var date2Input = document.getElementById('datepicker2');
    var tongelement = document.getElementById("tong");
    currentlylogin = localStorage.getItem("currentlylogin");
    var totalp = JSON.parse(localStorage.getItem("tongpricerooms"));
    if (isNaN(parseInt(date1Input.value)) || isNaN(parseInt(date2Input.value))) {
        alert("ERROR !!!");
        return;
    }
    if (currentlylogin != "true"){
        alert("you are need login now");
        return;
    }
    var date1 = new Date(date1Input.value);
    var date2 = new Date(date2Input.value);

    var timeDifference = Math.abs(date2.getTime() - date1.getTime());
    var dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); 

    // Chuyển đổi thành số ngày
    if (date2 > date1){
        tongelement.innerHTML = 3 + 10 + (dayDifference * parseInt(totalp));
        tongelement.innerHTML = (dayDifference * tongelement.innerHTML);
        localStorage.setItem("tong", JSON.stringify(tongelement.innerHTML));
        "$" + tongelement.innerHTML;
    }
    else{
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
                var takelogin = JSON.parse(localStorage.getItem("currentlylogin"));
                if (takelogin == true) {
                    document.getElementById("in").value = Element.name;
                    document.getElementById("InEm").value = Element.email;
                }
            }
        })
    })

function payment() {
    calculateDateDifference();
    var typecard = document.getElementById("infirst1").value;
    var numbercard = document.getElementById("number-card").value;
    var Expirationdate = document.getElementById("Expiration-date").value;
    var CVV = document.getElementById("CVV").value;
    var Email = document.getElementById("InEm").value;
    var country = document.getElementById("infirst2").value;
    var chin = document.getElementById("datepicker1").value;
    var chout = document.getElementById("datepicker2").value;
    var totalprice = JSON.parse(localStorage.getItem("tong"));
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
const updateUser = async (newData) => {
    const url = `http://localhost:3000/order`;
    try {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
    });

    if (response.ok) {
        for (var i = 1; i <= namer.length; i++ ){
            fetch(`http://localhost:3000/orders/${i}`, {
            method: 'DELETE'
        })
            .then(response => {
            if (response.ok) {
                console.log(`Đối tượng đã được xóa thành công.`);
            } else {
                console.error(`Lỗi xóa đối tượng:`, response.statusText);
            }
            })
            .catch(error => {
            console.error(`Lỗi kết nối khi xóa đối tượng:`, error);
            }); 
        }
    } else {
        console.error('Lỗi khi cập nhật dữ liệu người dùng!');
    }
    } catch (error) {
    console.error('Lỗi khi gửi yêu cầu:', error);
    }
};
const newData = {
    user: IDuser,
    typecard: typecard,
    numbercard: numbercard,
    Expirationdate: Expirationdate,
    CVV: CVV,
    Email: Email,
    country: country,
    chin: chin,
    chout: chout,
    nameroom: namer,
    price: price,
    totalprice: totalprice,
    status: confirm("You pay it?")
};
    updateUser(newData); // Cập nhật dữ liệu người dùng
}
//

