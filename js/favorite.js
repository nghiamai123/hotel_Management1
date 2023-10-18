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
              </div>
          </div>
      </div>
      </div>
        `
    };
  })
  document.getElementById("pp").innerHTML = ` ${a.join("")}`
})