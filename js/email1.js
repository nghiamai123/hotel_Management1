
// let previousUser= []; // Lưu trữ dữ liệu trước đó

// // Hàm lấy dữ liệu từ JSON server và tiến hành so sánh
// function fetchUserAndCompare() {
//     fetch('http://localhost:3000/user')
//         .then(response => response.json())
//         .then(user => {
//             // So sánh dữ liệu mới với dữ liệu trước đó
//             if (JSON.stringify(user) === JSON.stringify(previousUser)) {
//                 console.log('Dữ liệu không thay đổi.');
//             } else {
//                 console.log('Dữ liệu đã thay đổi.');
//                 // Thực hiện các hành động khác nếu dữ liệu thay đổi
//             }

//             // Lưu trữ dữ liệu mới như dữ liệu trước đó
//             previousUser = user;
//         })
//         .catch(error => {
//             console.error('Lỗi:', error);
//         });
// }

// // Gọi hàm fetchDataAndCompare để lấy dữ liệu và so sánh
// fetchUserAndCompare();





function submitContactForm() {
    var body = document.getElementById("textDescription").value;
}

var templateParams = {
    fullName: 'Ho thi xuom',
    email: "xuom.ho25@gmail.com",
    phoneNumber: "0364859604",
    content: 'Check this out!',
    pass:1253
};

emailjs.send('service_bz8g1ad', 'template_qah3piu', templateParams) //use your Service ID and Template ID
    .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
        console.log('FAILED...', error);
    });

