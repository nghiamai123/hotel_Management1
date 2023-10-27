const searchParams = new URLSearchParams(window.location.search);
const roomId = searchParams.get("id");
const baserooms = "http://localhost:3000/rooms";

var bookingUrl = `<a href="hotel_booking_page.html?id=${roomId}" id="book1"><button id="booking_now" class="button_booking">BOOKING NOW</button></a>`
document.getElementById('booking-btn').innerHTML = bookingUrl

var addbag = `<span class="material-symbols-outlined" id="addbag" onclick="addroom(${roomId})">local_mall</span>`
document.getElementById("addbag").innerHTML = addbag;

fetch(baserooms)
.then((res) => res.json())
.then((data) => {
  data.forEach(element => {
    if (roomId == element.id){
      document.getElementById("name_room_detail").innerHTML = element.nameroom;
      document.getElementById("price_room_detail").innerHTML = element.price; // bỏ $/night;
      document.getElementById("img1").src = element.room_image[1];
      document.getElementById("img2").src = element.room_image[2];
      document.getElementById("img3").src = element.room_image[3];
      document.getElementById("img4").src = element.room_image[4];
      document.getElementById("img5").src = element.room_image[5];
      document.getElementById("type1").innerHTML = element.type[0];
      document.getElementById("type2").innerHTML = element.type[1];
      document.getElementById("type3").innerHTML = element.type[2];
      if (element.like === "yes" ){
        document.getElementById("icon_heart_detail").style.display = "none";
        document.getElementById("favorite-icon").style.display = "inline";
      }
      else {
        document.getElementById("icon_heart_detail").style.display = "inline";
        document.getElementById("favorite-icon").style.display = "none";
      }
    }
  });
})

// chức năng share qua mail.
function shareViaEmail() {
  var subject = " Try booking a room at YAWN YAWN now ";
  var body = " Dear sir/madam \n" +
  " I hope this email finds you well. I wanted to reach out to you about an exciting opportunity to book a room at YAWN YAWN, the premier hotel for ultimate relaxation and comfort. \n" +

  "At YAWN YAWN, we offer luxurious accommodations, exceptional service, and a tranquil atmosphere that guarantees a peaceful stay. Whether you are on a business trip or looking for a rejuvenating getaway, our hotel provides the perfect environment for your needs. \n" +
  
  "To take advantage of this special offer, simply visit our website at http:hotel_home_page.html. Our friendly staff will be delighted to assist you in making a reservation and answer any questions you may have. \n" +
  
  "Do not miss out on this opportunity to experience the unparalleled comfort and hospitality of YAWN YAWN. Book your room today and treat yourself to a truly memorable stay. \n" +
  
  "We look forward to welcoming you as our valued guest. \n" +
  
  "Warm regards. "

  // Tạo URL mailto với tiêu đề và nội dung đã cho
  var mailtoUrl = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  // Mở trình đánh thư điện tử mặc định với URL mailto
  window.location.href = mailtoUrl;
}
// chức năng yêu thích

// Lấy tham chiếu đến hai icon
var icon1 = document.getElementById("icon_heart_detail");
var icon2 = document.getElementById("favorite-icon");
// Thêm sự kiện click cho icon1
icon1.addEventListener("click", async function() {
  // Kiểm tra trạng thái hiển thị của icon2
  if (icon2.style.display === "none") {
    // Nếu icon2 đang ẩn, hiển thị icon2 và ẩn icon1
    const updateUser = async (roomId, newData) => {
      const url = `http://localhost:3000/rooms/${roomId}`;
      console.log(url)
      try {
        const response = await fetch(url, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newData),
        });
    
        if (response.ok) {
          console.log('Dữ liệu người dùng đã được cập nhật thành công!');
        } else {
          console.error('Lỗi khi cập nhật dữ liệu người dùng!');
        }
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu:', error);
      }
    };
    const newData = { like: 'yes'};
    updateUser(roomId, newData); // Cập nhật dữ liệu người dùng 
  }
});

icon2.addEventListener("click", function() {
  // Kiểm tra trạng thái hiển thị của icon2
  if (icon1.style.display === "none") {
    // Ngược lại, hiển thị icon1 và ẩn icon2
    const updateUser = async (roomId, newData) => {
      const url = `http://localhost:3000/rooms/${roomId}`;
      try {
        const response = await fetch(url, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newData),
        });
    
        if (response.ok) {
          console.log('Dữ liệu người dùng đã được cập nhật thành công!');
        } else {
          console.error('Lỗi khi cập nhật dữ liệu người dùng!');
        }
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu:', error);
      }
    };
    const newData = { like: 'no'};
    updateUser(roomId, newData); // Cập nhật dữ liệu người dùng
  }
});

function addroom(roomId) {
  var IDuser = JSON.parse(localStorage.getItem("listuser"));
  var IDroom = roomId;
  var nameroom1 = document.getElementById("name_room_detail").innerHTML;
  var price = document.getElementById("price_room_detail").innerHTML;
  const updateUser = async (newData) => {
    const url = `http://localhost:3000/orders`;
    try {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
    });

    if (response.ok) {
      console.log(newData);
    } else {
        console.error('Lỗi khi cập nhật dữ liệu người dùng!');
    }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu:', error);
    }
};
const newData = {
    IDuser: IDuser,
    IDroom: IDroom,
    nameroom: nameroom1,
    price: parseInt(price),
};
    updateUser(newData); // Cập nhật dữ liệu người dùng 
}