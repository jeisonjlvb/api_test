var Log = require('../config/log');
var Message = require('../models/MensajeRespuesta');
var Users = require('../models/Users');
const bcrypt = require('bcryptjs');
const salt = 10;
const jwt = require('jsonwebtoken')
const jwtKey = require('../config/config')
var { Model, database } = require('../config/bd_config');

function Mensajes(code) {
    return Message.findOne({
        where: {
            codigo: code
        }
    });
}

const info = async (req, res, code, data) => {
    await Mensajes(code).then(res => { mensajes = res });
    Log.info(req, mensajes.mensaje);
    return res.json({
        type: mensajes.tipo,
        code: mensajes.codigo,
        message: mensajes.mensaje,
        data: data
    });
}

const catchError = async (req, res, error) => {
    await Mensajes('1100').then(res => { mensajes = res });
    Log.error(req, error.message)
    return res.send({
        type: mensajes.tipo,
        code: mensajes.codigo,
        message: mensajes.mensaje,
        reference: req.id
    });
}

const CrearUsuario = async (req, res) => {

    var t = await database.transaction();
    try {
        await findUsuario(req.body.usuario).then(res => { usuario = res });
        if(!usuario){
            await Users.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                usuario: req.body.usuario,
                email: req.body.email,
                password: await bcrypt.hash(req.body.password, salt)
            }, { transaction: t })
            await t.commit();
            await info(req, res, '1000');
            return
        }
        await info(req, res, '1001');
        await t.rollback();
    } catch (error) {
        await t.rollback();
        await catchError(req, res, error);
    }
}

const EditarUsuario = async (req, res) => {

    var t = await database.transaction();
    try {
        await findUsuario(req.body.usuario).then(res => { usuario = res });
        if(usuario){
            await usuario.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                activo: req.body.activo
            }, { transaction: t })
            await t.commit();
            await info(req, res, '1000');
            return
        }
        await info(req, res, '1004');
        await t.rollback();
    } catch (error) {
        await t.rollback();
        await catchError(req, res, error);
    }
}

const LoginUsuario = async (req, res) => {

    try {
        if(req.body.usuario && req.body.password){
            await findUsuario(req.body.usuario).then(res => { usuario = res });
            if(usuario && usuario.activo){
                if(await bcrypt.compare(req.body.password, usuario.password)){
                    const token =  await jwt.sign({usuario}, jwtKey.JWT_KEY);
                    await Mensajes('1000').then(res => { mensajes = res });
                    Log.info(req, mensajes.mensaje);
                    return res.json({
                        type: mensajes.tipo,
                        code: mensajes.codigo,
                        message: mensajes.mensaje,
                        data: usuario,
                        token
                    });
                }
            }
        }
        await info(req, res, '1002');
    } catch (error) {
        await t.rollback();
        await catchError(req, res, error);
    }
}


const AllUsuarios = async (req, res) => {

    try {
        const data = await Users.findAll({
            attributes: ['id', 'nombre', 'apellido','usuario','email','activo']
        })
        await info(req, res, '1000', data);
    } catch (error) {
        await catchError(req, res, error);
    }
}

function findUsuario (usuario) {
    return Users.findOne({
        where: {
            usuario: usuario
        }
    })
}

const infoApi = async (req, res) => {
    try {
        if (req.body.code) {
            const response = await Message.findOne({
                where: {
                    codigo: req.body.code
                },
                attributes: [['tipo', 'type'], ['codigo', 'code'], ['mensaje', 'message']]
            });
            await info(req, res, '1000', response);
            return
        }

        const response = await Message.findAll({
            order: [
                ['codigo', 'ASC'],
            ],
            attributes: [['tipo','type'],['codigo','code'],['mensaje','message']]
        });
        await info(req, res, '1000', response);
    } catch (error) {
        await catchError(req, res, error);
    }
}

module.exports = {
    CrearUsuario,
    EditarUsuario,
    AllUsuarios,
    LoginUsuario,
    infoApi,
}