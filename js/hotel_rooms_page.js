 let stat = true;
// let a = document.getElementById("Convenient").value;
// let b = document.getElementById("Clean").value;
// let c = document.getElementById("Staff").value;
// let d = document.getElementById("Room_quality").value;
// let eval = (a + b + c + d) / 4
// let revi = document.getElementById("review").value;
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
    },
    {
        type: ["4 bed", "2 bath", "wifi"],
        nameroom: "109",
        price: 450,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom102.png", "./assets/imgroom102b.png", "./assets/imgroom1022.png", "./assets/imgroom1023.png", "./assets/imgroom1024.png", "./assets/imgroom1025.png"],
    },
    {
        type: ["4 bed", "2 bath", "wifi"],
        nameroom: "1010",
        price: 450,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom102.png", "./assets/imgroom102b.png", "./assets/imgroom1022.png", "./assets/imgroom1023.png", "./assets/imgroom1024.png", "./assets/imgroom1025.png"],
    },
    {
        type: ["4 bed", "2 bath", "wifi"],
        nameroom: "1011",
        price: 450,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom102.png", "./assets/imgroom102b.png", "./assets/imgroom1022.png", "./assets/imgroom1023.png", "./assets/imgroom1024.png", "./assets/imgroom1025.png"],
    },
    {
        type: ["4 bed", "2 bath", "wifi"],
        nameroom: "1012",
        price: 450,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom102.png", "./assets/imgroom102b.png", "./assets/imgroom1022.png", "./assets/imgroom1023.png", "./assets/imgroom1024.png", "./assets/imgroom1025.png"],
    },
    {
        type: ["1 bed", "1 bath", "wifi"],
        nameroom: "1014",
        price: 80,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom103.png", "./assets/imgroom103b.png", "./assets/imgroom1032.png", "./assets/imgroom1033.png", "./assets/imgroom1034.png", "./assets/imgroom1035.png"],
    },
    {
        type: ["1 bed", "1 bath", "wifi"],
        nameroom: "1015",
        price: 80,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom103.png", "./assets/imgroom103b.png", "./assets/imgroom1032.png", "./assets/imgroom1033.png", "./assets/imgroom1034.png", "./assets/imgroom1035.png"],
    },
    {
        type: ["1 bed", "1 bath", "wifi"],
        nameroom: "1016",
        price: 80,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom103.png", "./assets/imgroom103b.png", "./assets/imgroom1032.png", "./assets/imgroom1033.png", "./assets/imgroom1034.png", "./assets/imgroom1035.png"],
    },
    {
        type: ["1 bed", "1 bath", "wifi"],
        nameroom: "1017",
        price: 80,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom103.png", "./assets/imgroom103b.png", "./assets/imgroom1032.png", "./assets/imgroom1033.png", "./assets/imgroom1034.png", "./assets/imgroom1035.png"],
    },
    {
        type: ["3 bed", "2 bath", "wifi"],
        nameroom: "1018",
        price: 370,
        availability: 5,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom104.png", "./assets/imgroom104b.png", "./assets/imgroom1042.png", "./assets/imgroom1043.png", "./assets/imgroom1044.png", "./assets/imgroom1045.png"],
    },
    {
        type: ["3 bed", "2 bath", "wifi"],
        nameroom: "1019",
        price: 370,
        availability: 5,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom104.png", "./assets/imgroom104b.png", "./assets/imgroom1042.png", "./assets/imgroom1043.png", "./assets/imgroom1044.png", "./assets/imgroom1045.png"],
    },
    {
        type: ["3 bed", "2 bath", "wifi"],
        nameroom: "1020",
        price: 370,
        availability: 5,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom104.png", "./assets/imgroom104b.png", "./assets/imgroom1042.png", "./assets/imgroom1043.png", "./assets/imgroom1044.png", "./assets/imgroom1045.png"],
    },
    {
        type: ["3 bed", "2 bath", "wifi"],
        nameroom: "1021",
        price: 370,
        availability: 5,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom104.png", "./assets/imgroom104b.png", "./assets/imgroom1042.png", "./assets/imgroom1043.png", "./assets/imgroom1044.png", "./assets/imgroom1045.png"],
    },
    {
        type: ["3 bed", "2 bath", "wifi"],
        nameroom: "1022",
        price: 370,
        availability: 5,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom104.png", "./assets/imgroom104b.png", "./assets/imgroom1042.png", "./assets/imgroom1043.png", "./assets/imgroom1044.png", "./assets/imgroom1045.png"],
    },
    {
        type: ["3 bed", "2 bath", "wifi"],
        nameroom: "1023",
        price: 370,
        availability: 5,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom104.png", "./assets/imgroom104b.png", "./assets/imgroom1042.png", "./assets/imgroom1043.png", "./assets/imgroom1044.png", "./assets/imgroom1045.png"],
    },
    {
        type: ["2 bed", "2 bath", "wifi"],
        nameroom: "1024",
        price: 90,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom105.png", "./assets/imgroom105b.png", "./assets/imgroom1052.png", "./assets/imgroom1053.png", "./assets/imgroom1054.png", "./assets/imgroom1055.png"],
    },
    {
        type: ["1 bed", "1 bath", "wifi"],
        nameroom: "1025",
        price: 80,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom106.png", "./assets/imgroom106b.png", "./assets/imgroom1062.png", "./assets/imgroom1063.png", "./assets/imgroom1064.png", "./assets/imgroom1065.png"],
    },
    {
        type: ["2 bed", "2 bath", "wifi"],
        nameroom: "1026",
        price: 170,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom107.png", "./assets/imgroom107b.png", "./assets/imgroom1072.png", "./assets/imgroom1073.png", "./assets/imgroom1074.png", "./assets/imgroom1075.png"],
    },
    {
        type: ["10 bed", "3 bath", "wifi"],
        nameroom: "1027",
        price: 970,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom108.png", "./assets/imgroom108b.png", "./assets/imgroom1082.png", "./assets/imgroom1083.png", "./assets/imgroom1084.png", "./assets/imgroom1085.png"],
    },
    {
        type: ["5 bed", "3 bath", "wifi"],
        nameroom: "1028",
        price: 700,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom108.png", "./assets/imgroom108b.png", "./assets/imgroom1082.png", "./assets/imgroom1083.png", "./assets/imgroom1084.png", "./assets/imgroom1085.png"],
    },
    {
        type: ["5 bed", "3 bath", "wifi"],
        nameroom: "1029",
        price: 700,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom108.png", "./assets/imgroom108b.png", "./assets/imgroom1082.png", "./assets/imgroom1083.png", "./assets/imgroom1084.png", "./assets/imgroom1085.png"],
    },
    {
        type: ["5 bed", "3 bath", "wifi"],
        nameroom: "1030",
        price: 700,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom108.png", "./assets/imgroom108b.png", "./assets/imgroom1082.png", "./assets/imgroom1083.png", "./assets/imgroom1084.png", "./assets/imgroom1085.png"],
    },
    {
        type: ["5 bed", "3 bath", "wifi"],
        nameroom: "1031",
        price: 700,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom108.png", "./assets/imgroom108b.png", "./assets/imgroom1082.png", "./assets/imgroom1083.png", "./assets/imgroom1084.png", "./assets/imgroom1085.png"],
    },
    {
        type: ["5 bed", "3 bath", "wifi"],
        nameroom: "1032",
        price: 700,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom108.png", "./assets/imgroom108b.png", "./assets/imgroom1082.png", "./assets/imgroom1083.png", "./assets/imgroom1084.png", "./assets/imgroom1085.png"],
    },
    {
        type: ["5 bed", "3 bath", "wifi"],
        nameroom: "1033",
        price: 700,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom108.png", "./assets/imgroom108b.png", "./assets/imgroom1082.png", "./assets/imgroom1083.png", "./assets/imgroom1084.png", "./assets/imgroom1085.png"],
    },
    {
        type: ["5 bed", "3 bath", "wifi"],
        nameroom: "1034",
        price: 700,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom108.png", "./assets/imgroom108b.png", "./assets/imgroom1082.png", "./assets/imgroom1083.png", "./assets/imgroom1084.png", "./assets/imgroom1085.png"],
    },
    {
        type: ["5 bed", "3 bath", "wifi"],
        nameroom: "1035",
        price: 700,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom108.png", "./assets/imgroom108b.png", "./assets/imgroom1082.png", "./assets/imgroom1083.png", "./assets/imgroom1084.png", "./assets/imgroom1085.png"],
    },
    {
        type: ["5 bed", "3 bath", "wifi"],
        nameroom: "1036",
        price: 700,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom108.png", "./assets/imgroom108b.png", "./assets/imgroom1082.png", "./assets/imgroom1083.png", "./assets/imgroom1084.png", "./assets/imgroom1085.png"],
    },
    {
        type: ["5 bed", "3 bath", "wifi"],
        nameroom: "1037",
        price: 700,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom108.png", "./assets/imgroom108b.png", "./assets/imgroom1082.png", "./assets/imgroom1083.png", "./assets/imgroom1084.png", "./assets/imgroom1085.png"],
    },
    {
        type: ["5 bed", "3 bath", "wifi"],
        nameroom: "1038",
        price: 700,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom108.png", "./assets/imgroom108b.png", "./assets/imgroom1082.png", "./assets/imgroom1083.png", "./assets/imgroom1084.png", "./assets/imgroom1085.png"],
    },
    {
        type: ["5 bed", "3 bath", "wifi"],
        nameroom: "1039",
        price: 700,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom108.png", "./assets/imgroom108b.png", "./assets/imgroom1082.png", "./assets/imgroom1083.png", "./assets/imgroom1084.png", "./assets/imgroom1085.png"],
    },
    {
        type: ["5 bed", "3 bath", "wifi"],
        nameroom: "1040",
        price: 700,
        availability: stat,  
        convenient: ["air-conditioner", "wifi"],
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        evaluate: 5,
        reviews: "review",
        room_image: ["./assets/imgroom108.png", "./assets/imgroom108b.png", "./assets/imgroom1082.png", "./assets/imgroom1083.png", "./assets/imgroom1084.png", "./assets/imgroom1085.png"],
    },
    
]

