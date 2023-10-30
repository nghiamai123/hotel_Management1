
function contactViaEmail() {
    fetch(listUser1)
        .then((res) => res.json())
        .then((data) => {
            data.forEach(element => {
                if (userid == element.id) {
                    if (JSON.parse(localStorage.getItem("currentlylogin"))) { //khi chưa đăng nhập thì các ô dữ liệu trống
                        var fullName = element.name;
                        var email = element.email;
                        var phoneNumber = element.phone;
                    }
                }
                var recipientEmail = "hoahauhk@gmail.com";
                var ccRecipients = ["lam.duong25@student.passerellesnumeriques.org", "honglamhk2004@gmail.com"];
                var subject = "[Contact]";
                var body = "Dear Yawn Yawn hotel,\nMy name is " + fullName + "\n connect me via" + email + " or phone number " + phoneNumber;

                var mailtoUrl = "mailto:" + recipientEmail + "?cc=" + ccRecipients.join(",") +
                    "&subject=" + encodeURIComponent(subject) +
                    "&body=" + encodeURIComponent(body) +
                    "&from=" + encodeURIComponent(email);
                window.location.href = mailtoUrl;
            }
            )
        })
};


