function contactViaEmail() {
    var recipient = "lam.duong25@student.passerellesnumeriques.org";  //tạo mặc định người nhận
    var ccRecipients = ["vietmy@gmail.com", "xuom@gmail.com","nghiamai@gmail.com"]; //tạo mặc định cc
    var mailtoUrl = "mailto:" + recipient + "?cc=" + ccRecipients.join(",");
    window.location.href = mailtoUrl;
}
// send Email
function sendEmail() { 
  var fullName = document.getElementById("fullName").value;
  console.log(fullName);
  var email = document.getElementById("email").value;
  console.log(email);
  var phoneNumber = document.getElementById("phoneNumber").value;
  var textDescription = document.getElementById("textDescription").value;

  if (fullName == "" || email == "" || phoneNumber == "" || textDescription == "") {
    alert("Please re-enter");
    return;
  }

  var recipientEmail = "lam.duong25@student.passerellesnumeriques.org";
  var ccRecipients = ["vietmy@gmail.com", "xuom@gmail.com", "nghiamai@gmail.com"];
  var subject = "Contact";
  var body = "Dear Yawn Yawn hotel,\n\nMy name is " + fullName + "\n" + textDescription;

  var mailtoUrl = "mailto:" + recipientEmail + "?cc=" + ccRecipients.join(",") +
    "&subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body) +
    "&from=" + encodeURIComponent(email);
  window.location.href = mailtoUrl;
}




const listUser1 = "http://localhost:3000/user";
var userid = localStorage.getItem('listuser');
fetch(listUser1)
.then((res) => res.json())
.then((data) => {
    data.forEach(element => {
      if (userid == element.id){
        document.getElementById("fullName").value = element.name;
        console.log(element.name);
        document.getElementById("email").value = element.email;
        console.log(element.email);
        document.getElementById("phoneNumber").value = element.phone;
        console.log(element.phone);
      }
    }
    )
  });


// submit Contact Form
	function submitContactForm() { 
		var body = document.getElementById("textDescription").value;
	Email.send({ 
		Host: "smtp.gmail.com", 
		Username: "hoahauhk123@gmail.com", 
		Password: "yawnyawn123", 
		To: 'honglamhk2004@gmail.com', 
		From: "hoahauhk123@gmail.com", 
		Subject: "Contact", 
		Body: body, 
	}) 
		.then(function (message) { 
		alert("mail sent successfully") 
		}); 
	} 











  

