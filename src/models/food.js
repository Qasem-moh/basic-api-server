'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('food', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    typefood: {
        type: DataTypes.STRING,
    }
});

module.exports = Food;