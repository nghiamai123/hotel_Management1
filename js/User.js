// var User = [
//     {
//         id: "01",
//         name: " Hồ Thị Xươm",
//         avata: "https://tip.edu.vn/wp-content/uploads/2022/02/Hinh-Anh-Avatar-Dep-Cho-Con-Gai-Cute-De-Thuong.jpg",
//         password: "01042004",
//         phone: "0326826518",
//         email: "xuom25@ho.com",
//         age: "19",
//         gender: "Nữ"
        
//     },
//     {
//         id: "02",
//         name: " Dương Thị Hồng Lam",
//         avata: "https://i.pinimg.com/originals/1b/50/7d/1b507d8dc08294b4fd3bdd6d439ae894.jpg",
//         password: "03641009",
//         phone: "0335749023",
//         email: "lam25@duong,com",
//         age: "19",
//         gender: "Nữ"

//     },
//     {
//         id: "03",
//         name: " Trần Thị Việt Mỹ",
//         avata: "https://demoda.vn/wp-content/uploads/2023/01/hinh-anh-avatar-cute-1-600x600.jpg",
//         password: "02876930",
//         phone: "03768635043",
//         email: "my25@tran,com",
//         age: "19",
//         gender: "Nữ"

//     },
//     {
//         id: "04",
//         name: "Mai Xuân Nghĩa",
//         avata: "https://upanh123.com/wp-content/uploads/2021/03/anh-dai-dien-buon-cho-nam16.jpg",
//         password: "05780045",
//         phone: "0320069749",
//         email: "nghia25@mai,com",
//         age: "20",
//         gender: "Nam"

//     },
//     {
//         id: "05",
//         name: " Hồ Việt Hoàng",
//         avata: "https://img4.thuthuatphanmem.vn/uploads/2020/08/27/anh-avatar-zalo-cute-nhat-cho-con-trai_052907656.jpg",
//         password: "07800937",
//         phone: "0346789209",
//         email: "hoang25@ho.com",
//         age: "23",
//         gender: "Nam"

//     }
// ];
// function save() {
//     localStorage.setItem('listUser',JSON.stringify(User))
// }
// function load() {
//     User = JSON.parse(localStorage.getItem('listUser'));
    
// }
// if (localStorage.getItem('listUser') != null) {
//     load();
// }
const user1 = "http://localhost:3000/user"

fetch(baserooms)
.then((res) => res.json())
.then((data) => {
    console.log(data)
var a = data.map((data1) => {
    return `
        
    `
  });
});