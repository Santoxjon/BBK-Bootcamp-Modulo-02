const express = require('express');
const mongodb = require('mongodb');

const app = express();

let MongoClient = mongodb.MongoClient;

let db;
MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
    if (err !== null) {
        console.log(err);
    } else {
        db = client.db("prueba");
    }
});

app.get("/", function (req, res) {
    db.collection("naves").find().toArray(function (err, datos) {
        if (err != null) {
            console.log(err);
            res.send({ mensaje: "error: " + err });
        } else {
            console.log(datos);
            res.send(datos);
        }
    });
});

app.listen(3000);