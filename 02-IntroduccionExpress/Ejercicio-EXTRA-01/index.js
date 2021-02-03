const express = require('express');
const SERVIDOR = express();
SERVIDOR.listen(3000);

let functions = require("./functions");

let shop = [
    {
        name: "Pescaderia",
        products: [
            {
                name: "Salmon",
                price: 6.95,
                stock: 10
            },
            {
                name: "Merluza",
                price: 6.25,
                stock: 10
            },
            {
                name: "Lubina",
                price: 2.40,
                stock: 10
            }
        ]
    },
    {
        name: "Carniceria",
        products: [
            {
                name: "Hamburguesa de Pavo",
                price: 2.75,
                stock: 10
            },
            {
                name: "Pechugas de pollo",
                price: 4.03,
                stock: 10
            },
            {
                name: "Carne picada ternera",
                price: 6.40,
                stock: 10
            }
        ]
    },
    {
        name: "Fruteria",
        products: [
            {
                name: "Manzana Golden",
                price: 1.69,
                stock: 10
            },
            {
                name: "Pera Conferencia",
                price: 1.99,
                stock: 10
            },
            {
                name: "Limón, malla 1kg",
                price: 1.69,
                stock: 10
            }
        ]
    }
];

let cart = [];

// Index
SERVIDOR.get("/", function (req, res) {
    let str = "<h1>Tienda</h1><p><a href='/pescaderia'>Pescadería</a></p><p><a href='/carniceria'>Carnicería</a></p><p><a href='/fruteria'>Frutería</a></p><hr><p><a href='/cesta'>VER LA CESTA</a></p>"
    res.send(str);
});

// Pescadería
SERVIDOR.get("/pescaderia", function (req, res) {
    let str = functions.show(shop[0]);
    res.send(str);
});
SERVIDOR.get("/pescaderia/:name/:stock", function (req, res) {
    let dep = shop[0];
    functions.addToCart(dep, req, res, cart);
});

// Carnicería
SERVIDOR.get("/carniceria", function (req, res) {
    let str = functions.show(shop[1]);
    res.send(str);
});
SERVIDOR.get("/carniceria/:name/:stock", function (req, res) {
    let dep = shop[1];
    functions.addToCart(dep, req, res, cart);
});

// Frutería
SERVIDOR.get("/fruteria", function (req, res) {
    let str = functions.show(shop[2]);
    res.send(str);
});
SERVIDOR.get("/fruteria/:name/:stock", function (req, res) {
    let dep = shop[2];
    functions.addToCart(dep, req, res, cart);
});

// Error 
SERVIDOR.get("/error/:name", function (req, res) {
    let str = `<h1>ERROR</h1><p>No hay stock suficiente para ${req.params.name}</p><p><a href='/'>Volver</a></p>`;
    res.send(str);
});

// Cesta
SERVIDOR.get("/cesta", function (req, res) {
    let str = "<h1>Carro de la compra</h1><ul style='font-size: 1.75em;'>";
    cart.forEach(product => {
        str += `<li>${product}</li>`;
    });
    str += "</ul>";
    str += cart.length > 0 ? "<p><a href='/pay'>FINALIZAR COMPRA</a></p>" : "<p>Cesta vacía</p>";
    res.send(str);
});

// Finalizar compra
SERVIDOR.get("/pay", function (req, res) {
    if (cart.length > 0) {
        cart = [];
        shop.forEach(dep => {
            dep.products.forEach(product => {
                product.stock = 10;
            });
        });
        let str = "<h1>COMPRA FINALIZADA</h1><p>Gracias por comprar con nosotros</p><p><a href='/'>Volver a la tienda</a></p>"
        res.send(str);
    }
    else {
        res.redirect('/');
    }
});