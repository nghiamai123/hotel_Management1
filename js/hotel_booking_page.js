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
    var date1Input = document.getElementById('date1');
    var date2Input = document.getElementById('date2');
    console.log(date1Input.value)
    var pleselement = document.getElementById("tinhngay");
    var tongelement = document.getElementById("tong");
    if (isNaN(parseInt(date1Input.value)) || isNaN(parseInt(date2Input.value))) {
        var ples = "Please enter date !";
        var tong = "0";
        pleselement.style.color = "red";
        tongelement.style.color = "red";
        pleselement.innerHTML = ples;
        tongelement.innerHTML = tong;
        return;
    }
    var date1 = new Date(date1Input.value);
    var date2 = new Date(date2Input.value);
    console.log(date1)
    var timeDifference = Math.abs(date2.getTime() - date1.getTime());
    var dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Chuyển đổi thành số ngày

    console.log("Khoảng cách giữa hai ngày là: " + dayDifference + " ngày");

    pleselement.innerHTML = dayDifference;
   tongelement.innerHTML =  20 + 30 +10 + (dayDifference * 50);
}

