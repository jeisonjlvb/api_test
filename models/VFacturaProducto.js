const { database, Model } = require('../config/bd_config');
const Sequelize = require('sequelize');
class VFacturaProducto extends Model { }

const FacturaProducto = VFacturaProducto.init({
    cod_factura: {
        type: Sequelize.STRING
    },
    factura_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'facturas',
            key: 'id'
        }
    },
    producto: {
        type: Sequelize.STRING
    },
    detalle_producto_id: {
        type: Sequelize.INTEGER
    },
    detalle_producto: {
        type: Sequelize.STRING
    },
    stock: {
        type: Sequelize.INTEGER
    },
   cantidad: {
        type: Sequelize.INTEGER
    },
    precio: {
        type: Sequelize.NUMBER
    },
    cantidad_precio: {
        type: Sequelize.NUMBER
    }
},

    {
        sequelize: database,
        modelName: 'v_factura_productos',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    })
    
module.exports = FacturaProducto;