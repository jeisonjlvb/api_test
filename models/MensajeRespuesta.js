const { database, Model } = require('../config/bd_config');
const Sequelize = require('sequelize');
class MensajeRespuesta extends Model { }

const Message = MensajeRespuesta.init({
    tipo: {
        type: Sequelize.STRING
    },
    codigo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },
},

    {
        sequelize: database,
        modelName: 'mensaje_respuesta',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    })
module.exports = Message;