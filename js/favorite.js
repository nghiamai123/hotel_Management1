const baserooms = "http://localhost:3000/rooms";
fetch(baserooms)
.then((res) => res.json())
.then((data)=> {
    var a = data.map((element) => {
      if (element.like === "yes") {
        return `
        <div class="col-lg-4 col-md-6" >
        <div class="room-item shadow rounded overflow-hidden">
          <div class="position-relative">
              <a href="/detail.html?id=${element.id}">
                  <img class="img-fluid" src="${element.room_image[0]}" alt="">
              </a>
          </div>
          <div class="p-4 mt-2">
              <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">${element.nameroom} </h5>
                  <div class="ps-2">
                      <img src="assets/star.svg" alt="star">
                  </div>
              </div>
              <div class="d-flex mb-3">
                  <small class="border-end me-3 pe-3"><i class="fa fa-bed text-secondary me-2">
                  </i>${element.type[0]}</small>
                  <small class="border-end me-3 pe-3"><i class="fa fa-bath text-secondary me-2">
                  </i>${element.type[1]}</small>
                  <small><i class="fa fa-wifi text-secondary me-2">
                  </i>${element.type[2]}</small>
              </div>
              
              <div class="d-flex justify-content-between">
                  <h4 style="color: #f45cad;">$${element.price}/night</h4>
                  <div class="col-lg-4 col-6 context__icon">
                    <i id="icon_heart_detail${element.id}" class="fa-regular fa-heart" onclick="clickFavorite(${element.id})"></i>
                    <span id="favorite-icon${element.id}" class="favorite-icon" onclick="clickunFavorite(${element.id})">&#10084;</span>
                    <i id="icon_share_detail" class="fa-solid fa-share" onclick="shareViaEmail()"></i>
                </div>
              </div>
          </div>
      </div>
      </div>
        `
    };
  })
  document.getElementById("pp").innerHTML = ` ${a.join("")}`
})

fetch(baserooms)
  .then((res) => res.json())
  .then((data) => {
    data.forEach(element => {
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
    }) 
})

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
 