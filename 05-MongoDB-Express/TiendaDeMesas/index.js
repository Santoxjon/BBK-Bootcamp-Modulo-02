const express = require('express');
const mongodb = require('mongodb');
const path = require('path');
let MongoClient = mongodb.MongoClient;

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //POST


let db;
// MongoClient.connect("mongodb://192.168.0.27:27017", function (err, client) { // Local
MongoClient.connect("mongodb://192.168.0.27:27017", function (err, client) { // Remote
    if (err !== null) {
        console.log(err);
    } else {
        db = client.db("tableShop");
    }
});

app.get("/api/tables", function (req, res) {
    res.sendFile(path.join(__dirname+'/public/tables.html'));
});

app.get("/api/tables-list", function (req, res) {
    db.collection("table").find().toArray(function (err, data) {
        if (err != null) {
            console.log(err);
            res.send({ mensaje: "error: " + err });
        } else {
            res.json(data);
        }
    });
});


app.listen(port);