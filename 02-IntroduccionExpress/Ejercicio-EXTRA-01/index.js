const express = require('express');
const SERVIDOR = express();
SERVIDOR.listen(3000);

let functions = require("./functions");

let shop = [
    {
        name: "Pescadería",
        products: [
            {
                name: "Salmón",
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
        name: "Carnicería",
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
        name: "Frutería",
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

// Index
SERVIDOR.get("/", function (req, res) {
    let str = "<p><a href='/pescaderia'>Pescadería</a></p><p><a href='/carniceria'>Carnicería</a></p><p><a href='/fruteria'>Frutería</a></p>"
    res.send(str);
});

// Pescadería
SERVIDOR.get("/pescaderia", function (req, res) {
    let str = functions.show(shop[0]);
    res.send(str);
});
SERVIDOR.get("/pescaderia/:name/:stock", function (req, res) {

    res.send(str);
});

// Carnicería
SERVIDOR.get("/carniceria", function (req, res) {
    let str = functions.show(shop[1]);
    res.send(str);
});
SERVIDOR.get("/carniceria/:name/:stock", function (req, res) {

    res.send(str);
});

// Frutería
SERVIDOR.get("/fruteria", function (req, res) {
    let str = functions.show(shop[2]);
    res.send(str);
});
SERVIDOR.get("/fruteria/:name/:stock", function (req, res) {

    res.send(str);
});