function update() {
    let old_name = document.getElementById("old_name").value;
    let new_name = document.getElementById("new_name").value;
    let new_age = document.getElementById("new_age").value;
    let new_type = document.getElementById("new_type").value;

    let data = { old_name: old_name, new_name: new_name, new_age: new_age, new_type: new_type }
    console.log(JSON.stringify(data));
    fetch('/update-animal', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : 'application/json'
        }
    }).then(checkStatus)
        .then(() => console.log('updated!!!'));
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}