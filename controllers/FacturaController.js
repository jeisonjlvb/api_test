var Log = require('../config/log');
var Users = require('../models/Users');
var Message = require('../models/MensajeRespuesta');
var Productos = require('../models/Productos');
var Facturas = require('../models/Facturas');
var Categorias = require('../models/Categorias');
var ProductosCategorias = require('../models/ProductosCategorias');
var DetallesProductos = require('../models/DetallesProductos');
var DetallesFacturas = require('../models/DetallesFacturas');
var VFacturaProducto = require('../models/VFacturaProducto');
var VFacturaMontoTotal = require('../models/VFacturaMontoTotal');
var { Model, database } = require('../config/bd_config');
const jwt = require('jsonwebtoken')
const jwtKey = require('../config/config')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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

const facturacionProducto = async (req, res) => {
    var t = await database.transaction();
    try {
        await findProducto(req.body.codigo).then(res => { producto = res });
        if(producto){
            var detalleProducto = await DetallesProductos.findOne({
                where:{
                    id: req.body.detalle_producto_id,
                    producto_id: producto.id
                }
            })
            if(detalleProducto){
                var userLogin = await UsuarioLogeado(req.headers.token);
                await findNuevaFactura(userLogin.id).then(res => { factura = res });
                if (!factura) {
                    var codFactura = await findCodFactura();
                    var factura = await Facturas.create({
                        cod_factura:codFactura,
                        user_id: userLogin.id,
                    }, { transaction: t })
                }

                await DetallesFacturas.create({
                    factura_id: factura.id,
                    detalle_producto_id: detalleProducto.id,
                    cantidad: req.body.cantidad,
                }, { transaction: t })

                await t.commit();
                await info(req, res, '1000');
                return
            }
        }
        await info(req, res, '1004');
        await t.rollback();
    } catch (error) {
        await t.rollback();
        await catchError(req, res, error);
    }
}

const facturaUser = async (req, res) => {
    
    try {
        const data = {}
        var userLogin = await UsuarioLogeado(req.headers.token);
        await findNuevaFactura(userLogin.id).then(res => { factura = res });
        if(factura){
            var montoTotal = await VFacturaMontoTotal.findOne({
                where:{factura_id:factura.id},
                attributes:['monto']
            })
            data.factura_id = factura.id,
            data.user_id = userLogin.id,
            data.cod_factura = factura.cod_factura,
            data.monto = montoTotal.monto,
            data.productos = await findFacturaProducto(factura.id)
            await info(req, res, '1000',data);
            return
        }
        await info(req, res, '1006');
    } catch (error) {
        await catchError(req, res, error);
    }
}

const pagarFactura = async (req, res) => {

    var t = await database.transaction();
    try {
        //var userLogin = await UsuarioLogeado(req.headers.token);
        var factura = await Facturas.findOne({
            where: {
                cod_factura: req.body.cod_factura,
                pago: false,
                activo:true
            },
        })
        if(factura){
            var productos = await findFacturaProducto(factura.id);
            if(productos){
                for (const element of productos) {
                    var nuevoStock = element.stock - element.cantidad;
                    if (nuevoStock < 0) {
                        await t.rollback();
                        await info(req, res, '1008');
                        return
                    }
                    await DetallesProductos.update(
                        {stock: nuevoStock},
                        {where:{id: element.detalle_producto_id}},
                        { transaction: t })
                }
                await factura.update({
                    pago:true,
                    tipo_pago_id:req.body.tipo_pago_id,
                    fecha_pago: new Date()
                }, { transaction: t })
                await t.commit();
                await info(req, res, '1000');
                return
            }
        }
        await info(req, res, '1007');
        await t.rollback();
    } catch (error) {
        await t.rollback();
        await catchError(req, res, error);
    }
}

const reporteFactura = async (req, res) => {
    
    try {
        var data = {}
        data.fecha_pago= req.body.fecha_pago;
        data.monto_total = Number(0);
        const facturas = await Facturas.findAll({
            where:{
                fecha_pago: req.body.fecha_pago,
                tipo_pago_id: {[Op.ne]: 1}
            }
        })
        if (facturas) {
            var array = [];
            for (const element of facturas) {
                var factura = await findFacturaMontoTotal(element.id);
                var monto_total = Number(factura.monto);
                data.monto_total = data.monto_total + monto_total
                array.push(factura);
            }
            data.facturas = array;
        }
        await info(req, res, '1000',data);
        
    } catch (error) {
        await catchError(req, res, error);
    }
}


function findProducto (codigo) {
    return Productos.findOne({
        where: {
            codigo: codigo
        }
    })
}
function UsuarioLogeado(token){
     var usuario = jwt.verify(token, jwtKey.JWT_KEY);
     return usuario.usuario
}

function findFacturaProducto(factura_id){
    return VFacturaProducto.findAll({
        where:{factura_id:factura_id},
        attributes:['producto','detalle_producto_id','detalle_producto','stock','cantidad','precio','cantidad_precio']
    })
}

function findFacturaMontoTotal(factura_id){
    return VFacturaMontoTotal.findOne({
        where:{factura_id:factura_id},
        attributes:['cod_factura','pago','fecha_pago','monto','tipo_pago_id','tipo_pago']
    })
}

function findNuevaFactura (user_id) {
    return Facturas.findOne({
        where: {
            user_id: user_id,
            pago: false,
            activo:true
        },
        attributes:['id','user_id','cod_factura','pago']
    })
}

const findCodFactura = async () => {

    var factura = await Facturas.findOne({
        order: [
            ['cod_factura', 'DESC']
        ]
    });

    if (!factura) {
        return 1
    }else{
        return ++factura.cod_factura
    }
}


module.exports = {
    facturacionProducto,
    facturaUser,
    pagarFactura,
    reporteFactura
}