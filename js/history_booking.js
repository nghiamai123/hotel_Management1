var IDuser = JSON.parse(localStorage.getItem("listuser"));
const historybooking = `http://localhost:3000/order`;

fetch(historybooking)
    .then((res) => res.json())
    .then(data => {
        var hry = data.map((hry) =>
        {
            return `<tr>
            <td>${hry.nameroom}</td>
            <td>${hry.numbercard}</td>
            <td>${hry.price}</td>
            <td>${hry.chin}</td>
            <td>${hry.chout}</td>
            <td>${hry.status}</td>
            <td>${hry.totalprice}</td>
            <td>
                <button class="button-icon" >
                    <i class="fa fa-cogs" aria-hidden="true"></i>
                </button>
                <button class="button-icon">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
            </td>
        </tr>`
        })      
    document.getElementById("rooms-table").innerHTML = hry.join("");
})