'use strict';

const express = require('express');
const notFoundHandler = require('./errorHandlers/404');
const errorHandler = require('./errorHandlers/500');
const logger = require('./middlewares/logger');
const peopleRoutes = require('./routes/food');
const app = express();

app.use(express.json()); 

app.use(logger);
app.use(peopleRoutes);

function start(port) {
    app.listen(port, ()=> console.log(`Server is Running on Port ${port}`))
}

// Home Page Route
app.get('/', (req, res) => {
    res.status(200).send('Home');
});

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}