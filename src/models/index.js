'use strict';

const POSTGRES_URI = "postgres://localhost:5432/testing";
const { Sequelize, DataTypes } = require('sequelize');
const Food = require('./Food.model');

let sequelize = new Sequelize(POSTGRES_URI, {});

// lets define our Schema
module.exports = {
    Food: Food(sequelize, DataTypes),
    db: sequelize
}