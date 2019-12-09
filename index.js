var exp = require('express');
var cor = require('cors');
var body = require('body-parser');

var users = require('./controllers/usuariosController');

var app= exp();

app.use(cor());
app.use(body.urlencoded({ extended: false }));
app.use(body.json());

app.get("/listUsers",users.usuarios);


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
   });
