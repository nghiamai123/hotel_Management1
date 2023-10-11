
// Mảng chứa danh sách người sử dụng
let users = [
    { name: "Nguyễn Văn A", age: 25, email: "a@example.com" },
    { name: "Trần Thị B", age: 30, email: "b@example.com" },
    { name: "Lê Văn C", age: 35, email: "c@example.com" }
];

// Hàm cập nhật người sử dụng
function updateUser(users, name) {
    // Tìm kiếm người sử dụng theo tên
    let userIndex = users.findIndex(user => user.name === name);

    if (userIndex !== -1) {
        // Hiển thị thông tin cũ của người sử dụng
        console.log("Thông tin cũ của người sử dụng:");
        console.log("Tên:", users[userIndex].name);
        console.log("Tuổi:", users[userIndex].age);
        console.log("Email:", users[userIndex].email);

        // Nhập thông tin mới từ người dùng
        let new_name = prompt("Nhập tên mới: ");
        let new_age = parseInt(prompt("Nhập tuổi mới: "));
        let new_email = prompt("Nhập email mới: ");

        // Cập nhật thông tin mới cho người sử dụng
        users[userIndex].name = new_name;
        users[userIndex].age = new_age;
        users[userIndex].email = new_email;
        console.log("Cập nhật thành công!");

        // Hiển thị thông tin mới của người sử dụng
        console.log("Thông tin mới của người sử dụng:");
        console.log("Tên:", users[userIndex].name);
        console.log("Tuổi:", users[userIndex].age);
        console.log("Email:", users[userIndex].email);
    } else {
        console.log("Không tìm thấy người sử dụng có tên", name);
    }
}

// Chạy chương trình
let name = prompt("Nhập tên người sử dụng cần cập nhật: ");
updateUser(users, name);