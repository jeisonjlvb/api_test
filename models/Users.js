const { database, Model } = require('../config/bd_config');
const Sequelize = require('sequelize');
class Users extends Model { }

const User = Users.init({
    nombre: {
        type: Sequelize.STRING
    },
    apellido: {
        type: Sequelize.STRING
    },
    usuario: {
        type: Sequelize.STRING,
        unique: true
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    activo: {
        type: Sequelize.BOOLEAN
    }
},

    {
        sequelize: database,
        modelName: 'users',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    })
module.exports = User;