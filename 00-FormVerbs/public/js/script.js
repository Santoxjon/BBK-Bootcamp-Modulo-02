// fetch('/martes')
//     .then(res => res.json())
//     .then(data => console.log(data));

let data = { name: "Jon", a: "Santos" };

let fetchData = {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: { 'Content-Type': "application/json" }
}

fetch('/miercoles', fetchData)
    .then((res) => res.json())
    .then(data => console.log(data));