'use strict';

const express = require('express');
const notFoundHandler = require('./error - handlers/404');
const errorHandler = require('./error - handlers/500');
const logger = require('./middlewares/logger');
const peopleRoutes = require('./routes/food');
const app = express();

app.use(express.json()); 

app.use(logger);
app.use(peopleRoutes);

function start(port) {
    app.listen(port, ()=> console.log(`Running on Port ${port}`))
}

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}