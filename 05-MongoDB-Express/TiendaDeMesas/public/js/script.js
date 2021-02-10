if (window.location.pathname === "/api/tables") {
    console.log(window.location.pathname);
    getTables();
}

function getTables() {
    let fetchData = {
        method: 'GET',
        headers: { 'Content-Type': "application/json" }
    }
    fetch('/api/tables-list', fetchData)
        .then((res) => res.json())
        .then(tables => {
            let main = document.querySelector('main');
            tables.forEach(table => {
                let div = document.createElement("div");
                div.className = "table-card";
                for (key in table) {
                    let strong = document.createElement("strong");
                    strong.textContent = key + ": ";

                    let p = document.createElement("p");
                    p.textContent = table[key];

                    p.prepend(strong);
                    div.append(p)
                }
                main.prepend(div);
            });
        });
}

function updateTables() {
    let color = "/api/modify/" + document.getElementById("color").value;
    let fetchData = {
        method: 'PUT',
        headers: { 'Content-Type': "application/json" }
    }
    fetch(color, fetchData)
        .then((res) => res.json())
        .then(() => {
            location.replace("/api/tables");
        });
}

function deleteTables() {
    let legs = "/api/delete/" + document.getElementById("legs").value;
    let fetchData = {
        method: 'DELETE',
        headers: { 'Content-Type': "application/json" }
    }
    fetch(legs, fetchData)
        .then((res) => res.json())
        .then(() => {
            location.replace("/api/tables");
        });
}