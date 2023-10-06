const searchParams = new URLSearchParams(window.location.search);
const productId = searchParams.get("id");

const baserooms = "http://localhost:3000/rooms"
const baseuser = "http://localhost:3000/user"

fetch(baserooms)
.then((res) => res.json())
.then((data)=> {
    console.log(data)
    // var check = false;
    var list = data.forEach(element => {
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
