// function contactViaEmail() {
//     var recipient = "lam.duong25@student.passerellesnumeriques.org";  //tạo mặc định người nhận
//     var ccRecipients = ["vietmy@gmail.com", "xuom@gmail.com","nghiamai@gmail.com"]; //tạo mặc định cc
//     var mailtoUrl = "mailto:" + recipient + "?cc=" + ccRecipients.join(",");
//     window.location.href = mailtoUrl;
// }
// contact via email
function contactViaEmail() { 
  fetch(listUser1)
  .then((res) => res.json())
  .then((data) => {
    data.forEach(element => {
      if (userid == element.id){
        if (JSON.parse(localStorage.getItem("currentlylogin"))){ //khi chưa đăng nhập thì các ô dữ liệu trống
        var fullName = element.name;
        var email = element.email;
        var phoneNumber= element.phone;
      }}
  var recipientEmail = "hoahauhk@gmail.com";
  var ccRecipients = ["lam.duong25@student.passerellesnumeriques.org", "honglamhk2004@gmail.com"];
  var subject = "[Contact]";
  var body = "Dear Yawn Yawn hotel,\nMy name is "+fullName  + "\n connect me via" + email + " or phone number " + phoneNumber ;

  var mailtoUrl = "mailto:" + recipientEmail + "?cc=" + ccRecipients.join(",") +
    "&subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body) +
    "&from=" + encodeURIComponent(email);
  window.location.href = mailtoUrl;
}
)})};


const listUser1 = "http://localhost:3000/user"; //show dữ liệu người dùng ra các ô input
var userid = localStorage.getItem('listuser');
fetch(listUser1)
.then((res) => res.json())
.then((data) => {
    data.forEach(element => {
      if (userid == element.id){
        if (JSON.parse(localStorage.getItem("currentlylogin"))){ //khi chưa đăng nhập thì các ô dữ liệu trống
        document.getElementById("fullName").value = element.name;
        document.getElementById("email").value = element.email;
        document.getElementById("phoneNumber").value = element.phone;
      }}
    }
    )
  });


// submit Contact Form
	function submitContactForm() { 
    var name = document.getElementById("fullName").value;
    var emailAddress = document.getElementById("email").value;
    var phone = document.getElementById("phoneNumber").value;
    var Description = document.getElementById("textDescription").value;
    if (fullName == "" || emailAddress == "" || phoneNumber == "" || Description == "") {
      alert("Please re-enter");
      return;
    }
    var templateParams = {
      fullName:name,
      phoneNumber : phone,
      textDescription: Description,
      email:emailAddress
    };
    
    emailjs.send('service_6iigjdw', 'template_cq8m0w3', templateParams) //use your Service ID and Template ID
      .then(function(response) {
         alert("Email has sent");
      }, function(error) {
         alert("Email hasn't sent ");
      });
    }
   











  