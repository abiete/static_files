// Imports Necesarios
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');

// Creacion del servidor
const app = express();
var port = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));

// Settings
app.set('appName','Abiete Software CDN');

// URLS
// Para ver las vistas ir a views.js

app.get('/',(req,res)=>{
    res.end('<h1>Hello, server!</h1>')
})

// Lanzamiento
app.listen(port, () =>{
    console.log(app.get('appName'));
    console.log('Developed by Abiete Software')
    console.log('Server on Port 3000')
    console.log('')
})
