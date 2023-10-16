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
            document.getElementById("type2").innerHTML = element.type[1];
            document.getElementById("type3").innerHTML = element.type[2];
        }
    });
})
// chức năng share qua mail.
function shareViaEmail() {
    var subject = " Try booking a room at YAWN YAWN now ";
    var body = " Dear sir/madam \n" +
    " I hope this email finds you well. I wanted to reach out to you about an exciting opportunity to book a room at YAWN YAWN, the premier hotel for ultimate relaxation and comfort. \n" +

    " At YAWN YAWN, we offer luxurious accommodations, exceptional service, and a tranquil atmosphere that guarantees a peaceful stay. Whether you are on a business trip or looking for a rejuvenating getaway, our hotel provides the perfect environment for your needs. \n" +
    
    " To take advantage of this special offer, simply visit our website at http:hotel_home_page.html. Our friendly staff will be delighted to assist you in making a reservation and answer any questions you may have. \n" +
    
    " Do not miss out on this opportunity to experience the unparalleled comfort and hospitality of YAWN YAWN. Book your room today and treat yourself to a truly memorable stay. \n" +
    
    " We look forward to welcoming you as our valued guest. \n" +
    
    " Warm regards. "
  
    // Tạo URL mailto với tiêu đề và nội dung đã cho
    var mailtoUrl = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  
    // Mở trình đánh thư điện tử mặc định với URL mailto
    window.location.href = mailtoUrl;
}