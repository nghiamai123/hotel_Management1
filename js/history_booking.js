var IDuser = JSON.parse(localStorage.getItem("listuser"));
const historybooking = `http://localhost:3000/user/${IDuser}`;

fetch(historybooking)
    .then((res) => res.json())
    .then(data => {
        var his = ` <th>${data.history[0]}</th>
        <th>${data.history[4]}</th>
        <th>${data.history[5]}</th>
        <th>${data.history[1]}</th>
        <th>${data.history[2]}</th>
        <th>${data.history[8]}</th>
        <td>
            <button class="button-icon" >
                <i class="fa fa-cogs" aria-hidden="true"></i>
            </button>
            <button class="button-icon">
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </td>
    </tr> `
    document.getElementById("rooms-table").innerHTML = his;
})