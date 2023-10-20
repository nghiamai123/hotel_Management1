// hàm thay đổi dao diện phòng.
const searchParams = new URLSearchParams(window.location.search);
const detailId = searchParams.get("id");
const baserooms = "http://localhost:3000/rooms";
fetch(baserooms)
.then((res) => res.json())
.then((data) => {
    data.forEach(element => {
        if (detailId == element.id){
            document.getElementById("hinh").src = element.room_image[1];
            document.getElementById("tinhngay").innerHTML = element.price;
            document.getElementById("tongcoban").innerHTML = element.price;
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
        var ples = "Please enter date !";
        var tong = "0";
        pleselement.style.color = "red";
        tongelement.style.color = "red";
        pleselement.style.display = "block";
        pleselement.innerHTML = ples;
        tongelement.innerHTML = tong;
        pleselement1.style.display = "none";
        document.getElementById("tongcoban").innerHTML = 0
        alert("add room not Successful !!!")
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
    console.log("Khoảng cách giữa hai ngày là: " + dayDifference + " ngày");
    if (date2 > date1){
        pleselement.style.display = "none";
        pleselement1.style.display = "inline";
        pleselement1.innerHTML = document.getElementById("tongcoban").innerHTML + " x " + dayDifference + " night";
        tongelement.innerHTML = 3 + 10 + (dayDifference * parseInt(document.getElementById("tongcoban").innerHTML));
        tongelement.innerHTML = (dayDifference * parseInt(document.getElementById("tongcoban").innerHTML));
        alert("add room Successful !!!");
    }
    else{
        tongelement.innerHTML = 0;
        alert("failed to set your room");
    }
}

// hàm dành cho form input date thư viện js
$( function() {
    $("#datepicker1").datepicker();
    $("#datepicker2").datepicker();
});

// hàm thanh toán
