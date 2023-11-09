function forgetpassword() {
  var email1 = document.getElementById("loginEmail").value;
  fetch("http://localhost:3000/user")
    .then(res => res.json())
    .then(data => {
      // Check if the email is empty
      if (email1 === "") {
        alert("Please re-enter");
        return;
      }
      // tìm user trong dl
      var user = data.find(function(x) {
        return x.email === email1;
      });
      if (!user) {
        alert("User not found");
        return;
      }
      // Use a template literal for the message
        var templateParams = {
          from_name: "Develop team of Yamm Yamm",
          to_name: user.name,
          message: `We are sending you this notification because you forgot your password. Your password is: ${user.password}`
        };

        emailjs.send('service_6zlfa5v','template_p5z5okp', templateParams)
          .then(function(response) {
            alert("Email has been sent");
          })
          .catch(function(error) {
            alert("Email could not be sent: " + error.message);
          });
      })
      .catch(function(error) {
        console.error('Error:', error);
        alert("An error occurred while fetching user data");
      });
  }
