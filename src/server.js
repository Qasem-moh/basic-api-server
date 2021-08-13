'use strict';
// 1st level packages -> we did not install anything
// 3rd party packages
const express = require('express');
// local modules
const notFoundHandler = require('../src/error-handlers/404');
const errorHandler = require('../src/error-handlers/500');
const logger = require('../src/middleware/logger');
const foodRoutes = require('./routes/food'); //fixroute
const app = express();
// Global Middlewares
app.use(express.json()); // access the body
// app.use(cors()); install the package
app.use(logger);
// Use our routes form the routing module -> people
app.use(foodRoutes);

function start(port) {
    app.listen(port, () => console.log(`Server Is Running on Port ${port}`))
}

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}