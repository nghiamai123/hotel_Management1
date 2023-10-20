const listUser1 = "http://localhost:3000/user";
var userid = localStorage.getItem('listuser');
fetch(listUser1)
.then((res) => res.json())
.then((data) => {
    data.forEach(element => {
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
  const apiUrl = 'http://localhost:3000';
  const tableName = 'user';
  const recordId = userid;

  const updatedData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    password: document.getElementById("password").value,
    avata: JSON.parse(localStorage.getItem("avata")),
    age: "2023-10-12",
    gender: "Male"
  };

  fetch(`${apiUrl}/${tableName}/${recordId}`, {
    method: 'PATCH', // Hoặc 'PATCH' nếu bạn chỉ muốn cập nhật một phần dữ liệu
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Data update failed.');
      }
      alert('The data has been updated successfully.');
    })
    .catch(error => {
      alert('Error updating data:', error);
    });
}

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
