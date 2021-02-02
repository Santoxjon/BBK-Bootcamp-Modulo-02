function show(dep) {
    let str = `<h1>${dep.name}</h1>`;
    str += `<table style='width: 80vw; background-color: #fffeee; font-size: 1.75em; padding'><tr style='text-align: left;'><th>Nombre</th><th>Precio</th><th>Stock</th></tr>`;
    dep.products.forEach(product => {
        str += `<tr><td>${product.name}</td><td>${product.price}</td><td>${product.stock}</td></tr>`;
    });
    return str;
}

module.exports = { show }