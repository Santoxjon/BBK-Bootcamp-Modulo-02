function show(dep) {
    let str = `<h1>${dep.name}</h1>`;
    str += `<table style='width: 80vw; background-color: #fffeee; font-size: 1.75em; padding'><tr style='text-align: left;'><th>Nombre</th><th>Precio</th><th>Stock</th></tr>`;
    dep.products.forEach(product => {
        str += `<tr><td>${product.name}</td><td>${product.price}</td><td>${product.stock}</td></tr>`;
    });
    str += "</table><p><a href='/'>Volver</a></p>"
    return str;
}

function addToCart(dep, req, res, cart) {
    let product = dep.products.filter(product => product.name === req.params.name)[0];
    if (req.params.stock <= product.stock) {
        cart.push(product.name + ": " + req.params.stock);
        product.stock = product.stock - req.params.stock;
        res.redirect(`/${dep.name}`);
    }
    else {
        res.redirect(`/error/${products[0].name}`);
    }
}


module.exports = { show, addToCart }