const { database, Model } = require('../config/bd_config');
const Sequelize = require('sequelize');

class DetallesFacturas extends Model { }

const DetalleFactura = DetallesFacturas.init({
    factura_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'facturas',
            key: 'id'
        }
    },
    detalle_producto_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'detalle_producto',
            key: 'id'
        }
    },
   cantidad: {
        type: Sequelize.NUMBER
    },
    activo: {
        type: Sequelize.BOOLEAN
    }
},

    {
        sequelize: database,
        modelName: 'detalle_factura',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    })
    
module.exports = DetalleFactura;