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
MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) { // Local
    // MongoClient.connect("mongodb://192.168.0.27:27017", function (err, client) { // Remote
    if (err !== null) {
        console.log(err);
    } else {
        db = client.db("tableShop");
    }
});

// Show tables
app.get("/api/tables", function (req, res) {
    res.sendFile(path.join(__dirname + '/public/tables.html'));
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

// Add new tables
app.get("/api/add", function (req, res) {
    res.sendFile(path.join(__dirname + '/public/add-tables.html'));
});

app.post("/api/add", function (req, res) {
    let size = req.body.size;
    let color = req.body.color;
    let material = req.body.material;
    let legs = +req.body.legs;

    db.collection("table").insertOne({ size, color, material, legs });

    res.redirect("/api/tables");
});

// Update existing tables
app.get("/api/modify", function (req, res) {
    res.sendFile(path.join(__dirname + '/public/modify-tables.html'));
});

app.put("/api/modify/:color", function (req, res) {
    let color = req.params.color;

    db.collection("table").updateMany(
        { color },
        {
            $set: {
                color: "garnet"
            }
        }
    )
    res.json("exito");
});

// Delete existing tables
app.get("/api/delete", function (req, res) {
    res.sendFile(path.join(__dirname + '/public/delete-tables.html'));
});

app.delete("/api/delete/:legs", function (req, res) {
    let legs = req.params.legs;

    db.collection("table").deleteMany(
        { legs: +legs }
    );
    res.json("exito");
});

app.listen(port);