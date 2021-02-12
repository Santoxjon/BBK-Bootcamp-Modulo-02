function editClient() {
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let id = document.getElementById("id").value;

    let url = `/clients/${id}`;
    let data = { name, lastname };
    let fetchData = {
        method: 'PUT',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(data)
    }

    fetch(url, fetchData)
        .then((res) => res.json())
        .then(() => {
            location.replace("/clients");
        });
}

function checkoutRoom(i) {
    let room_id = document.getElementById(`room_id_${i}`).value;
    let today = new Date();
    let checkout_date = today.toISOString().substr(0, 10);

    let url = '/rooms/book';
    let data = { room_id, checkout_date };
    let fetchData = {
        method: 'PUT',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(data)
    }

    fetch(url, fetchData)
        .then((res) => res.json())
        .then(() => {
            location.replace('/rooms');
        });
}