const { database, Model } = require('../config/bd_config');
const Sequelize = require('sequelize');
class VFacturaProducto extends Model { }

const FacturaProducto = VFacturaProducto.init({
    factura_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'facturas',
            key: 'id'
        }
    },
    cod_factura: {
        type: Sequelize.STRING
    },
    pago: {
        type: Sequelize.BOOLEAN
    },
    fecha_pago: {
        type: Sequelize.DATE
    },
    monto: {
        type: Sequelize.NUMBER
    },
    tipo_pago_id: {
        type: Sequelize.INTEGER
    },
    tipo_pago: {
        type: Sequelize.STRING
    },

},

    {
        sequelize: database,
        modelName: 'v_factura_monto_total',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    })
    
module.exports = FacturaProducto;