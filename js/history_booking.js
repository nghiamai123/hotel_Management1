var IDuser = JSON.parse(localStorage.getItem("listuser"));
const historybooking = `http://localhost:3000/order`;
document.getElementById("rooms-table").innerHTML = "";
fetch(historybooking)
    .then((res) => res.json())
    .then(data => {
        var hry = data.map((users) =>
        { if (IDuser == users.user) {
            return `<tr>
            <td>${users.nameroom}</td>
            <td>${users.numbercard}</td>
            <td>${users.price}</td>
            <td>${users.chin}</td>
            <td>${users.chout}</td>
            <td>${users.status}</td>
            <td>${users.totalprice}</td>
            <td onclick="cancel(${users.id})">
                <button class="button-icon" onclick="cancel1(${users.idroom1})">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
            </td>
        </tr>`
        }
        })      
    document.getElementById("rooms-table").innerHTML = hry.join("");
})

// cập nhật trạng thái phòng
function cancel1(IDroom) {
const updateUser = async (IDroom, newData) => {
    const url = `http://localhost:3000/rooms/${IDroom}`;
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
  const newData = { Reserved: 'no'};
  updateUser(IDroom, newData); // cập nhật DL phòng
}

function cancel(e) {
fetch(`http://localhost:3000/order/${e}`, {
    method: "DELETE",
    })
    .then((response) => {
        if (!response.ok) {
        throw new Error("Xóa thất bại.");
        }
        return response.json();
    })
    .then((data) => {
        console.log("đã được xóa:");
    })
    .catch((error) => {
        console.error("Lỗi khi xóa:", error);
    });
}
