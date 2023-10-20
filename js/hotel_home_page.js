function dangnhap(){
    document.getElementById("sign").style.display = 'none';
    document.getElementById("register").style.display = 'none';
    document.getElementById("avata").style.display = 'block';
}

// Lấy tham chiếu đến hai icon
var icon1 = document.getElementById("icon_heart_detail");
var icon2 = document.getElementById("favorite-icon");

// Thêm sự kiện click cho icon1
icon1.addEventListener("click", async function() {
  // Kiểm tra trạng thái hiển thị của icon2
  if (icon2.style.display === "none") {
    // Nếu icon2 đang ẩn, hiển thị icon2 và ẩn icon1
    const updateUser = async (productId, newData) => {
        const url = `http://localhost:3000/rooms/${productId}`;
        console.log(url)
        try {
          const response = await fetch(url, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
          });
      
          if (response.ok) {
            console.log('Dữ liệu người dùng đã được cập nhật thành công!');
          } else {
            console.error('Lỗi khi cập nhật dữ liệu người dùng!');
          }
        } catch (error) {
          console.error('Lỗi khi gửi yêu cầu:', error);
        }
      };
      
      // Ví dụ sử dụng
     
        // productId; // Lấy userId từ localStorage hoặc nguồn dữ liệu khác
      const newData = { like: 'yes'};
      
      updateUser(productId, newData); // Cập nhật dữ liệu người dùng với userId và dữ liệu mới
  }
});

icon2.addEventListener("click", function() {
  // Kiểm tra trạng thái hiển thị của icon2
  if (icon1.style.display === "none") {
    // Ngược lại, hiển thị icon1 và ẩn icon2
    const updateUser = async (productId, newData) => {
      const url = `http://localhost:3000/rooms/${productId}`;
      try {
        const response = await fetch(url, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newData),
        });
    
        if (response.ok) {
          console.log('Dữ liệu người dùng đã được cập nhật thành công!');
        } else {
          console.error('Lỗi khi cập nhật dữ liệu người dùng!');
        }
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu:', error);
      }
    };
    const newData = { like: 'no'};
    updateUser(productId, newData); // Cập nhật dữ liệu người dùng với userId và dữ liệu mới
  }
});