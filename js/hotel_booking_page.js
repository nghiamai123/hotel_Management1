// hàm thay đổi dao diện phòng.
const searchParams = new URLSearchParams(window.location.search);
const detailId = searchParams.get("id");
const baserooms = "http://localhost:3000/rooms";
fetch(baserooms)
.then((res) => res.json())
.then((data) => {
    data.forEach(element => {
        console.log(element.nameroom)
        if (detailId == element.id){
            document.getElementById("hinh").src = element.room_image[1];
            document.getElementById("name-room1").innerHTML = element.nameroom;
            document.getElementById("describe").innerHTML = element.description;
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
        alert("booking not Successful !!!")
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
    if (dayDifference > 0){
        // console.log(isnull(dayDifference))
        pleselement.style.display = "none";
        pleselement1.style.display = "inline";
        // n.style.display = "inline";
        pleselement1.innerHTML = document.getElementById("tongcoban").innerHTML + " x " + dayDifference + " night";
        tongelement.innerHTML = 3 + 10 + (dayDifference * parseInt(document.getElementById("tongcoban").innerHTML));
        document.getElementById("tongcoban").innerHTML = (dayDifference * parseInt(document.getElementById("tongcoban").innerHTML));
        alert("booking Successful !!!")
    }
    else{
        document.getElementById("tongcoban").innerHTML = 0
        tongelement.innerHTML = 0
    }
}
// hàm dành cho form input date thư viện js
$( function() {
    $("#datepicker1").datepicker();
    $("#datepicker2").datepicker();
});


