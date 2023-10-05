
window.addEventListener('scroll',function() {
    var moving = document.getElementById("moving-div");
    var scrollXPosition = window.scrollX;
    var scrollYPosition = window.scrollY;
    console.log('Vị trí cuộn theo trục x:', scrollXPosition);
    console.log('Vị trí cuộn theo trục y:', scrollYPosition);
    if (scrollYPosition > 1148){
        moving.style.display = "none";
    }
    else{
        moving.style.display = "block";
    }
})
// tính và trả ra số Ngày

function calculateDateDifference() {
    var date1Input = document.getElementById('datepicker1');
    var date2Input = document.getElementById('datepicker2');
    console.log(date1Input.value)
    var pleselement1 = document.getElementById("tinhngay1");
    var pleselement = document.getElementById("tinhngay");
    var tongelement = document.getElementById("tong");
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
        return;
    }
    var date1 = new Date(date1Input.value);
    var date2 = new Date(date2Input.value);
    console.log(date1)
    var timeDifference = Math.abs(date2.getTime() - date1.getTime());
    var dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Chuyển đổi thành số ngày
    console.log("Khoảng cách giữa hai ngày là: " + dayDifference + " ngày");
    if (dayDifference > 0){
        // console.log(isnull(dayDifference))
        pleselement.style.display = "none";
        pleselement1.style.display = "inline";
        // n.style.display = "inline";
        pleselement1.innerHTML = "$50 x " + dayDifference + " night";
        tongelement.innerHTML = 3 +10 + (dayDifference * 50);
        document.getElementById("tongcoban").innerHTML = (dayDifference * 50);
    }
    else{
        document.getElementById("tongcoban").innerHTML = 0
        tongelement.innerHTML = 0
    }
}
let date = new Date();
let datenow = date.getDate();
let monthnow = date.getMonth();
let yearnow = date.getFullYear();
// let datetotal 
// document.getElementById("datepicker1").value = monthnow + datenow + yearnow;
// document.getElementById("datepicker2").value = datenow + 5;
// hàm tự động nhập ngày mặc định & update input date
$( function() {
    $("#datepicker1").datepicker();
    $("#datepicker2").datepicker();
  } );