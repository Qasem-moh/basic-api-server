'use strict';

const Food = (sequalize, DataTypes) => {
    sequalize.define('Food', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING
        }
    });
}

module.exports = Food;