const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port);

app.use(express.static('./public'));

app.get('/mascota', function (req, res) {
    res.send(`
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Página Principal</title>
        </head>
        <body>
            <h1>Hola qué tal</h1>
            <p>${req.query.mascota}</p>
        </body>
        </html>
    `);
});