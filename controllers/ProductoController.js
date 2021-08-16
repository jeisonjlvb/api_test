var Log = require('../config/log');
var Message = require('../models/MensajeRespuesta');
var Productos = require('../models/Productos');
var Categorias = require('../models/Categorias');
var ProductosCategorias = require('../models/ProductosCategorias');
var DetallesProductos = require('../models/DetallesProductos');
var { Model, database } = require('../config/bd_config');

Productos.hasMany(ProductosCategorias);
ProductosCategorias.belongsTo(Productos);
Productos.hasMany(DetallesProductos);
DetallesProductos.belongsTo(Productos);
Categorias.hasMany(ProductosCategorias);
ProductosCategorias.belongsTo(Categorias);

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

const CrearProducto = async (req, res) => {

    var t = await database.transaction();
    try {
        await findProducto(req.body.codigo).then(res => { producto = res });
        if(!producto){
            var saveProducto = await Productos.create({
                codigo: req.body.codigo,
                descripcion: req.body.descripcion,
            }, { transaction: t })

            for (const element of req.body.categoria) {
                await findCategoriaById(element.categoria_id).then(res => { verify = res });
                if (verify) {
                    await ProductosCategorias.create({
                        producto_id: saveProducto.id,
                        categoria_id: element.categoria_id,
                    }, { transaction: t })
                }
            }
            for (const element of req.body.detalle_producto) {
                await DetallesProductos.create({
                    producto_id: saveProducto.id,
                    descripcion: element.descripcion,
                    stock: element.stock,
                    precio: element.precio,
                }, { transaction: t })
            }
            await t.commit();
            await info(req, res, '1000');
            return
        }
        await info(req, res, '1005');
        await t.rollback();
    } catch (error) {
        await t.rollback();
        await catchError(req, res, error);
    }
}

const CrearCategoria = async (req, res) => {

    var t = await database.transaction();
    try {
        await findCategoria(req.body.descripcion).then(res => { categoria = res });
        if(!categoria){
            await Categorias.create({
                descripcion: req.body.descripcion,
            }, { transaction: t })
            
            await info(req, res, '1000');
            await t.commit();
            return
        }
        await info(req, res, '1005');
        await t.rollback();
    } catch (error) {
        await t.rollback();
        await catchError(req, res, error);
    }
}

const EditarCategoria = async (req, res) => {

    var t = await database.transaction();
    try {
        await findCategoriaById(req.body.categoria_id).then(res => { categoria = res });
        if(categoria){
            await categoria.update({
                descripcion: req.body.descripcion,
                activo: req.body.activo,
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

const EditarProducto = async (req, res) => {

    var t = await database.transaction();
    try {
        await findProducto(req.body.codigo).then(res => { producto = res });
        if(producto){
            producto.update({
                codigo: req.body.codigo,
                descripcion: req.body.descripcion,
            }, { transaction: t })
            await ProductosCategorias.destroy({where:
                {producto_id:producto.id},
                transaction: t
            });
            await DetallesProductos.destroy({where:
                {producto_id:producto.id},
                transaction: t
            });
            for (const eCategoria of req.body.categorias) {
                await findCategoriaById(eCategoria.categoria_id).then(res => { verify = res });
                if (verify) {
                    await ProductosCategorias.create({
                        producto_id: producto.id,
                        categoria_id: eCategoria.categoria_id,
                    }, { transaction: t })
                }
            }
            for (const eDetalle of req.body.detalle_producto) {
                await DetallesProductos.create({
                    producto_id: producto.id,
                    descripcion: eDetalle.descripcion,
                    stock: eDetalle.stock,
                    precio: eDetalle.precio,
                }, { transaction: t })
            }
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


const AllProducto = async (req, res) => {

    try {
        const data = await Productos.findAll({
            include: [
                {
                    model: DetallesProductos,
                    where: { activo: true },
                    attributes:[['id', 'detalle_producto_id'],'descripcion','stock','precio','activo']
                },
                {
                model: ProductosCategorias,
                attributes:['categoria_id'],
                include: {
                    model: Categorias,
                    where: { activo: true },
                    attributes:['descripcion','activo']
                    }
                }
            ]
        });

        await info(req, res, '1000', data);
    } catch (error) {
        await catchError(req, res, error);
    }
}

function findProductoById (id) {
    return Productos.findOne({
        where: {
            id: id
        }
    })
}

function findProducto (codigo) {
    return Productos.findOne({
        where: {
            codigo: codigo
        }
    })
}

function findCategoriaById (id) {
    return Categorias.findOne({
        where: {
            id: id
        }
    })
}

function findCategoria (categoria) {
    return Categorias.findOne({
        where: {
            descripcion: categoria
        }
    })
}

module.exports = {
    CrearProducto,
    EditarProducto,
    CrearCategoria,
    EditarCategoria,
    AllProducto,
}