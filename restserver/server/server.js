require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/tarea'));

mongoose.connect('mongodb://localhost:27017/ragasaEntrevista', (err, res) => {

    if (err)
        throw err;

    console.log('Base de datos OK');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando Puerto: ', process.env.PORT);
});