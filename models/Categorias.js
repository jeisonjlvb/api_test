const { database, Model } = require('../config/bd_config');
const Sequelize = require('sequelize');
class Categorias extends Model { }

const Categoria = Categorias.init({
    descripcion: {
        type: Sequelize.STRING
    },
    activo: {
        type: Sequelize.BOOLEAN
    }
},

    {
        sequelize: database,
        modelName: 'categorias',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    })
module.exports = Categoria;