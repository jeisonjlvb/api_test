define({ "api": [
  {
    "type": "post",
    "url": "/info",
    "title": "Códigos y mensajes de respuestas",
    "version": "v1.0.0",
    "group": "1._Información",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del mensaje que retorna el API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametros de Entrada",
          "content": "El codigo de entrada es opcional, si desea ver todas las respuestas existentes se debe enviar la peticion vacia.\n\n    {\n        \"code\": \"1000\"\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo de mensaje que retorna el API</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Código del mensaje que retorna el API</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje que retorna el API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"data\": [\n            {\n                \"type\": \"success\",\n                \"code\": \"1000\",\n                \"message\": \"La operación fue realizada exitosamente.\"\n            },\n            {\n                \"type\": \"info\",\n                \"code\": \"1001\",\n                \"message\": \"La planilla solicitada ya ha sido pagada.\"\n            },\n            {\n                \"type\": \"info\",\n                \"code\": \"1002\",\n                \"message\": \"La planilla solicitada no existe.\"\n            },\n            {\n                \"type\": \"error\",\n                \"code\": \"1100\",\n                \"message\": \"Ha ocurrido un error inesperado.\"\n            }\n        ]\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"reference\": \"{Identificador de Error}\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/1.0.0.js",
    "groupTitle": "1._Información",
    "name": "PostInfo"
  },
  {
    "type": "get",
    "url": "/user/index",
    "title": "Usuarios del sistema",
    "version": "v1.0.0",
    "group": "2._Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Itendificador del Usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del Usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellido",
            "description": "<p>Apellido del Usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Nombre de Usuario para ingresar al sistema</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email del Usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "activo",
            "description": "<p>Indica si el Usuario esta activo o inactivo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"message\": \"La operación fué realizada exitosamente.\",\n        \"data\": [\n            {\n                \"id\": \"1\",\n                \"nombre\": \"Jeison\",\n                \"apellido\": \"Villalobos\",\n                \"usuario\": \"jvillalobos\",\n                \"email\": \"jeisonjlvb@gmail.com\",\n                \"activo\": true\n            }\n        ]\n    }",
          "type": "json"
        },
        {
          "title": "Token Invalido",
          "content": "HTTP/1.1 403 OK\n    { \n        \"message\": \"Token invalido\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"reference\": \"{Identificador de Error}\"\n    }",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticación del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de envio de token por Header",
          "content": "\"headers\": {\n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/1.0.0.js",
    "groupTitle": "2._Usuarios",
    "name": "GetUserIndex"
  },
  {
    "type": "post",
    "url": "/user/create",
    "title": "Creación de Usuario",
    "version": "v1.0.0",
    "group": "2._Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del Usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellido",
            "description": "<p>Apellido del Usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Nombre de Usuario para ingresar al sistema</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email del Usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña del Usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametros de Entrada",
          "content": "{\n    \"nombre\":\"Jeison\",\n    \"apellido\":\"Villalobos\",\n    \"usuario\":\"jvillalobos\",\n    \"email\":\"jeisonjlvb@gmail.com\",\n    \"password\":\"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"message\": \"La operación fué realizada exitosamente.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Info",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1001,\n        \"message\": \"El usuario ingresado ya se encuentra en uso.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"reference\": \"{Identificador de Error}\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/1.0.0.js",
    "groupTitle": "2._Usuarios",
    "name": "PostUserCreate"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login de Usuario",
    "version": "v1.0.0",
    "group": "2._Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Nombre de Usuario para ingresar al sistema</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña del Usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametros de Entrada",
          "content": "{\n    \"usuario\": \"jvillalobos\",\n    \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del Usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellido",
            "description": "<p>Apellido del Usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Nombre de Usuario para ingresar al sistema</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email del Usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña del Usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token valido para el usuario logeado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"message\": \"La operación fué realizada exitosamente.\",\n        \"data\": {\n            \"id\": \"1\",\n            \"nombre\": \"Jeison\",\n            \"apellido\": \"Villalobos\",\n            \"usuario\": \"jvillalobos\",\n            \"email\": \"jeisonjlvb@gmail.com\",\n            \"password\": \"$2a$10$mPEjGAjkF7LsAUAMrxe1TueelaTJkq2PieLtMGjM31jSAOSL0j1/2\",\n            \"activo\": true\n        },\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsIm5vbWJyZSI6IkplaXNvbiIsImFwZWxsaWRvIjoiVmlsbGFsb2JvcyIsInVzdWFyaW8iOiJqdmlsbGFsb2JvcyIsImVtYWlsIjoiamVpc29uamx2YkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRtUEVqR0Fqa0Y3THNBVUFNcnhlMVR1ZWVsYVRKa3EyUGllTHRNR2pNMzFqU0FPU0wwajEvMiIsImFjdGl2byI6dHJ1ZX0sImlhdCI6MTYyOTA4NzU4M30.sZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Info",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1002,\n        \"message\": \"Usuario o contraseña incorrecta.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"reference\": \"{Identificador de Error}\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/1.0.0.js",
    "groupTitle": "2._Usuarios",
    "name": "PostUserLogin"
  },
  {
    "type": "post",
    "url": "/user/update",
    "title": "Editar Usuario",
    "version": "v1.0.0",
    "group": "2._Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del Usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellido",
            "description": "<p>Apellido del Usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Nombre de Usuario para ingresar al sistema (Campo clave)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email del Usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "activo",
            "description": "<p>Indica si el Usuario esta activo o inactivo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametros de Entrada",
          "content": "{\n    \"nombre\":\"Jeison\",\n    \"apellido\":\"Villalobos\",\n    \"usuario\":\"jvillalobos\",\n    \"email\":\"jeisonjlvb@gmail.com\",\n    \"password\":\"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticación del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de envio de token por Header",
          "content": "\"headers\": {\n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"message\": \"La operación fué realizada exitosamente.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Info",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1004,\n        \"message\": \"La información solicitada no existe.\"\n    }",
          "type": "json"
        },
        {
          "title": "Token Invalido",
          "content": "HTTP/1.1 403 OK\n    { \n        \"message\": \"Token invalido\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"reference\": \"{Identificador de Error}\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/1.0.0.js",
    "groupTitle": "2._Usuarios",
    "name": "PostUserUpdate"
  },
  {
    "type": "post",
    "url": "/producto/categoria/create",
    "title": "Crear Categorias",
    "version": "v1.0.0",
    "group": "3._Categorias",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripción de la Categoria</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "activo",
            "description": "<p>Indica si la Categoria esta activo o inactivo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametros de Entrada",
          "content": "{\n    \"descripcion\": \"Electrónica\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticación del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de envio de token por Header",
          "content": "\"headers\": {\n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"message\": \"La operación fué realizada exitosamente.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Info",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1005,\n        \"message\": \"La información solicitada no existe.\"\n    }",
          "type": "json"
        },
        {
          "title": "Token Invalido",
          "content": "HTTP/1.1 403 OK\n    { \n        \"message\": \"Token invalido\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"reference\": \"{Identificador de Error}\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/1.0.0.js",
    "groupTitle": "3._Categorias",
    "name": "PostProductoCategoriaCreate"
  },
  {
    "type": "post",
    "url": "/producto/categoria/edit",
    "title": "Editar Categorias",
    "version": "v1.0.0",
    "group": "3._Categorias",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "categoria_id",
            "description": "<p>Identificador de la Categoria</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripción de la Categoria</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "activo",
            "description": "<p>Indica si la Categoria esta activo o inactivo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametros de Entrada",
          "content": "{\n    \"categoria_id\": 4,\n    \"descripcion\": \"Electrónica\",\n    \"activo\": true\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticación del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de envio de token por Header",
          "content": "\"headers\": {\n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"message\": \"La operación fué realizada exitosamente.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Info",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1004,\n        \"message\": \"La información solicitada no existe.\"\n    }",
          "type": "json"
        },
        {
          "title": "Token Invalido",
          "content": "HTTP/1.1 403 OK\n    { \n        \"message\": \"Token invalido\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"reference\": \"{Identificador de Error}\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/1.0.0.js",
    "groupTitle": "3._Categorias",
    "name": "PostProductoCategoriaEdit"
  },
  {
    "type": "get",
    "url": "/producto/index",
    "title": "Productos Existentes",
    "version": "v1.0.0",
    "group": "4._Productos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador del Producto</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "codigo",
            "description": "<p>Código del Producto</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripción del Producto</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "activo",
            "description": "<p>Indica si el Usuario esta activo o inactivo</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "detalle_productos",
            "description": "<p>Array de Detalles del Producto</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "detalle_productos.detalle_producto_id",
            "description": "<p>Identificador del Detalle del Producto</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "detalle_productos.descripcion",
            "description": "<p>Descripción del Detalle del Producto</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "detalle_productos.stock",
            "description": "<p>Stock del Producto</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "detalle_productos.precio",
            "description": "<p>Precio del Producto</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "detalle_productos.activo",
            "description": "<p>Indica si el Detalle del Producto esta activo o inactivo</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "productos_categorias",
            "description": "<p>Array de Categorias del Producto</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "productos_categorias.categoria_id",
            "description": "<p>Identificador de la Categoria</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productos_categorias.categoria.descripcion",
            "description": "<p>Descripcion de la Categorias</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "productos_categorias.categoria.true",
            "description": "<p>Indica si la Categoria esta activo o inactivo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"message\": \"La operación fué realizada exitosamente.\",\n        \"data\": [\n            {\n                \"id\": \"12\",\n                \"codigo\": \"002\",\n                \"descripcion\": \"Huawei x1 pro\",\n                \"activo\": true,\n                \"detalle_productos\": [\n                    {\n                        \"detalle_producto_id\": \"1\",\n                        \"descripcion\": \"Color blanco, 250gb de memoria interna\",\n                        \"stock\": 10,\n                        \"precio\": \"300.23\",\n                        \"activo\": true\n                    }\n                ],\n                \"productos_categorias\": [\n                    {\n                        \"categoria_id\": \"1\",\n                        \"categoria\": {\n                            \"descripcion\": \"Electrónica\",\n                            \"activo\": true\n                        }\n                    }\n                ]\n            }\n        ]\n    }",
          "type": "json"
        },
        {
          "title": "Token Invalido",
          "content": "HTTP/1.1 403 OK\n    { \n        \"message\": \"Token invalido\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"reference\": \"{Identificador de Error}\"\n    }",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticación del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de envio de token por Header",
          "content": "\"headers\": {\n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/1.0.0.js",
    "groupTitle": "4._Productos",
    "name": "GetProductoIndex"
  },
  {
    "type": "post",
    "url": "/producto/create",
    "title": "Crear Productos",
    "version": "v1.0.0",
    "group": "4._Productos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "codigo",
            "description": "<p>Código del Producto</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripción del Producto</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "categoria",
            "description": "<p>Array para la asignación de Categorias</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "categoria.categoria_id",
            "description": "<p>Identificador de Categorias a asignar</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "detalle_producto",
            "description": "<p>Array para la asignación de Detalle Productos</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "detalle_producto.descripcion",
            "description": "<p>Descripción del Detalle Producto</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "detalle_producto.stock",
            "description": "<p>Stock del Producto</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "detalle_producto.precio",
            "description": "<p>Precio del Producto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametros de Entrada",
          "content": "{\n    \"codigo\": \"001\",\n    \"descripcion\": \"Huawei x1 pro\",\n    \"categoria\":[\n        {\"categoria_id\":1}\n    ],\n    \"detalle_producto\":[\n        {\n            \"descripcion\": \"Color azul, 160gb de memoria interna\",\n            \"stock\": 10,\n            \"precio\":250\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticación del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de envio de token por Header",
          "content": "\"headers\": {\n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"message\": \"La operación fué realizada exitosamente.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Info",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1005,\n        \"message\": \"La información ingresada ya esta en uso.\"\n    }",
          "type": "json"
        },
        {
          "title": "Token Invalido",
          "content": "HTTP/1.1 403 OK\n    { \n        \"message\": \"Token invalido\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"reference\": \"{Identificador de Error}\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/1.0.0.js",
    "groupTitle": "4._Productos",
    "name": "PostProductoCreate"
  },
  {
    "type": "post",
    "url": "/producto/edit",
    "title": "Editar Productos",
    "version": "v1.0.0",
    "group": "4._Productos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "codigo",
            "description": "<p>Código del Producto</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripción del Producto</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "categoria",
            "description": "<p>Array para la asignación de Categorias</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "categoria.categoria_id",
            "description": "<p>Identificador de Categorias a asignar</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "detalle_producto",
            "description": "<p>Array para la asignación de Detalle Productos</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "detalle_producto.descripcion",
            "description": "<p>Descripción del Detalle Producto</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "detalle_producto.stock",
            "description": "<p>Stock del Producto</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "detalle_producto.precio",
            "description": "<p>Precio del Producto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametros de Entrada",
          "content": "{\n    \"codigo\": \"001\",\n    \"descripcion\": \"Huawei x1 pro\",\n    \"categoria\":[\n        {\"categoria_id\":1}\n    ],\n    \"detalle_producto\":[\n        {\n            \"descripcion\": \"Color azul, 160gb de memoria interna\",\n            \"stock\": 10,\n            \"precio\":250\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticación del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de envio de token por Header",
          "content": "\"headers\": {\n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"message\": \"La operación fué realizada exitosamente.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Info",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1004,\n        \"message\": \"La información solicitada no existe.\"\n    }",
          "type": "json"
        },
        {
          "title": "Token Invalido",
          "content": "HTTP/1.1 403 OK\n    { \n        \"message\": \"Token invalido\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"reference\": \"{Identificador de Error}\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/1.0.0.js",
    "groupTitle": "4._Productos",
    "name": "PostProductoEdit"
  },
  {
    "type": "get",
    "url": "/factura/usuario",
    "title": "Ver factura a pagar",
    "version": "v1.0.0",
    "group": "5._Facturación",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "factura_id",
            "description": "<p>Identificador de Factura</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>Identificador de Usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cod_factura",
            "description": "<p>Código de Factura</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "monto",
            "description": "<p>Monto total de la Factura</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "productos",
            "description": "<p>Array de Productos a Pagar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productos.producto",
            "description": "<p>Nombre del Producto a Pagar</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "productos.detalle_producto_id",
            "description": "<p>Identificador de Detalle Producto</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productos.detalle_producto",
            "description": "<p>Descripción de Detalle Producto</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "productos.stock",
            "description": "<p>Stock actual del Producto</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "productos.cantidad",
            "description": "<p>Cantidad de Productos a comprar</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "productos.precio",
            "description": "<p>Precio unitario del Producto a comprar</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "productos.cantidad_precio",
            "description": "<p>(Subtotal) Monto unitario multiplicado por la cantidad de producto a comprar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"message\": \"La operación fué realizada exitosamente.\",\n        \"data\": {\n            \"factura_id\": \"1\",\n            \"user_id\": \"1\",\n            \"cod_factura\": \"1\",\n            \"monto\": \"1500.00\",\n            \"productos\": [\n                {\n                    \"producto\": \"Huawei x1\",\n                    \"detalle_producto_id\": \"1\",\n                    \"detalle_producto\": \"Color gris, 250gb de memoria interna\",\n                    \"stock\": 10,\n                    \"cantidad\": 5,\n                    \"precio\": \"300.0\",\n                    \"cantidad_precio\": \"1500.00\"\n                }\n            ]\n        }\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Info",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1006,\n        \"message\": \"No posee facturas pendientes por pagar.\"\n    }",
          "type": "json"
        },
        {
          "title": "Token Invalido",
          "content": "HTTP/1.1 403 OK\n    { \n        \"message\": \"Token invalido\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"reference\": \"{Identificador de Error}\"\n    }",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticación del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de envio de token por Header",
          "content": "\"headers\": {\n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/1.0.0.js",
    "groupTitle": "5._Facturación",
    "name": "GetFacturaUsuario"
  },
  {
    "type": "post",
    "url": "/factura/pagar",
    "title": "Pagar Factura",
    "version": "v1.0.0",
    "group": "5._Facturación",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cod_factura",
            "description": "<p>Código de Factura</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "tipo_pago_id",
            "description": "<p>Identificador del tipo de pago [2. Pago en Tienda, 3.Servicio Pick-Up, 4. Servicio Delivery]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametros de Entrada",
          "content": "{\n    \"cod_factura\": \"1\",\n    \"tipo_pago_id\": \"2\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticación del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de envio de token por Header",
          "content": "\"headers\": {\n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"message\": \"La operación fué realizada exitosamente.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Info",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1007,\n        \"message\": \"La factura solicitada ya fue procesada.\"\n    }\n\n    {\n        \"type\": \"info\",\n        \"code\": 1008,\n        \"message\": \"No existe stock suficiente para procesar la compra.\"\n    }",
          "type": "json"
        },
        {
          "title": "Token Invalido",
          "content": "HTTP/1.1 403 OK\n    { \n        \"message\": \"Token invalido\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"reference\": \"{Identificador de Error}\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/1.0.0.js",
    "groupTitle": "5._Facturación",
    "name": "PostFacturaPagar"
  },
  {
    "type": "post",
    "url": "/factura/reporte",
    "title": "Reporte de Compras",
    "version": "v1.0.0",
    "group": "5._Facturación",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fecha_pago",
            "description": "<p>Fecha de Pago</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametros de Entrada",
          "content": "{\n    \"fecha_pago\": \"2021-08-16\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fecha_pago",
            "description": "<p>Fecha de Pago</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "monto_total",
            "description": "<p>Monto total del reporte diario</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "facturas",
            "description": "<p>Monto total del reporte diario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "facturas.cod_factura",
            "description": "<p>Código de Factura</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "facturas.pago",
            "description": "<p>Indica si la factura ya fue pagada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "facturas.fecha_pago",
            "description": "<p>Indica la fecha de pago de la factura</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "facturas.monto",
            "description": "<p>Monto de la factura</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "facturas.tipo_pago_id",
            "description": "<p>Identificador del tipo de pago</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "facturas.tipo_pago",
            "description": "<p>Descripción del tipo de pago</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"message\": \"La operación fué realizada exitosamente.\",\n        \"data\": {\n            \"fecha_pago\": \"2021-08-16\",\n            \"monto_total\": 1500.00,\n            \"facturas\": [\n                {\n                    \"cod_factura\": \"1\",\n                    \"pago\": true,\n                    \"fecha_pago\": \"2021-08-16\",\n                    \"monto\": \"1500.00\",\n                    \"tipo_pago_id\": 4,\n                    \"tipo_pago\": \"Servicio Delivery\"\n                }\n            ]\n        }\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Info",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1007,\n        \"message\": \"La factura solicitada ya fue procesada.\"\n    }\n\n    {\n        \"type\": \"info\",\n        \"code\": 1008,\n        \"message\": \"No existe stock suficiente para procesar la compra.\"\n    }",
          "type": "json"
        },
        {
          "title": "Token Invalido",
          "content": "HTTP/1.1 403 OK\n    { \n        \"message\": \"Token invalido\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"reference\": \"{Identificador de Error}\"\n    }",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticación del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de envio de token por Header",
          "content": "\"headers\": {\n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/1.0.0.js",
    "groupTitle": "5._Facturación",
    "name": "PostFacturaReporte"
  },
  {
    "type": "post",
    "url": "/factura/usuario/create",
    "title": "Agregar Producto a Facturar",
    "version": "v1.0.0",
    "group": "5._Facturación",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "codigo",
            "description": "<p>Código del Producto</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "detalle_producto_id",
            "description": "<p>Identificador del Detalle de Producto</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "cantidad",
            "description": "<p>Cantidad de productos a comprar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametros de Entrada",
          "content": "{\n    \"codigo\": \"001\",\n    \"detalle_producto_id\": \"12\",\n    \"cantidad\": 1\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticación del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de envio de token por Header",
          "content": "\"headers\": {\n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"message\": \"La operación fué realizada exitosamente.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Info",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1004,\n        \"message\": \"La información solicitada no existe.\"\n    }",
          "type": "json"
        },
        {
          "title": "Token Invalido",
          "content": "HTTP/1.1 403 OK\n    { \n        \"message\": \"Token invalido\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"reference\": \"{Identificador de Error}\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/1.0.0.js",
    "groupTitle": "5._Facturación",
    "name": "PostFacturaUsuarioCreate"
  }
] });
