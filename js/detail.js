const searchParams = new URLSearchParams(window.location.search);
const productId = searchParams.get("id");
const baserooms = "http://localhost:3000/rooms";

var bookingUrl = `<a href="hotel_booking_page.html?id=${productId}" id="book1"><button id="booking_now" class="button_booking">BOOKING NOW</button></a>`
document.getElementById('booking-btn').innerHTML = bookingUrl

fetch(baserooms)
.then((res) => res.json())
.then((data) => {
    console.log(data)
    // var check = false;
    data.forEach(element => {
        console.log(element.nameroom)
        if (productId == element.id){
            document.getElementById("name_room_detail").innerHTML = element.nameroom;
            document.getElementById("price_room_detail").innerHTML = "$" + element.price + "/night";
            document.getElementById("img1").src = element.room_image[1];
            document.getElementById("img2").src = element.room_image[2];
            document.getElementById("img3").src = element.room_image[3];
            document.getElementById("img4").src = element.room_image[4];
            document.getElementById("img5").src = element.room_image[5];
            document.getElementById("type1").innerHTML = element.type[0];
            document.getElementById("type1").innerHTML = element.type[1];
            document.getElementById("type1").innerHTML = element.type[2];
        }
    });
})
