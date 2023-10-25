var IDuser = JSON.parse(localStorage.getItem("listuser"));
const historybooking = `http://localhost:3000/order`;

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
            <td>
                <button class="button-icon" >
                    <i class="fa fa-cogs" aria-hidden="true"></i>
                </button>
                <button class="button-icon">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
            </td>
        </tr>`
        }
        })      
    document.getElementById("rooms-table").innerHTML = hry.join("");
})