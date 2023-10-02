// document.addEventListener('DOMContentLoaded', function() {
//     window.addEventListener('scroll', function() {
//         var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         var targetDiv = document.querySelector('.moving-div');
//         var distanceFromTop = targetDiv.offsetTop;
//         console.log(distanceFromTop);
//         var scrollLimit = 100; 

//         if (scrollTop > distanceFromTop - scrollLimit && scrollTop < distanceFromTop + scrollLimit) {
//             var scrollPercent = (scrollTop - (distanceFromTop - scrollLimit)) / (2 * scrollLimit);
//             var translateY = -150 + scrollPercent * 50;
//             targetDiv.style.transform = 'translate(-50%, ' + translateY + '%)';
//         }
//     });
// });
// tính và trả ra số Ngày

function calculateDateDifference() {
    var date1Input = document.getElementById('date1');
    var date2Input = document.getElementById('date2');
    console.log(date1Input)
    if (isNaN(parseInt(date1Input)) || isNaN(parent(date2Input))) {
        var ples = "Please enter date !";
        var tong = "0";
        var pleselement = document.getElementById("tinhngay");
        var tongelement = document.getElementById("tong");
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

