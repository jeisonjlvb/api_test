var app = require('express')();
var addRequestId = require('express-request-id')();

app.use(addRequestId);

const fileUpload = require('express-fileupload')
app.use(fileUpload())

const users = require('../controllers/UserController')
const producto = require('../controllers/ProductoController')
const factura = require('../controllers/FacturaController')
const AuthToken = require('../middleware/AuthToken')

app.get('/info', users.infoApi);
app.post('/user/create', users.CrearUsuario);
app.post('/user/login', users.LoginUsuario);
app.get('/user/index', AuthToken, users.AllUsuarios);
app.post('/user/edit', AuthToken, users.EditarUsuario);

app.get('/producto/index', AuthToken, producto.AllProducto);
app.post('/producto/create', AuthToken, producto.CrearProducto);
app.post('/producto/edit', AuthToken, producto.EditarProducto);
app.post('/producto/categoria/create', AuthToken, producto.CrearCategoria);
app.post('/producto/categoria/edit', AuthToken, producto.EditarCategoria);

app.post('/factura/usuario/create', AuthToken, factura.facturacionProducto);
app.get('/factura/usuario', AuthToken, factura.facturaUser);
app.post('/factura/pagar', AuthToken, factura.pagarFactura);
app.post('/factura/reporte', AuthToken, factura.reporteFactura);



app.get('/version', function(req, res) {
    res.json({
        version: '1.0.0'
    })
})

module.exports = app