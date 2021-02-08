const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.listen(port);
app.use(express.urlencoded({ extended: false })); //POST
//
const data = require('./public/js/static')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/people-list', (req, res) => {
    res.json(data.people)
});

app.get('/people', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/people.html'));
});

app.get('/people/add', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/add-person.html'));
});

app.post('/people/add', (req, res) => {
    let new_person = { name: "", lastname: "", age: "" };
    new_person.name = req.body.name;
    new_person.lastname = req.body.lastname;
    new_person.age = req.body.age;

    data.people.push(new_person);
    res.redirect('/people');
});

app.get('/people/edit', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/edit-person.html'));
});

app.put('/people/edit', (req, res) => {
    let index = data.people.findIndex(person => person.name === req.body.name);
    data.people[index].lastname = req.body.lastname;
    data.people[index].age = req.body.age;
    res.send(["Editado con éxito"]);
});

app.get('/people/delete', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/delete-person.html'));
});

app.delete('/people/delete', (req, res) => {
    let index = data.people.findIndex(person => person.name === req.body.name);
    data.people.splice(index, 1);
    res.send(['Eliminado con éxito']);
});