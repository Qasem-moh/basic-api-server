
'use strict';

// connects to our database depending on the URI set as an environment variable, 
const POSTGRES_URI = process.env.NODEENV == "test" ? 'sqlite:memory ' : "postgres://localhost:5432/qasem";

const { Sequelize, DataTypes } = require('sequelize');

// We can add Configuration based on the environment ... Where is our code running in "development" and "test" vs "deployed"?
let sequelizeOptions = {};
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

// our schema definitions
const food = require('./food');

module.exports = {
    db: sequelize,
    Food: food(sequelize, DataTypes),
};