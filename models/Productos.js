const { database, Model } = require('../config/bd_config');
const Sequelize = require('sequelize');
var ProductosCategorias = require('../models/ProductosCategorias');

//ProductosCategorias.belongsTo(Productos, {foreignKey: 'producto_id'});

class Productos extends Model { }

const Producto = Productos.init({
    codigo: {
        type: Sequelize.STRING,
        unique: true
    },
    descripcion: {
        type: Sequelize.STRING
    },
    activo: {
        type: Sequelize.BOOLEAN
    }
},

    {
        sequelize: database,
        modelName: 'productos',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    })
module.exports = Producto;