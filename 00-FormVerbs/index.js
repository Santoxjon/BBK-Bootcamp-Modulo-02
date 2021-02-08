const express = require('express');
const app = express();
//
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false })); //POST
const port = process.env.PORT || 3000;
app.listen(port);
app.use(express.json());
//
app.get('/martes', (req, res) => {
    // res.send(['Todavía no es Martes ']);
    res.json('Todavía no es Martes')
});

app.put('/miercoles', (req, res) => {
    res.send(['Todo Ok']);
});