function save(){
    localStorage.setItem('listrooms', JSON.stringify(rooms)); 
}

function load(){
    var rooms1 = JSON.parse(localStorage.getItem('listrooms'));
}

if (localStorage.getItem('listrooms') != null) {
    load();
}

function daydl(){
    let room = "";
    for (i in rooms){
        var data = JSON.parse(JSON.stringify(rooms[i]))
        room += "<div class= 'col-lg-4 col-md-6' >";
        room += '<div class="room-item shadow rounded overflow-hidden">';
        room +=    '<div class="position-relative">';
        room +=        '<a href="hotel_detail_page.html">';
        room +=            '<img class="img-fluid" src="'+ data.room_image[0] +'"alt="">';
        room +=        '</a>';
        room +=    '</div>';
        room +=    '<div class="p-4 mt-2">'
        room +=        '<div class="d-flex justify-content-between mb-3">';
        room +=            '<h5 class="mb-0">'+ data.nameroom +'</h5>';
        room +=            '<div class="ps-2">';
        room +=                "<img src='assets/star.svg' alt='star'> " + data.evaluate;
        room +=            '</div>';
        room +=        '</div>';
        room +=        '<div class="d-flex mb-3">';
        room +=            '<small class="border-end me-3 pe-3"><i class="fa fa-bed text-secondary me-2">';
        room +=            '</i>'+ data.type[0]+'</small>';
        room +=            '<small class="border-end me-3 pe-3"><i class="fa fa-bath text-secondary me-2">';
        room +=            '</i>'+ data.type[1]+'</small>';
        room +=            '<small><i class="fa fa-wifi text-secondary me-2">';
        room +=            '</i>'+ data.type[2]+'</small>';
        room +=        '</div>';
        room +=        '<div class="d-flex justify-content-between">';
        room +=            '<h4 style="color: #f45cad;">$'+ data.price+'/night</h4>';
        room +=        '</div>';
        room +=    '</div>';
        room += '</div>';
        room += '</div>';
    }
    console.log(typeof rooms[i].room_image[0]);
    document.getElementById("pp").innerHTML = room;
    save()
}
// thay thế avata khi đăng nhập
function dangnhap(){
    document.getElementById("sign").style.display = 'none';
    document.getElementById("regis").style.display = 'none';
    document.getElementById("avata").style.display = 'block';
}