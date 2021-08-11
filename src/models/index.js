'use strict';
const POSTGRES_URI =  process.env.DATABASE_URI || "postgres://localhost:5432/qasem";
const { Sequelize, DataTypes } = require('sequelize');

let sequelizeOptions = {};
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

// our schema definitions
const food = require('./food.model.js');

module.exports = {
  db: sequelize,
  Food: food(sequelize, DataTypes),
};