const express = require('express')
const app = express()
const hbs = require('hbs');

require('./hbs/helpers')

const port = process.env.PORT || 3000; // Para subir a heroku

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'estEban'
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})


app.listen(port, () => {
    console.log(`Escuchando penticiones en el puerto ${port}`);
})