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
            <td>
                <button class="button-icon">
                    <i class="fa fa-cogs" aria-hidden="true" id="${data1.id}"></i>
                </button>
                <button class="button-icon">
                    <i class="fa fa-trash" aria-hidden="true" id="${data1.id}" ></i>
                </button>
            </td>
        </tr>
        `
    
    })
    document.getElementById("rooms-table").innerHTML = `${a.join("")}`
})
const user= "http://localhost:3000/user";
fetch(user)
.then((res) => res.json())
.then((data)=> {
    var a = data.map((data2) => {
        return`
        <tr>
            <th>${data2.id}</th>
            <td>${data2.name}</td>
            <td>${data2.password}</td>
            <td>${data2.phone}</td>
            <td>${data2.email}</td>
            <td>none</td>
            <td>
                <button class="button-icon">
                    <i class="fa fa-cogs" aria-hidden="true" id="${data2.id}"></i>
                </button>
                <button class="button-icon">
                    <i class="fa fa-trash" aria-hidden="true" id="${data2.id}" ></i>
                </button>
            </td>
        </tr>
        `
    
    })
    document.getElementById("user-table").innerHTML = `${a.join("")}`
})