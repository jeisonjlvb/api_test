define({ "api": [
  {
    "type": "post",
    "url": "/info",
    "title": "Códigos y mensajes de respuestas",
    "version": "v1.2.2-rc",
    "group": "Información",
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
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"error\": \"error.message\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc/1.0.0.js",
    "groupTitle": "Información",
    "name": "PostInfo"
  },
  {
    "type": "post",
    "url": "/buscarplanilla",
    "title": "Buscar Planilla",
    "version": "v1.2.2-rc",
    "group": "Planilla_Única_Bancaria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nro_planilla",
            "description": "<p>Número de Planilla de PUB</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametros de Entrada",
          "content": "{\n    \"nro_planilla\": \"15000001234\"\n}",
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
            "field": "nro_planilla",
            "description": "<p>Numero de Planilla de PUB</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "monto",
            "description": "<p>Monto total a cancelar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "acto",
            "description": "<p>Acto que se ejecuta en la PUB</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "letra_ci",
            "description": "<p>Letra del documento de identificacion de la persona</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ci",
            "description": "<p>Documento de identidad de la persona</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": "<p>Nombres de la persona</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": "<p>Apellidos de la persona</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "oficina",
            "description": "<p>Nombre de la Oficina Correspondiente</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fecha_emision",
            "description": "<p>Fecha de emision de la Planilla PUB</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"data\": {\n            \"nro_planilla\": \"15000001234\",\n            \"monto\": \"357136.00\",\n            \"acto\": \"Copia Certificada Fotostática\",\n            \"letra_ci\": \"V\",\n            \"ci\": \"11222333\",\n            \"nombres\": \"Pedro\",\n            \"apellidos\": \"Perez\",\n            \"oficina\": \"REGISTRO PRINCIPAL DEL ESTADO LARA\",\n            \"fecha_emision\": \"2018-06-11\"\n        }\n    }",
          "type": "json"
        },
        {
          "title": "Autenticación Fallida",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1004,\n        \"message\": \"Token invalido.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Info",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1001,\n        \"message\": \"La planilla solicitada ya ha sido pagada.\"\n    }\n\nHTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1002,\n        \"message\": \"La planilla solicitada no existe.\"\n    }\n\nHTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1006,\n        \"message\": \"Planilla exenta de pago.\"\n    }\n\n    HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1008,\n        \"message\": \"Planilla vencida.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"error\": \"error.message\"\n    }",
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
            "description": "<p>Token de autenticación del banco.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de envio de token por Header",
          "content": "\"headers\": {\n      \"token\": \"$2y$10$NIs2tCvuQoybWvST2s60n.slNO2jC.sDhaqeZM5BEwvioiZ3WmJJK\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc/1.0.0.js",
    "groupTitle": "Planilla_Única_Bancaria",
    "name": "PostBuscarplanilla"
  },
  {
    "type": "post",
    "url": "/crearplanilla",
    "title": "Crear Planilla en Base de Datos de Producción",
    "version": "v1.2.1-rc",
    "group": "Planilla_Única_Bancaria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nro_planilla",
            "description": "<p>Numero de Planilla de PUB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acto",
            "description": "<p>Acto que se ejecuta en la PUB</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_oficina",
            "description": "<p>Identificador de la oficina del Servicio</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "letra_ci",
            "description": "<p>Letra del documento de identificacion de la persona</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ci",
            "description": "<p>Documento de identidad de la persona</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": "<p>Nombres de la persona</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": "<p>Apellidos de la persona</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pagado",
            "description": "<p>Si fue pagada o no la PUB</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "exento",
            "description": "<p>Si el pago esta exento o no</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "monto",
            "description": "<p>Monto total a cancelar</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tipo_oficina_id",
            "description": "<p>Tipo de servicio Notaria Principal Mercantil Publico</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Estatus de la PUB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha_emision",
            "description": "<p>Fecha que se genera la PUB AAAA/MM/DD</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "acto_origen_id",
            "description": "<p>Identificador unico del acto de Notaria,Mercantil,Principal o Publico</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nro_referencia",
            "description": "<p>Numero de Referencia de la transaccion</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha_pago",
            "description": "<p>Fecha de pago de la PUB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hora_gestion_pago",
            "description": "<p>Fecha en que se realizo el pago de la PUB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "codigo_banco",
            "description": "<p>Código identificador del banco.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "codigo_sucursal",
            "description": "<p>Código identificador de la sucursal del banco.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tipo_pago_id",
            "description": "<p>Identificador del modo de pago.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametros de Entrada",
          "content": "{\n    \"nro_planilla\": \"15000001234\",\n    \"acto\": \"Copia Certificada Fotostática\",\n    \"id_oficina\": \"150\",\n    \"letra_ci\": \"V\",\n    \"ci\": \"11222333\",\n    \"nombres\": \"Pedro\",\n    \"apellidos\": \"Perez\",\n    \"pagado\": \"0\",\n    \"exento\": \"0\",\n    \"monto\": \"357136.00\",\n    \"tipo_oficina_id\": \"3\",\n    \"fecha_emision\":\"2018-06-12\",\n    \"acto_origen_id\":\"8\",\n\n    \"nro_referencia\": \"0000010\",\n    \"fecha_pago\": \"2020-01-13\",\n    \"codigo_banco\": \"0102\",\n    \"codigo_sucursal\": \"0122\",\n    \"tipo_pago_id\": \"1\",\n    \"hora_gestion_pago\": \"02:11 pm\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"message\": \"La operación fue realizada exitosamente.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Info",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1005,\n        \"message\": \"Número de planilla ya existe.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"error\": \"error.message\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc/1.0.0.js",
    "groupTitle": "Planilla_Única_Bancaria",
    "name": "PostCrearplanilla"
  },
  {
    "type": "post",
    "url": "/crearplanillaprueba",
    "title": "Crear Planilla en Base de Datos de Prueba",
    "version": "v1.2.1-rc",
    "group": "Planilla_Única_Bancaria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nro_planilla",
            "description": "<p>Numero de Planilla de PUB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acto",
            "description": "<p>Acto que se ejecuta en la PUB</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_oficina",
            "description": "<p>Identificador de la oficina del Servicio</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "letra_ci",
            "description": "<p>Letra del documento de identificacion de la persona</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ci",
            "description": "<p>Documento de identidad de la persona</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": "<p>Nombres de la persona</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": "<p>Apellidos de la persona</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pagado",
            "description": "<p>Si fue pagada o no la PUB</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "exento",
            "description": "<p>Si el pago esta exento o no</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "monto",
            "description": "<p>Monto total a cancelar</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tipo_oficina_id",
            "description": "<p>Tipo de servicio Notaria Principal Mercantil Publico</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Estatus de la PUB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha_emision",
            "description": "<p>Fecha que se genera la PUB AAAA/MM/DD</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "acto_origen_id",
            "description": "<p>Identificador unico del acto de Notaria,Mercantil,Principal o Publico</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nro_referencia",
            "description": "<p>Numero de Referencia de la transaccion</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha_pago",
            "description": "<p>Fecha de pago de la PUB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hora_gestion_pago",
            "description": "<p>Fecha en que se realizo el pago de la PUB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "codigo_banco",
            "description": "<p>Código identificador del banco.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "codigo_sucursal",
            "description": "<p>Código identificador de la sucursal del banco.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tipo_pago_id",
            "description": "<p>Identificador del modo de pago.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametros de Entrada",
          "content": "{\n    \"nro_planilla\": \"15000001234\",\n    \"acto\": \"Copia Certificada Fotostática\",\n    \"id_oficina\": \"150\",\n    \"letra_ci\": \"V\",\n    \"ci\": \"11222333\",\n    \"nombres\": \"Pedro\",\n    \"apellidos\": \"Perez\",\n    \"pagado\": \"0\",\n    \"exento\": \"0\",\n    \"monto\": \"357136.00\",\n    \"tipo_oficina_id\": \"3\",\n    \"fecha_emision\":\"2018-06-12\",\n    \"acto_origen_id\":\"8\",\n\n    \"nro_referencia\": \"0000010\",\n    \"fecha_pago\": \"2020-01-13\",\n    \"codigo_banco\": \"0102\",\n    \"codigo_sucursal\": \"0122\",\n    \"tipo_pago_id\": \"1\",\n    \"hora_gestion_pago\": \"02:11 pm\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"message\": \"La operación fue realizada exitosamente.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Info",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1005,\n        \"message\": \"Número de planilla ya existe.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"error\": \"error.message\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc/1.0.0.js",
    "groupTitle": "Planilla_Única_Bancaria",
    "name": "PostCrearplanillaprueba"
  },
  {
    "type": "post",
    "url": "/detallepago",
    "title": "Detalle del Pago de Planilla",
    "version": "v1.2.2-rc",
    "group": "Planilla_Única_Bancaria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nro_referencia",
            "description": "<p>Numero de Referencia de la transaccion en el Banco</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametros de Entrada",
          "content": "{\n    \"nro_referencia\": \"0000005\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pub_id",
            "description": "<p>Identificador de la planilla unica bancaria</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fecha_pago",
            "description": "<p>Fecha de pago de la PUB</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "banco_id",
            "description": "<p>Identificador del banco en la que se realizo el pago</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sucursal_id",
            "description": "<p>Identificador de la sucursal donde se realizo el pago</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nro_referencia",
            "description": "<p>Numero de referencia del pago</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nro_pub",
            "description": "<p>Numero de la PUB</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "monto",
            "description": "<p>Monto del pago</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tipo_pago_id",
            "description": "<p>Identificador del tipo de pago</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Estatus del dato del pago</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hora_gestion_pago",
            "description": "<p>Hora de la gestion del pago</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"data\": {\n            \"id\": \"24\",\n            \"pub_id\": \"90\",\n            \"fecha_pago\": \"2017-08-17 00:00:003 \",\n            \"banco_id\": \"6\",\n            \"sucursal_id\": null,\n            \"nro_referencia\": \"0000005\",\n            \"nro_pub\": \"37500014206\",\n            \"monto\": \"255000.00\",\n            \"tipo_pago_id\": \"4\",\n            \"status\": true,\n            \"hora_gestion_pago\": \"9:58 a.m.\"\n        }\n    }",
          "type": "json"
        },
        {
          "title": "Autenticación Fallida",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1004,\n        \"message\": \"Token invalido.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Info",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1003,\n        \"message\": \"Número de referencia invalido.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"error\": \"error.message\"\n    }",
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
            "description": "<p>Token de autenticación del banco.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de envio de token por Header",
          "content": "\"headers\": {\n      \"token\": \"$2y$10$NIs2tCvuQoybWvST2s60n.slNO2jC.sDhaqeZM5BEwvioiZ3WmJJK\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc/1.0.0.js",
    "groupTitle": "Planilla_Única_Bancaria",
    "name": "PostDetallepago"
  },
  {
    "type": "post",
    "url": "/generarpub",
    "title": "Generación de planilla de prueba (Via Banco)",
    "version": "v1.2.2-rc",
    "group": "Planilla_Única_Bancaria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fecha_emision",
            "description": "<p>Fecha de emision de la planilla (Opcional)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametros de Entrada",
          "content": "{\n    \"fecha_emision\":  \"2018-06-11\"\n}",
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
            "field": "nro_planilla",
            "description": "<p>Numero de Planilla de PUB</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "monto",
            "description": "<p>Monto total a cancelar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "acto",
            "description": "<p>Acto que se ejecuta en la PUB</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "letra_ci",
            "description": "<p>Letra del documento de identificacion de la persona</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ci",
            "description": "<p>Documento de identidad de la persona</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": "<p>Nombres de la persona</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": "<p>Apellidos de la persona</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fecha_emision",
            "description": "<p>Fecha de emision de la Planilla PUB</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"message\": \"La operación fue realizada exitosamente.\"\n        \"data\": {\n            \"nro_planilla\": \"15000001234\",\n            \"monto\": \"357136.00\",\n            \"acto\": \"Copia Certificada Fotostática\",\n            \"letra_ci\": \"V\",\n            \"ci\": \"11222333\",\n            \"nombres\": \"Pedro\",\n            \"apellidos\": \"Perez\",\n            \"fecha_emision\": \"2018-06-11\"\n        }\n    }",
          "type": "json"
        },
        {
          "title": "Autenticación Fallida",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1004,\n        \"message\": \"Token invalido.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Info",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1009,\n        \"message\": \"Método no permitido para el token.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"error\": \"error.message\"\n    }",
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
            "description": "<p>Token de autenticación del banco.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de envio de token por Header",
          "content": "\"headers\": {\n      \"token\": \"$2y$10$NIs2tCvuQoybWvST2s60n.slNO2jC.sDhaqeZM5BEwvioiZ3WmJJK\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc/1.0.0.js",
    "groupTitle": "Planilla_Única_Bancaria",
    "name": "PostGenerarpub"
  },
  {
    "type": "post",
    "url": "/pagarplanilla",
    "title": "Pagar Planilla",
    "version": "v1.2.2-rc",
    "group": "Planilla_Única_Bancaria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "codigo_sucursal",
            "description": "<p>Código identificador de la sucursal del banco.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nro_planilla",
            "description": "<p>Numero de Planilla de PUB</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nro_referencia",
            "description": "<p>Numero de Referencia de la transaccion en el Banco</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "monto",
            "description": "<p>Monto del pago</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fecha_pago",
            "description": "<p>Fecha de pago de la PUB</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametros de Entrada",
          "content": "{\n    \"codigo_sucursal\": \"0122\",\n    \"nro_planilla\": \"15000001234\"\n    \"nro_referencia\": \"0000010\",\n    \"monto\": \"255000.00\",\n    \"fecha_pago\": \"2020-01-13 09:19:14\"\n}",
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
            "description": "<p>Token de autenticación del banco.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de envio de token por Header",
          "content": "\"headers\": {\n      \"token\": \"$2y$10$NIs2tCvuQoybWvST2s60n.slNO2jC.sDhaqeZM5BEwvioiZ3WmJJK\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"message\": \"La operación fue realizada exitosamente.\"\n    }",
          "type": "json"
        },
        {
          "title": "Autenticación Fallida",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1004,\n        \"message\": \"Token invalido.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Info",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1001,\n        \"message\": \"La planilla solicitada ya ha sido pagada.\"\n    }\n\nHTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1002,\n        \"message\": \"La planilla solicitada no existe.\"\n    }\n\nHTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1006,\n        \"message\": \"Planilla exenta de pago.\"\n    }\n\nHTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1008,\n        \"message\": \"Planilla vencida.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1100,\n        \"message\": \"Ha ocurrrido un error inesperado.\",\n        \"error\": \"error.message\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc/1.0.0.js",
    "groupTitle": "Planilla_Única_Bancaria",
    "name": "PostPagarplanilla"
  },
  {
    "type": "post",
    "url": "/subirarchivos",
    "title": "Subir Archivos Conciliación",
    "version": "v1.2.2-rc",
    "group": "Planilla_Única_Bancaria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>Archivo perteneciente al banco para conciliacion</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticación del banco.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de envio de token por Header",
          "content": "\"headers\": {\n      \"token\": \"$2y$10$NIs2tCvuQoybWvST2s60n.slNO2jC.sDhaqeZM5BEwvioiZ3WmJJK\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta Success",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"success\",\n        \"code\": 1000,\n        \"message\": \"La operación fue realizada exitosamente.\"\n    }",
          "type": "json"
        },
        {
          "title": "Autenticación Fallida",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1004,\n        \"message\": \"Token invalido.\"\n    }\n\n    HTTP/1.1 200 OK\n    {\n        \"type\": \"info\",\n        \"code\": 1009,\n        \"message\": \"Método no permitido para el token.\"\n    }",
          "type": "json"
        },
        {
          "title": "Respuesta Error",
          "content": "HTTP/1.1 200 OK\n    {\n        \"type\": \"error\",\n        \"code\": 1007,\n        \"message\": \"Formato Invalido.\",\n        \"error\": \"Cannot read property 'file' of null\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc/1.0.0.js",
    "groupTitle": "Planilla_Única_Bancaria",
    "name": "PostSubirarchivos"
  }
] });
