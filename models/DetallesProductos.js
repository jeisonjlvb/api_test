const { database, Model } = require('../config/bd_config');
const Sequelize = require('sequelize');
class DetallesProductos extends Model { }

const DetalleProducto = DetallesProductos.init({
    producto_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'productos',
            key: 'id'
        }
    },
   descripcion: {
        type: Sequelize.STRING
    },
    stock: {
        type: Sequelize.NUMBER
    },
    precio: {
        type: Sequelize.NUMBER
    },
    activo: {
        type: Sequelize.BOOLEAN
    }
},

    {
        sequelize: database,
        modelName: 'detalle_producto',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    })
    
module.exports = DetalleProducto;