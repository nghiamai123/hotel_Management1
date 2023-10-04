let stat = true;
let rooms = [
    {   
        type: ["2 bed", "2 bath", "wifi"],
        nameroom: "104",
        price: 70,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "sakdlsadlk",
        room_image: ["./assets/Room101.jpg", "./assets/imgroom101b.jpg", "./assets/imgroom1012.png", "./assets/imgroom1013.png", "./assets/imgroom1014.png", "./assets/imgroom1015.png"],
    },
    {   
        type: ["2 bed", "2 bath", "wifi"],
        nameroom: "105",
        price: 70,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "sakdlsadlk",
        room_image: ["./assets/Room101.jpg", "./assets/imgroom101b.jpg", "./assets/imgroom1012.png", "./assets/imgroom1013.png", "./assets/imgroom1014.png", "./assets/imgroom1015.png"],
    },
    {   
        type: ["2 bed", "2 bath", "wifi"],
        nameroom: "106",
        price: 70,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "sakdlsadlk",
        room_image: ["./assets/Room101.jpg", "./assets/imgroom101b.jpg", "./assets/imgroom1012.png", "./assets/imgroom1013.png", "./assets/imgroom1014.png", "./assets/imgroom1015.png"],
    },
    {   
        type: ["2 bed", "2 bath", "wifi"],
        nameroom: "107",
        price: 70,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "sakdlsadlk",
        room_image: ["./assets/Room101.jpg", "./assets/imgroom101b.jpg", "./assets/imgroom1012.png", "./assets/imgroom1013.png", "./assets/imgroom1014.png", "./assets/imgroom1015.png"],
    },
    {
        type: ["4 bed", "2 bath", "wifi"],
        nameroom: "108",
        price: 450,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom102.png", "./assets/imgroom102b.png", "./assets/imgroom1022.png", "./assets/imgroom1023.png", "./assets/imgroom1024.png", "./assets/imgroom1025.png"],
    }
]

function search() { 
    document.getElementById("pp").innerHTML = " ";
    let inputvalue1 = document.getElementById("nav_input").value;
    let searchresults = [];
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].type.includes(inputvalue1) || rooms[i].convenient.includes(inputvalue1) || rooms[i].nameroom.includes(inputvalue1)) {
            searchresults.push(rooms[i]);
        }
    }
    let room = "";
    for (i in searchresults){
        room += "<div class= 'col-lg-4 col-md-6' >";
        room += '<div class="room-item shadow rounded overflow-hidden">';
        room +=    '<div class="position-relative">';
        room +=        '<a href="hotel_detail_page.html">';
        room +=            '<img class="img-fluid" src="'+ searchresults[i].room_image[0] +'"alt="">';
        room +=        '</a>';
        room +=    '</div>';
        room +=    '<div class="p-4 mt-2">'
        room +=        '<div class="d-flex justify-content-between mb-3">';
        room +=            '<h5 class="mb-0">'+ searchresults[i].nameroom +'</h5>';
        room +=            '<div class="ps-2">';
        room +=                "<img src='assets/star.svg' alt='star'> " + searchresults[i].evaluate;
        room +=            '</div>';
        room +=        '</div>';
        room +=        '<div class="d-flex mb-3">';
        room +=            '<small class="border-end me-3 pe-3"><i class="fa fa-bed text-secondary me-2">';
        room +=            '</i>'+ searchresults[i].type[0]+'</small>';
        room +=            '<small class="border-end me-3 pe-3"><i class="fa fa-bath text-secondary me-2">';
        room +=            '</i>'+ searchresults[i].type[1]+'</small>';
        room +=            '<small><i class="fa fa-wifi text-secondary me-2">';
        room +=            '</i>'+ searchresults[i].type[2]+'</small>';
        room +=        '</div>';
        room +=        '<div class="d-flex justify-content-between">';
        room +=            '<h4 style="color: #f45cad;">$'+ searchresults[i].price+'/night</h4>';
        room +=        '</div>';
        room +=    '</div>';
        room += '</div>';
        room += '</div>';
    }
    document.getElementById("pp").innerHTML = room;
}