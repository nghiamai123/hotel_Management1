const listUser1 = "http://localhost:3000/user";
fetch(listUser1)
.then((res) => res.json())
.then((data) => {
    data.forEach(element => {
        var userid = localStorage.getItem('listuser');
        if (userid == element.id){
            document.getElementById("content_profile-username").innerHTML = element.name;
            document.getElementById("profile-date").innerHTML = element.age;
            document.getElementById("avata-user").src = element.avata;
            document.getElementById("user_name").value = element.name;
            document.getElementById("email11").value = element.email;
            document.getElementById("user_phonenumber").value = element.phone;
            document.getElementById("user_password").value = element.password;
            // modal
            document.getElementById("name").value = document.getElementById("user_name").value;
            document.getElementById("email").value = document.getElementById("email11").value;
            document.getElementById("phone").value = document.getElementById("user_phonenumber").value;
            document.getElementById("password").value = document.getElementById("user_password").value;
        }
    });
})

function change() {
   document.getElementById("user_name").value = document.getElementById("name").value;
   document.getElementById("email11").value = document.getElementById("email").value;
   document.getElementById("user_phonenumber").value = document.getElementById("phone").value;
   document.getElementById("user_password").value = document.getElementById("password").value;
    // alert("change information success!!!")
}
            
// const uploadBtn = document.getElementById('profile-edit-avata');
// const avatarInput = document.getElementById('avatar-input');

// uploadBtn.addEventListener('click', function() {
//   avatarInput.click();
// });

// avatarInput.addEventListener('change', function(event) {
//   const file = event.target.files[0];
//   // Xử lý tải lên file ở đây
// });
const uploadBtn = document.getElementById('profile-edit-avata');
const avatarInput = document.getElementById('avatar-input');
const previewImage = document.getElementById('preview-image');

uploadBtn.addEventListener('click', function() {
  avatarInput.click();
});

avatarInput.addEventListener('change', function(event) {
  const file = event.target.files[0];

  const reader = new FileReader();
  reader.onload = function(e) {
    const imageSrc = e.target.result;
    previewImage.src = imageSrc;

    // Hiển thị hộp thoại xem trước hình ảnh
    // Ví dụ: sử dụng thư viện modal hoặc hiển thị một div overlay

    // Ví dụ sử dụng Modal Bootstrap:
    $('#imagePreviewModal').modal('show');
  };

  reader.readAsDataURL(file);
});
