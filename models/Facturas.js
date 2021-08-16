const { database, Model } = require('../config/bd_config');
const Sequelize = require('sequelize');

class Facturas extends Model { }

const Factura = Facturas.init({
    cod_factura: {
        type: Sequelize.STRING,
        unique: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    tipo_pago_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'tipo_pago',
            key: 'id'
        }
    },
    fecha_pago: {
        type: Sequelize.DATE
    },
    pago: {
        type: Sequelize.BOOLEAN
    },
    activo: {
        type: Sequelize.BOOLEAN
    }
},

    {
        sequelize: database,
        modelName: 'facturas',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    })
module.exports = Factura;