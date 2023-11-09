// MANAGE ROOMS
// show rooms
const rooms = "http://localhost:3000/rooms";
fetch(rooms)
.then((res) => res.json())
.then((data)=> {
    var a = data.map((data1) => {
        return`
        <tr>
            <th>${data1.id}</th>
            <td>${data1.nameroom}</td>
            <td>${data1.price}</td>
            <td>${data1.type[0]}, ${data1.type[1]}, ${data1.type[2]}</td>
            <td>${data1.status}<td>
            <button class="button-icon">
            <i class="fa fa-cogs"  aria-hidden="true"  data-bs-toggle="modal" data-bs-target="#admin_edit_room" data-bs-whatever="@mdo" id="update-room-${data1.id}"></i>
        </button>
        <button class="button-icon">
            <i class="fa fa-trash" aria-hidden="true"  data-bs-toggle="modal" data-bs-target="#admin_delete_room" data-bs-whatever="@mdo" id="delete-room-${data1.id}" ></i>
        </button>
            </td>
        </tr>
        `
    
    })
    document.getElementById("rooms-table").innerHTML = `${a.join("")}`;

    // edit
    for (let index of data){
        const element = index;
        const roomId = element.id;
        // edit
        document
        .getElementById("update-room-" + roomId)
        .addEventListener("click", () => {
            // lấy giá biến gắn cho value
            document.getElementById("admin_edit_id_room").value=roomId;
            document.getElementById("admin_edit_name_room").value=element.nameroom;
            document.getElementById("admin_edit_price").value=element.price;
            document.getElementById("admin_edit_quanity-bed").value=element.type[0];
            document.getElementById("admin_edit_quanity-bath").value=element.type[1];
            document.getElementById("admin_edit_quanity-wifi").value=element.type[2];
            document.getElementById("admin_edit_id_room").setAttribute("disabled","disabled");

            // lắng nghe sự kiện click save room
        document.getElementById("admin_save_edit_room").addEventListener("click",()=>{
            var quanityBed=document.getElementById('admin_edit_quanity-bed').value;
            var quanityBath=document.getElementById('admin_edit_quanity-bath').value;
            var quanitywifi=document.getElementById('admin_edit_quanity-wifi').value;
            var quanity=[quanityBed,quanityBath,quanitywifi];
            var radios = document.getElementsByName('edit-status');
            var status;
            for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                status = radios[i].value;
                console.log(status);
                break;
            }
            }
            const editRoom = {
                id:roomId,
                nameroom: document.getElementById("admin_edit_name_room").value,
                price: document.getElementById("admin_edit_price").value,
                type: quanity,
                status: status
            };
            console.log(editRoom);
            // Update date tại ID
            fetch(`http://localhost:3000/rooms/${element.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editRoom),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Cập nhật Room thất bại.");
                }
            return response.json();
            })
            .then((editRoom) => {
                // Xử lý phản hồi sau khi phòng đã được cập nhật thành công
                console.log("You have successfully added the room: ", editRoom);
                alert("You have successfully edit the room");
                return;
                
                })
            .catch((error) => {
                // Xử lý lỗi nếu có
                console.error("Lỗi khi cập nhật phòng:", error);
            })
            
        }) 
        })  
        // delete
        document.getElementById("delete-room-" + roomId).addEventListener("click",()=>{
            document.getElementById("admin_ok_delete_room").addEventListener("click",()=>{
                fetch(`http://localhost:3000/rooms/${roomId}`, {
                method: "DELETE",
                })
                .then((response) => {
                    if (!response.ok) {
                    throw new Error("Xóa người phòng thất bại.");
                    }
                    return response.json();
                })
                .then((data) => {
                    // Xử lý phản hồi từ json sau khi xóa thành công
                    console.log("Phòng đã được xóa:", data);
                    alert("You have successfully delete the room")
                    return;
                    // Cập nhật giao diện hoặc làm bất kỳ điều gì bạn muốn sau khi xóa thành công
                })
                .catch((error) => {
                    console.error("Lỗi khi xóa phòng:", error);
                });
            })
            
        })
    }
    
})
// create new room
    function createRoom(){
        var name=document.getElementById("admin_create_name").value;
        var price=document.getElementById("admin_create_price").value;
        
        var radios = document.getElementsByName('status');
        var status;
        for (var i = 0; i < radios.length; i++) {
          if (radios[i].checked) {
            status = radios[i].value;
            console.log(status);
            break;
          }
        }
        var quanityBed=document.getElementById('admin-create-bed').value;
        var quanityBath=document.getElementById('admin-create-bath').value;
        var quanitywifi=document.getElementById('admin-create-wifi').value;
        var quanity=[quanityBed,quanityBath,quanitywifi];

        if(name==""||price==""||status==""){
            arlert ("Please re-enter")
        }
        // tạo đối tượng chứa dữ liệu phòng
        const formCreateRoom={
            nameroom:name,
            price: price,
            type:quanity,
            status: status,
            room_img: [
                "./assets/imgroom102.png",
                "./assets/imgroom102b.png",
                "./assets/imgroom1022.png",
                "./assets/imgroom1023.png",
                "./assets/imgroom1024.png",
                "./assets/imgroom1025.png"
              ],
            description:"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        }
        console.log(formCreateRoom)
        // gửi dữ liệu lên json server
        fetch(rooms,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
                },
            body:JSON.stringify(formCreateRoom)
        })
        .then(response=>{
            if (response.ok){
                alert("You have successfully added the room")
                return;
            }
        })
    }
// edit room

// end ROom
// MANAGE USER
    // show user
    const user= "http://localhost:3000/user";
    fetch(user)
    .then((response) => response.json())
    .then((data)=> {
        var a = data.map((data2) => {
            return`
            <tr>
                <th>${data2.id}</th>
                <td>${data2.name}</td>
                <td>${data2.gender}</td>
                <td>${data2.email}</td>
                <td>${data2.phone}</td>
                <td>${data2.password}</td>

                <td>${data2.role}</td>
                <td>
                    <button class="button-icon">
                        <i class="fa fa-cogs" aria-hidden="true"  data-bs-toggle="modal" data-bs-target="#admin_edit_user" data-bs-whatever="@mdo" id="edit-user-${data2.id}"></i>
                    </button>
                    <button class="button-icon">
                        <i class="fa fa-trash" aria-hidden="true"  data-bs-toggle="modal" data-bs-target="#admin_delete_user" data-bs-whatever="@mdo" id="delete-user-${data2.id}" ></i>
                    </button>
                </td>
            </tr>
            `
        
        })
        document.getElementById("user-table").innerHTML = `${a.join("")}`;
        
        // EDIT USER
        for (let index of data){
            const userId=index.id;
            // lắng nghe sự kiện update
            document.getElementById("edit-user-"+userId).addEventListener("click",()=>{
                // lấy giá trị gắn cho value
                document.getElementById("admin_edit_user_id").value=userId;
                document.getElementById("admin_edit_user_name").value=index.name;
                document.getElementById("admin_edit_user_email").value=index.email;
                document.getElementById("admin_edit_user_phone").value=index.phone;
                document.getElementById("admin_edit_user_password").value=index.password;
                document.getElementById("admin_edit_user_gender").value=index.gender;
                document.getElementById("admin_edit_user_date_birth").value=index.age;
                document.getElementById("admin_edit_user_id").setAttribute("disabled","disabled");
                document.getElementById("admin_edit_form_user").addEventListener("click",()=>{
                    var id=document.getElementById("admin_edit_user_id").value;
                    var name=document.getElementById("admin_edit_user_name").value;
                    var email=document.getElementById("admin_edit_user_email").value;
                    var phone=document.getElementById("admin_edit_user_phone").value;
                    var password=document.getElementById("admin_edit_user_password").value;
                    var birthday=document.getElementById("admin_edit_user_date_birth").value;
                    var gender=document.getElementById("admin_edit_user_gender").value;
    
                    const editUser= {
                        id:userId,
                        name:name,
                        email: email,
                        phone: phone,
                        password: password,
                        avata:"https://img4.thuthuatphanmem.vn/uploads/2020/08/27/anh-avatar-zalo-cute-nhat-cho-con-trai_052907656.jpg",
                        age: birthday,
                        gender:gender
                    };
                    console.log("NHÌN GÌ MÀ NHÌNH"+editUser);
                    // up lên server
                    fetch(`http://localhost:3000/user/${index.id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(editUser),
                    })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Cập nhật User thất bại.");
                        }
                        return response.json();
                    })
                    .then((editUser) => {
                        // Xử lý phản hồi sau khi user đã được cập nhật thành công
                        console.log("You have successfully added the user: ", editUser);
                        alert("You have successfully edit the user");
                        return;
                        })
                    .catch((error) => {
                        // Xử lý lỗi nếu có
                        console.error("Lỗi khi cập nhật user:", error);
                    })
                })
            })
            

            // delete
        document.getElementById("delete-user-" + userId).addEventListener("click",()=>{
            document.getElementById("admin_ok_delete_user").addEventListener("click",()=>{
                fetch(`http://localhost:3000/user/${userId}`, {
                method: "DELETE",
                })
                .then((response) => {
                    if (!response.ok) {
                    throw new Error("Xóa người dùng thất bại.");
                    }
                    return response.json();
                })
                .then((data) => {
                    // Xử lý phản hồi từ json sau khi xóa thành công
                    console.log("User đã được xóa:", data);
                    alert("You have successfully delete the user")
                    return;
                    // Cập nhật giao diện hoặc làm bất kỳ điều gì bạn muốn sau khi xóa thành công
                })
                .catch((error) => {
                    console.error("Lỗi khi xóa user:", error);
                });
            })
            
        })
        }
        
    })
    // tạo user
    function createUser(){
        var name=document.getElementById("admin_create_user_name").value;
        var email=document.getElementById("admin_create_user_email").value;
        var phone=document.getElementById("admin_create_user_phone").value;
        var password=document.getElementById("admin_create_user_password").value;
        var confirmPassword=document.getElementById("admin_create_user_confirm_password").value;
        var birthday=document.getElementById("admin_create_user_birthday").value;
        var gender=document.getElementById("admin_create_user_gender").value;
        // lỗi trống
        if (name==""||email==""||password==""||confirmPassword==""||birthday==""||gender==""){
            alert("Please provide complete information");
            return ;
        }else if (password == confirmPassword){
            // tạo đối tượng chứa dữ liệu đăng kí
            const formDataUser={
                name:name,
                email: email,
                phone: phone,
                password: password,
                avata:"https://img4.thuthuatphanmem.vn/uploads/2020/08/27/anh-avatar-zalo-cute-nhat-cho-con-trai_052907656.jpg",
                age: birthday,
                gender:gender
            }
            console.log(formDataUser)
            // gửi dữ liệu lên json server
            fetch(user,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formDataUser)
            })
            .then(response=>{
                if (response.ok){
                    alert("You have successfully added the user")
                return;
                }
                else {
                    alert("Password don't match retype your Password.");
                    return;
                }
            })

        }
    }
