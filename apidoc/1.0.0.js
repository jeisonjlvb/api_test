 /**
 * @api {post} /info Códigos y mensajes de respuestas
 * @apiVersion v1.0.0
 * @apiGroup 1. Información
 * @apiParam {String} code Código del mensaje que retorna el API
 * @apiSuccess  {String} type Tipo de mensaje que retorna el API
 * @apiSuccess  {String} code Código del mensaje que retorna el API
 * @apiSuccess  {String} message Mensaje que retorna el API
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
 * El codigo de entrada es opcional, si desea ver todas las respuestas existentes se debe enviar la peticion vacia.

    {
        "code": "1000"
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "data": [
            {
                "type": "success",
                "code": "1000",
                "message": "La operación fue realizada exitosamente."
            },
            {
                "type": "info",
                "code": "1001",
                "message": "La planilla solicitada ya ha sido pagada."
            },
            {
                "type": "info",
                "code": "1002",
                "message": "La planilla solicitada no existe."
            },
            {
                "type": "error",
                "code": "1100",
                "message": "Ha ocurrido un error inesperado."
            }
        ]
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */


 /**
 * @api {post} /user/create Creación de Usuario
 * @apiVersion v1.0.0
 * @apiGroup 2. Usuarios
 * @apiParam {String} nombre Nombre del Usuario
 * @apiParam {String} apellido Apellido del Usuario
 * @apiParam {String} usuario Nombre de Usuario para ingresar al sistema
 * @apiParam {String} email Email del Usuario
 * @apiParam {String} password Contraseña del Usuario
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
    {
        "nombre":"Jeison",
        "apellido":"Villalobos",
        "usuario":"jvillalobos",
        "email":"jeisonjlvb@gmail.com",
        "password":"123456"
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente."
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1001,
        "message": "El usuario ingresado ya se encuentra en uso."
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */

 /**
 * @api {post} /user/login Login de Usuario
 * @apiVersion v1.0.0
 * @apiGroup 2. Usuarios
 * @apiParam {String} usuario Nombre de Usuario para ingresar al sistema
 * @apiParam {String} password Contraseña del Usuario
 * @apiSuccess {String} nombre Nombre del Usuario
 * @apiSuccess {String} apellido Apellido del Usuario
 * @apiSuccess {String} usuario Nombre de Usuario para ingresar al sistema
 * @apiSuccess {String} email Email del Usuario
 * @apiSuccess {String} password Contraseña del Usuario
 * @apiSuccess {String} token Token valido para el usuario logeado
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
    {
        "usuario": "jvillalobos",
        "password": "123456"
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente.",
        "data": {
            "id": "1",
            "nombre": "Jeison",
            "apellido": "Villalobos",
            "usuario": "jvillalobos",
            "email": "jeisonjlvb@gmail.com",
            "password": "$2a$10$mPEjGAjkF7LsAUAMrxe1TueelaTJkq2PieLtMGjM31jSAOSL0j1/2",
            "activo": true
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsIm5vbWJyZSI6IkplaXNvbiIsImFwZWxsaWRvIjoiVmlsbGFsb2JvcyIsInVzdWFyaW8iOiJqdmlsbGFsb2JvcyIsImVtYWlsIjoiamVpc29uamx2YkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRtUEVqR0Fqa0Y3THNBVUFNcnhlMVR1ZWVsYVRKa3EyUGllTHRNR2pNMzFqU0FPU0wwajEvMiIsImFjdGl2byI6dHJ1ZX0sImlhdCI6MTYyOTA4NzU4M30.sZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1002,
        "message": "Usuario o contraseña incorrecta."
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */


 /**
 * @api {get} /user/index Usuarios del sistema
 * @apiVersion v1.0.0
 * @apiGroup 2. Usuarios
 * @apiSuccess {Integer} id Itendificador del Usuario
 * @apiSuccess {String} nombre Nombre del Usuario
 * @apiSuccess {String} apellido Apellido del Usuario
 * @apiSuccess {String} usuario Nombre de Usuario para ingresar al sistema
 * @apiSuccess {String} email Email del Usuario
 * @apiSuccess {Boolean} activo Indica si el Usuario esta activo o inactivo
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente.",
        "data": [
            {
                "id": "1",
                "nombre": "Jeison",
                "apellido": "Villalobos",
                "usuario": "jvillalobos",
                "email": "jeisonjlvb@gmail.com",
                "activo": true
            }
        ]
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */

 /**
 * @api {post} /user/update Editar Usuario
 * @apiVersion v1.0.0
 * @apiGroup 2. Usuarios
 * @apiParam {String} nombre Nombre del Usuario
 * @apiParam {String} apellido Apellido del Usuario
 * @apiParam {String} usuario Nombre de Usuario para ingresar al sistema (Campo clave)
 * @apiParam {String} email Email del Usuario
 * @apiParam {Boolean} activo Indica si el Usuario esta activo o inactivo
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
    {
        "nombre":"Jeison",
        "apellido":"Villalobos",
        "usuario":"jvillalobos",
        "email":"jeisonjlvb@gmail.com",
        "password":"123456"
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente."
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1004,
        "message": "La información solicitada no existe."
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */

 /**
 * @api {get} /producto/index Productos Existentes
 * @apiVersion v1.0.0
 * @apiGroup 4. Productos
 * @apiSuccess {String} id Identificador del Producto
 * @apiSuccess {String} codigo Código del Producto
 * @apiSuccess {String} descripcion Descripción del Producto
 * @apiSuccess {Boolean} activo Indica si el Usuario esta activo o inactivo
 * @apiSuccess {Array} detalle_productos Array de Detalles del Producto
 * @apiSuccess {Integer} detalle_productos.detalle_producto_id Identificador del Detalle del Producto
 * @apiSuccess {String} detalle_productos.descripcion Descripción del Detalle del Producto
 * @apiSuccess {Integer} detalle_productos.stock Stock del Producto
 * @apiSuccess {Number} detalle_productos.precio Precio del Producto
 * @apiSuccess {Boolean} detalle_productos.activo Indica si el Detalle del Producto esta activo o inactivo
 * @apiSuccess {Array} productos_categorias Array de Categorias del Producto
 * @apiSuccess {Integer} productos_categorias.categoria_id Identificador de la Categoria
 * @apiSuccess {String} productos_categorias.categoria.descripcion Descripcion de la Categorias
 * @apiSuccess {Boolean} productos_categorias.categoria.true Indica si la Categoria esta activo o inactivo
 * 
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente.",
        "data": [
            {
                "id": "12",
                "codigo": "002",
                "descripcion": "Huawei x1 pro",
                "activo": true,
                "detalle_productos": [
                    {
                        "detalle_producto_id": "1",
                        "descripcion": "Color blanco, 250gb de memoria interna",
                        "stock": 10,
                        "precio": "300.23",
                        "activo": true
                    }
                ],
                "productos_categorias": [
                    {
                        "categoria_id": "1",
                        "categoria": {
                            "descripcion": "Electrónica",
                            "activo": true
                        }
                    }
                ]
            }
        ]
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */

 /**
 * @api {post} /producto/create Crear Productos
 * @apiVersion v1.0.0
 * @apiGroup 4. Productos
 * @apiParam {String} codigo Código del Producto
 * @apiParam {String} descripcion Descripción del Producto
 * @apiParam {Array} categoria Array para la asignación de Categorias
 * @apiParam {Integer} categoria.categoria_id Identificador de Categorias a asignar
 * @apiParam {Array} detalle_producto Array para la asignación de Detalle Productos
 * @apiParam {String} detalle_producto.descripcion Descripción del Detalle Producto
 * @apiParam {Integer} detalle_producto.stock Stock del Producto
 * @apiParam {Number} detalle_producto.precio Precio del Producto
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
    {
        "codigo": "001",
        "descripcion": "Huawei x1 pro",
        "categoria":[
            {"categoria_id":1}
        ],
        "detalle_producto":[
            {
                "descripcion": "Color azul, 160gb de memoria interna",
                "stock": 10,
                "precio":250
            }
        ]
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente."
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1005,
        "message": "La información ingresada ya esta en uso."
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */

 /**
 * @api {post} /producto/edit Editar Productos
 * @apiVersion v1.0.0
 * @apiGroup 4. Productos
 * @apiParam {String} codigo Código del Producto
 * @apiParam {String} descripcion Descripción del Producto
 * @apiParam {Array} categoria Array para la asignación de Categorias
 * @apiParam {Integer} categoria.categoria_id Identificador de Categorias a asignar
 * @apiParam {Array} detalle_producto Array para la asignación de Detalle Productos
 * @apiParam {String} detalle_producto.descripcion Descripción del Detalle Producto
 * @apiParam {Integer} detalle_producto.stock Stock del Producto
 * @apiParam {Number} detalle_producto.precio Precio del Producto
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
    {
        "codigo": "001",
        "descripcion": "Huawei x1 pro",
        "categoria":[
            {"categoria_id":1}
        ],
        "detalle_producto":[
            {
                "descripcion": "Color azul, 160gb de memoria interna",
                "stock": 10,
                "precio":250
            }
        ]
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente."
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1004,
        "message": "La información solicitada no existe."
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */

    
 /**
 * @api {post} /producto/categoria/create Crear Categorias
 * @apiVersion v1.0.0
 * @apiGroup 3. Categorias
 * @apiParam {String} descripcion Descripción de la Categoria
 * @apiParam {Boolean} activo Indica si la Categoria esta activo o inactivo
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
    {
        "descripcion": "Electrónica"
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente."
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1005,
        "message": "La información solicitada no existe."
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */

 /**
 * @api {post} /producto/categoria/edit Editar Categorias
 * @apiVersion v1.0.0
 * @apiGroup 3. Categorias
 * @apiParam {Integer} categoria_id Identificador de la Categoria
 * @apiParam {String} descripcion Descripción de la Categoria
 * @apiParam {Boolean} activo Indica si la Categoria esta activo o inactivo
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
    {
        "categoria_id": 4,
        "descripcion": "Electrónica",
        "activo": true
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente."
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1004,
        "message": "La información solicitada no existe."
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */

 /**
 * @api {post} /factura/usuario/create Agregar Producto a Facturar
 * @apiVersion v1.0.0
 * @apiGroup 5. Facturación
 * @apiParam {String} codigo Código del Producto
 * @apiParam {Integer} detalle_producto_id Identificador del Detalle de Producto
 * @apiParam {Integer} cantidad Cantidad de productos a comprar
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
    {
        "codigo": "001",
        "detalle_producto_id": "12",
        "cantidad": 1
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente."
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1004,
        "message": "La información solicitada no existe."
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */

 /**
 * @api {get} /factura/usuario Ver factura a pagar
 * @apiVersion v1.0.0
 * @apiGroup 5. Facturación
 * @apiSuccess {Integer} factura_id Identificador de Factura
 * @apiSuccess {Integer} user_id Identificador de Usuario
 * @apiSuccess {String} cod_factura Código de Factura
 * @apiSuccess {Number} monto Monto total de la Factura
 * @apiSuccess {Array} productos Array de Productos a Pagar
 * @apiSuccess {String} productos.producto Nombre del Producto a Pagar
 * @apiSuccess {Integer} productos.detalle_producto_id Identificador de Detalle Producto
 * @apiSuccess {String} productos.detalle_producto Descripción de Detalle Producto
 * @apiSuccess {Integer} productos.stock Stock actual del Producto
 * @apiSuccess {Integer} productos.cantidad Cantidad de Productos a comprar
 * @apiSuccess {Number} productos.precio Precio unitario del Producto a comprar
 * @apiSuccess {Number} productos.cantidad_precio (Subtotal) Monto unitario multiplicado por la cantidad de producto a comprar
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente.",
        "data": {
            "factura_id": "1",
            "user_id": "1",
            "cod_factura": "1",
            "monto": "1500.00",
            "productos": [
                {
                    "producto": "Huawei x1",
                    "detalle_producto_id": "1",
                    "detalle_producto": "Color gris, 250gb de memoria interna",
                    "stock": 10,
                    "cantidad": 5,
                    "precio": "300.0",
                    "cantidad_precio": "1500.00"
                }
            ]
        }
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1006,
        "message": "No posee facturas pendientes por pagar."
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */

 /**
 * @api {post} /factura/pagar Pagar Factura
 * @apiVersion v1.0.0
 * @apiGroup 5. Facturación
 * @apiParam {String} cod_factura Código de Factura
 * @apiParam {Integer} tipo_pago_id Identificador del tipo de pago [2. Pago en Tienda, 3.Servicio Pick-Up, 4. Servicio Delivery]
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
    {
        "cod_factura": "1",
        "tipo_pago_id": "2"
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente."
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1007,
        "message": "La factura solicitada ya fue procesada."
    }

    {
        "type": "info",
        "code": 1008,
        "message": "No existe stock suficiente para procesar la compra."
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */

 /**
 * @api {post} /factura/reporte Reporte de Compras
 * @apiVersion v1.0.0
 * @apiGroup 5. Facturación
 * @apiParam {Date} fecha_pago Fecha de Pago
 * @apiSuccess {Date} fecha_pago Fecha de Pago
 * @apiSuccess {Number} monto_total Monto total del reporte diario
 * @apiSuccess {Array} facturas Monto total del reporte diario
 * @apiSuccess {String} facturas.cod_factura Código de Factura
 * @apiSuccess {String} facturas.pago Indica si la factura ya fue pagada
 * @apiSuccess {Date} facturas.fecha_pago Indica la fecha de pago de la factura
 * @apiSuccess {Number} facturas.monto Monto de la factura
 * @apiSuccess {Integer} facturas.tipo_pago_id Identificador del tipo de pago
 * @apiSuccess {String} facturas.tipo_pago Descripción del tipo de pago
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
    {
        "fecha_pago": "2021-08-16"
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente.",
        "data": {
            "fecha_pago": "2021-08-16",
            "monto_total": 1500.00,
            "facturas": [
                {
                    "cod_factura": "1",
                    "pago": true,
                    "fecha_pago": "2021-08-16",
                    "monto": "1500.00",
                    "tipo_pago_id": 4,
                    "tipo_pago": "Servicio Delivery"
                }
            ]
        }
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1007,
        "message": "La factura solicitada ya fue procesada."
    }

    {
        "type": "info",
        "code": 1008,
        "message": "No existe stock suficiente para procesar la compra."
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */