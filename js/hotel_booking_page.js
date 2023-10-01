document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var targetDiv = document.querySelector('.moving-div');
        var distanceFromTop = targetDiv.offsetTop;
        console.log(distanceFromTop);
        var scrollLimit = 100; // Giới hạn cuộn trong 100px

        if (scrollTop > distanceFromTop - scrollLimit && scrollTop < distanceFromTop + scrollLimit) {
            var scrollPercent = (scrollTop - (distanceFromTop - scrollLimit)) / (2 * scrollLimit);
            var translateY = -150 + scrollPercent * 50;
            targetDiv.style.transform = 'translate(-50%, ' + translateY + '%)';
        }
    });
});
// tính và trả ra số Ngày

function calculateDateDifference() {
    var date1Input = document.getElementById('date1');
    var date2Input = document.getElementById('date2');

    var date1 = new Date(date1Input.value);
    var date2 = new Date(date2Input.value);

    var timeDifference = Math.abs(date2.getTime() - date1.getTime());
    var dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Chuyển đổi thành số ngày

    console.log("Khoảng cách giữa hai ngày là: " + dayDifference + " ngày");
    document.getElementById("tinhngay").innerHTML = dayDifference;
    document.getElementById("tong").innerHTML =  20 + 30 +10 + (dayDifference * 50);
}

