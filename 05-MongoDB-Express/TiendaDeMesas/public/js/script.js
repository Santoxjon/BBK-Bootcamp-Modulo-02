switch (window.location.pathname) {
    case "/api/tables":
        console.log(window.location.pathname);
        getTables();
        break;
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
                    strong.textContent = key+": ";

                    let p = document.createElement("p");
                    p.textContent = table[key];

                    p.prepend(strong);
                    div.append(p)
                }
                main.append(div);
            });
        });
}