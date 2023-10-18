const baserooms = "http://localhost:3000/rooms";
fetch(baserooms)
.then((res) => res.json())
.then((data)=> {
    var a = data.map((data1) => {
        return`
        <tr>
            <th>${data1.id}</th>
            <td>${data1.nameroom}</td>
            <td>${data1.type[0]}</td>
            <td>${data1.price}</td>
            <td><button class="button">Sửa</button> <button class="button">Xóa</button></td>
        </tr>
        `
    
    })
    document.getElementById("rooms-table").innerHTML = ` ${a.join("")}`
})