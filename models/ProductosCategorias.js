const { database, Model } = require('../config/bd_config');
const Sequelize = require('sequelize');
class ProductosCategorias extends Model { }

const ProductoCategoria = ProductosCategorias.init({
    producto_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'productos',
            key: 'id'
        }
    },
    categoria_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'categorias',
            key: 'id'
        }
    },
    activo: {
        type: Sequelize.BOOLEAN
    }
},

    {
        sequelize: database,
        modelName: 'productos_categorias',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    })
    
module.exports = ProductoCategoria;