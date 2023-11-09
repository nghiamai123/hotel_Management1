const baserooms = "http://localhost:3000/rooms";

fetch(baserooms)
.then((res) => res.json())
.then((data)=> {
    var a = data.map((data1) => {
      roomId = data1.id;
        return `
        <div class="col-lg-4 col-md-6" >
        <div class="room-item shadow rounded overflow-hidden">
          <div class="position-relative">
              <a href="/detail.html?id=${data1.id}">
                <img class="img-fluid" src="${data1.room_image[0]}">
              </a>
          </div>
          <div class="p-4 mt-2">
              <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">${data1.nameroom} </h5>
                  <div class="ps-2">
                      <img src="assets/star.svg" alt="star">
                  </div>
              </div>
              <div class="d-flex mb-3">
                  <small class="border-end me-3 pe-3"><i class="fa fa-bed text-secondary me-2">
                  </i>${data1.type[0]}</small>
                  <small class="border-end me-3 pe-3"><i class="fa fa-bath text-secondary me-2">
                  </i>${data1.type[1]}</small>
                  <small><i class="fa fa-wifi text-secondary me-2">
                  </i>${data1.type[2]}</small>
              </div>
              
              <div class="d-flex justify-content-between">
                <h4 style="color: #f45cad;">$${data1.price}/night</h4>
                <div class="col-lg-4 col-6 context__icon">
                    <i id="icon_heart_detail${data1.id}" class="fa-regular fa-heart" onclick="clickFavorite(${data1.id})"></i>
                    <span id="favorite-icon${data1.id}" class="favorite-icon" onclick="clickunFavorite(${data1.id})">&#10084;</span>
                    <i id="icon_share_detail" class="fa-solid fa-share" onclick="shareViaEmail()"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
    })
    document.getElementById("pp").innerHTML = `${a.join("")}`
})
// giữ hiển thị icon 
fetch(baserooms)
  .then((res) => res.json())
  .then((data) => {
    data.forEach(element => {
      console.log(element.like);
      console.log(element.id);
      if (element.like === "yes") {
        document.getElementById(`icon_heart_detail${element.id}`).style.display = "none";
        document.getElementById(`favorite-icon${element.id}`).style.display = "inline";
        var favoriteIcon = document.getElementById(`favorite-icon${element.id}`);
        favoriteIcon.style.userSelect = 'none';
        favoriteIcon.style.position = 'relative';
        favoriteIcon.style.right = '40px';
        favoriteIcon.style.cursor = 'pointer';
        favoriteIcon.style.color = '#ff0022';
        favoriteIcon.style.fontSize = '26px';
      } 
      else if (element.like === "no") {
        document.getElementById(`icon_heart_detail${element.id}`).style.display = "inline";
        document.getElementById(`favorite-icon${element.id}`).style.display = "none";
        var favoriteIcon = document.getElementById(`favorite-icon${element.id}`);
        favoriteIcon.style.userSelect = 'none';
        favoriteIcon.style.position = 'relative';
        favoriteIcon.style.right = '40px';
        favoriteIcon.style.cursor = 'pointer';
        favoriteIcon.style.color = '#ff0022';
        favoriteIcon.style.fontSize = '26px';
      }
    }) 
  })

function check(){
  console.log("haaaaaaaaaaaaaaa")
  fetch(`http://localhost:3000/rooms/${roomId}`)
  .then(res => res.json())
  .then(data => {
      if (data.Reserved == "yes") {
          alert("Sorry, This room was booking. please visit Tomorrow")
          return;
      }
  })
}

// chức năng yêu thích
var icon1 = document.getElementById("icon_heart_detail");
var icon2 = document.getElementById("favorite-icon");
// Thêm sự kiện click cho icon1
function clickFavorite (roomId) {
  // Kiểm tra trạng thái hiển thị của icon2
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
          document.getElementById("icon_heart_detail").style.display = "none";
          document.getElementById("favorite-icon").style.display = "inline";
        } else {
          console.error('Lỗi khi cập nhật dữ liệu người dùng!');
        }
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu:', error);
      }
    };
    const newData = { like: 'yes'};
    updateUser(roomId, newData); // Cập nhật dữ liệu người dùng 
};

function clickunFavorite (roomId) {
    // Kiểm tra trạng thái hiển thị của icon2
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
          document.getElementById("icon_heart_detail").style.display = "inline";
          document.getElementById("favorite-icon").style.display = "none";
        } else {
          console.error('Lỗi khi cập nhật dữ liệu người dùng!');
        }
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu:', error);
      }
    };
    const newData = { like: 'no'};
    updateUser(roomId, newData); // Cập nhật dữ liệu người dùng 
};

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

