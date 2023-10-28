function sendEmail() {
    // Code để gửi email

    // Sau khi gửi email thành công, hiển thị thông báo
    alert("Email đã được gửi thành công!");
}
document.getElementById("sendEmailButton").addEventListener("click", function (event) {
    sendEmail();
    event.preventDefault();
});