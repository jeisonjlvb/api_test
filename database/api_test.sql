/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : PostgreSQL
 Source Server Version : 130003
 Source Host           : localhost:5432
 Source Catalog        : api_test
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 130003
 File Encoding         : 65001

 Date: 16/08/2021 03:32:30
*/


-- ----------------------------
-- Sequence structure for categorias_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."categorias_id_seq";
CREATE SEQUENCE "public"."categorias_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for detalle_factura_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."detalle_factura_id_seq";
CREATE SEQUENCE "public"."detalle_factura_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for detalle_producto_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."detalle_producto_id_seq";
CREATE SEQUENCE "public"."detalle_producto_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for factura_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."factura_id_seq";
CREATE SEQUENCE "public"."factura_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for mensaje_respuesta_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."mensaje_respuesta_id_seq";
CREATE SEQUENCE "public"."mensaje_respuesta_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for productos_categorias_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."productos_categorias_id_seq";
CREATE SEQUENCE "public"."productos_categorias_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for productos_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."productos_id_seq";
CREATE SEQUENCE "public"."productos_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tipo_pago_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tipo_pago_id_seq";
CREATE SEQUENCE "public"."tipo_pago_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for users_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."users_id_seq";
CREATE SEQUENCE "public"."users_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Table structure for categorias
-- ----------------------------
DROP TABLE IF EXISTS "public"."categorias";
CREATE TABLE "public"."categorias" (
  "id" int8 NOT NULL DEFAULT nextval('categorias_id_seq'::regclass),
  "descripcion" varchar(255) COLLATE "pg_catalog"."default",
  "activo" bool DEFAULT true,
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" timestamp(6)
)
;
COMMENT ON COLUMN "public"."categorias"."id" IS 'Identificador';
COMMENT ON COLUMN "public"."categorias"."descripcion" IS 'Descripcion de la Categoría';
COMMENT ON COLUMN "public"."categorias"."activo" IS 'Indica si la categoria esta activo o inactivo';
COMMENT ON COLUMN "public"."categorias"."created_at" IS 'Fecha de Creacion del Registro';
COMMENT ON COLUMN "public"."categorias"."updated_at" IS 'Fecha de Actualizacion del Registro';

-- ----------------------------
-- Records of categorias
-- ----------------------------

-- ----------------------------
-- Table structure for detalle_factura
-- ----------------------------
DROP TABLE IF EXISTS "public"."detalle_factura";
CREATE TABLE "public"."detalle_factura" (
  "id" int8 NOT NULL DEFAULT nextval('detalle_factura_id_seq'::regclass),
  "factura_id" int8,
  "detalle_producto_id" int8,
  "cantidad" int2,
  "activo" bool DEFAULT true,
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" time(6)
)
;
COMMENT ON COLUMN "public"."detalle_factura"."id" IS 'Identificador';
COMMENT ON COLUMN "public"."detalle_factura"."factura_id" IS 'Identificador relacional con Factura';
COMMENT ON COLUMN "public"."detalle_factura"."detalle_producto_id" IS 'Identificador relacional con Detalle Producto';
COMMENT ON COLUMN "public"."detalle_factura"."cantidad" IS 'Cantidad de Productos a Comprar';
COMMENT ON COLUMN "public"."detalle_factura"."activo" IS 'Indica si el detalle de la factura esta activo o inactivo';
COMMENT ON COLUMN "public"."detalle_factura"."created_at" IS 'Fecha de Creacion del Registro';
COMMENT ON COLUMN "public"."detalle_factura"."updated_at" IS 'Fecha de Actualizacion del Registro';

-- ----------------------------
-- Records of detalle_factura
-- ----------------------------

-- ----------------------------
-- Table structure for detalle_producto
-- ----------------------------
DROP TABLE IF EXISTS "public"."detalle_producto";
CREATE TABLE "public"."detalle_producto" (
  "id" int8 NOT NULL DEFAULT nextval('detalle_producto_id_seq'::regclass),
  "producto_id" int8,
  "descripcion" varchar(255) COLLATE "pg_catalog"."default",
  "stock" int2,
  "precio" numeric(20,2),
  "activo" bool DEFAULT true,
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" time(6)
)
;
COMMENT ON COLUMN "public"."detalle_producto"."id" IS 'Identificador';
COMMENT ON COLUMN "public"."detalle_producto"."producto_id" IS 'Identificador relacional con Producto';
COMMENT ON COLUMN "public"."detalle_producto"."descripcion" IS 'Descripciòn del Producto';
COMMENT ON COLUMN "public"."detalle_producto"."stock" IS 'Stock del Producto';
COMMENT ON COLUMN "public"."detalle_producto"."precio" IS 'Precio del Producto';
COMMENT ON COLUMN "public"."detalle_producto"."activo" IS 'Indica si la descripcion del producto esta activo o inactivo';
COMMENT ON COLUMN "public"."detalle_producto"."created_at" IS 'Fecha de Creacion del Registro';
COMMENT ON COLUMN "public"."detalle_producto"."updated_at" IS 'Fecha de Actualizacion del Registro';

-- ----------------------------
-- Records of detalle_producto
-- ----------------------------

-- ----------------------------
-- Table structure for facturas
-- ----------------------------
DROP TABLE IF EXISTS "public"."facturas";
CREATE TABLE "public"."facturas" (
  "id" int8 NOT NULL DEFAULT nextval('factura_id_seq'::regclass),
  "cod_factura" varchar(20) COLLATE "pg_catalog"."default",
  "user_id" int8,
  "pago" bool DEFAULT false,
  "activo" bool DEFAULT true,
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" time(6),
  "tipo_pago_id" int4 DEFAULT 1,
  "fecha_pago" date
)
;
COMMENT ON COLUMN "public"."facturas"."id" IS 'Identificador';
COMMENT ON COLUMN "public"."facturas"."cod_factura" IS 'Código de Factura';
COMMENT ON COLUMN "public"."facturas"."user_id" IS 'Identificador relacional con Usuario';
COMMENT ON COLUMN "public"."facturas"."pago" IS 'Indica si la factura fue pagada';
COMMENT ON COLUMN "public"."facturas"."activo" IS 'Indica si la factura esta activo o inactivo';
COMMENT ON COLUMN "public"."facturas"."created_at" IS 'Fecha de Creacion del Registro';
COMMENT ON COLUMN "public"."facturas"."updated_at" IS 'Fecha de Actualizacion del Registro';
COMMENT ON COLUMN "public"."facturas"."tipo_pago_id" IS 'Relacion con Tipo Pago';
COMMENT ON COLUMN "public"."facturas"."fecha_pago" IS 'Fecha de Pago';

-- ----------------------------
-- Records of facturas
-- ----------------------------

-- ----------------------------
-- Table structure for mensaje_respuesta
-- ----------------------------
DROP TABLE IF EXISTS "public"."mensaje_respuesta";
CREATE TABLE "public"."mensaje_respuesta" (
  "id" int8 NOT NULL DEFAULT nextval('mensaje_respuesta_id_seq'::regclass),
  "tipo" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "codigo" int4 NOT NULL,
  "mensaje" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" timestamp(6)
)
;
COMMENT ON COLUMN "public"."mensaje_respuesta"."id" IS 'Identificador de mensajes del sistema';
COMMENT ON COLUMN "public"."mensaje_respuesta"."tipo" IS 'Tipo de Mensaje';
COMMENT ON COLUMN "public"."mensaje_respuesta"."codigo" IS 'Codigo del mensaje';
COMMENT ON COLUMN "public"."mensaje_respuesta"."mensaje" IS 'Mensaje para mostrar en el sistema';
COMMENT ON COLUMN "public"."mensaje_respuesta"."created_at" IS 'Fecha de creacion del registro';
COMMENT ON COLUMN "public"."mensaje_respuesta"."updated_at" IS 'Fecha de modificacion del registro';

-- ----------------------------
-- Records of mensaje_respuesta
-- ----------------------------
INSERT INTO "public"."mensaje_respuesta" VALUES (1, 'error', 1100, 'Ha ocurrido un error inesperado.', '2020-01-22 10:57:33', NULL);
INSERT INTO "public"."mensaje_respuesta" VALUES (2, 'success', 1000, 'La operación fué realizada exitosamente.', '2020-01-17 16:27:14', NULL);
INSERT INTO "public"."mensaje_respuesta" VALUES (3, 'info', 1001, 'El usuario ingresado ya se encuentra en uso.', '2021-08-12 14:40:52', NULL);
INSERT INTO "public"."mensaje_respuesta" VALUES (4, 'info', 1002, 'Usuario o contraseña incorrecta.', '2021-08-12 14:40:52', NULL);
INSERT INTO "public"."mensaje_respuesta" VALUES (5, 'info', 1003, 'Debe iniciar sesión para realizar esta operación.', '2021-08-12 14:40:52', NULL);
INSERT INTO "public"."mensaje_respuesta" VALUES (6, 'info', 1004, 'La información solicitada no existe.', '2021-08-12 14:40:52', NULL);
INSERT INTO "public"."mensaje_respuesta" VALUES (7, 'info', 1005, 'La información ingresada ya esta en uso.', '2021-08-12 14:40:52', NULL);
INSERT INTO "public"."mensaje_respuesta" VALUES (8, 'info', 1006, 'No posee facturas pendientes por pagar.', '2021-08-15 18:26:12', NULL);
INSERT INTO "public"."mensaje_respuesta" VALUES (9, 'info', 1007, 'La factura solicitada ya fue procesada.', '2021-08-15 19:22:20', NULL);
INSERT INTO "public"."mensaje_respuesta" VALUES (10, 'info', 1008, 'No existe stock suficiente para procesar la compra.', '2021-08-15 22:24:56', NULL);

-- ----------------------------
-- Table structure for productos
-- ----------------------------
DROP TABLE IF EXISTS "public"."productos";
CREATE TABLE "public"."productos" (
  "id" int8 NOT NULL DEFAULT nextval('productos_id_seq'::regclass),
  "codigo" varchar(10) COLLATE "pg_catalog"."default",
  "descripcion" varchar(255) COLLATE "pg_catalog"."default",
  "activo" bool DEFAULT true,
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" timestamp(6)
)
;
COMMENT ON COLUMN "public"."productos"."id" IS 'Identificador';
COMMENT ON COLUMN "public"."productos"."codigo" IS 'Código del Producto';
COMMENT ON COLUMN "public"."productos"."descripcion" IS 'Descripción del Producto';
COMMENT ON COLUMN "public"."productos"."activo" IS 'Indica si el producto esta activo o inactivo';
COMMENT ON COLUMN "public"."productos"."created_at" IS 'Fecha de Creacion del Registro';
COMMENT ON COLUMN "public"."productos"."updated_at" IS 'Fecha de Actualizacion del Registro';

-- ----------------------------
-- Records of productos
-- ----------------------------

-- ----------------------------
-- Table structure for productos_categorias
-- ----------------------------
DROP TABLE IF EXISTS "public"."productos_categorias";
CREATE TABLE "public"."productos_categorias" (
  "id" int8 NOT NULL DEFAULT nextval('productos_categorias_id_seq'::regclass),
  "producto_id" int8,
  "categoria_id" int8,
  "activo" bool DEFAULT true,
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" timestamp(6)
)
;
COMMENT ON COLUMN "public"."productos_categorias"."id" IS 'Identificador';
COMMENT ON COLUMN "public"."productos_categorias"."producto_id" IS 'Identificador relacional con Producto';
COMMENT ON COLUMN "public"."productos_categorias"."categoria_id" IS 'Identificador relacional con Categoria';
COMMENT ON COLUMN "public"."productos_categorias"."activo" IS 'Identifica si esta activo o inactivo';
COMMENT ON COLUMN "public"."productos_categorias"."created_at" IS 'Fecha de Creacion del Registro';
COMMENT ON COLUMN "public"."productos_categorias"."updated_at" IS 'Fecha de Actualización del Registro';

-- ----------------------------
-- Records of productos_categorias
-- ----------------------------

-- ----------------------------
-- Table structure for tipo_pago
-- ----------------------------
DROP TABLE IF EXISTS "public"."tipo_pago";
CREATE TABLE "public"."tipo_pago" (
  "id" int2 NOT NULL DEFAULT nextval('tipo_pago_id_seq'::regclass),
  "descripcion" varchar(255) COLLATE "pg_catalog"."default",
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" timestamp(6)
)
;
COMMENT ON COLUMN "public"."tipo_pago"."id" IS 'Identificador';
COMMENT ON COLUMN "public"."tipo_pago"."descripcion" IS 'Descripción del tipo de pago';
COMMENT ON COLUMN "public"."tipo_pago"."created_at" IS 'Fecha creación del registro';
COMMENT ON COLUMN "public"."tipo_pago"."updated_at" IS 'Fecha actualización del registro';

-- ----------------------------
-- Records of tipo_pago
-- ----------------------------
INSERT INTO "public"."tipo_pago" VALUES (1, 'Pendiente por Pago', '2021-08-15 17:55:59.671712', NULL);
INSERT INTO "public"."tipo_pago" VALUES (2, 'Pago en Tienda', '2021-08-15 17:57:03.605247', NULL);
INSERT INTO "public"."tipo_pago" VALUES (3, 'Servicio Pick-Up', '2021-08-15 17:58:04.473052', NULL);
INSERT INTO "public"."tipo_pago" VALUES (4, 'Servicio Delivery', '2021-08-15 17:58:28.122479', NULL);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
  "id" int8 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
  "nombre" varchar(100) COLLATE "pg_catalog"."default",
  "apellido" varchar(100) COLLATE "pg_catalog"."default",
  "usuario" varchar(50) COLLATE "pg_catalog"."default",
  "email" varchar(100) COLLATE "pg_catalog"."default",
  "password" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "activo" bool DEFAULT true,
  "created_at" timestamp(6) DEFAULT now(),
  "updated_at" timestamp(6)
)
;
COMMENT ON COLUMN "public"."users"."id" IS 'Identificador del Usuario';
COMMENT ON COLUMN "public"."users"."nombre" IS 'Nombre del Usuario';
COMMENT ON COLUMN "public"."users"."apellido" IS 'Apellido del Usuario';
COMMENT ON COLUMN "public"."users"."usuario" IS 'Nombre de Usuario para ingresar al sistema';
COMMENT ON COLUMN "public"."users"."email" IS 'Email del Usuario';
COMMENT ON COLUMN "public"."users"."password" IS 'Contraseña del Usuario';
COMMENT ON COLUMN "public"."users"."activo" IS 'Indica si el usuario esta activo o inactivo';
COMMENT ON COLUMN "public"."users"."created_at" IS 'Fecha de Creacion del Registro';
COMMENT ON COLUMN "public"."users"."updated_at" IS 'Fecha de Actualizacion del Registro';

-- ----------------------------
-- Records of users
-- ----------------------------

-- ----------------------------
-- View structure for v_productos_categorias
-- ----------------------------
DROP VIEW IF EXISTS "public"."v_productos_categorias";
CREATE VIEW "public"."v_productos_categorias" AS  SELECT productos.id AS producto_id,
    productos.codigo,
    productos.descripcion AS producto,
    categorias.id AS categoria_id,
    categorias.descripcion AS categoria,
    categorias.activo
   FROM ((productos_categorias
     JOIN productos ON ((productos_categorias.producto_id = productos.id)))
     JOIN categorias ON ((productos_categorias.categoria_id = categorias.id)));

-- ----------------------------
-- View structure for v_factura_monto_total
-- ----------------------------
DROP VIEW IF EXISTS "public"."v_factura_monto_total";
CREATE VIEW "public"."v_factura_monto_total" AS  SELECT detalle_factura.factura_id,
    facturas.cod_factura,
    facturas.pago,
    facturas.fecha_pago,
    sum(((detalle_factura.cantidad)::numeric * detalle_producto.precio)) AS monto,
    tipo_pago.id AS tipo_pago_id,
    tipo_pago.descripcion AS tipo_pago
   FROM ((((facturas
     JOIN detalle_factura ON ((facturas.id = detalle_factura.factura_id)))
     JOIN detalle_producto ON ((detalle_factura.detalle_producto_id = detalle_producto.id)))
     JOIN productos ON ((detalle_producto.producto_id = productos.id)))
     JOIN tipo_pago ON ((facturas.tipo_pago_id = tipo_pago.id)))
  GROUP BY facturas.id, detalle_factura.factura_id, facturas.pago, facturas.fecha_pago, tipo_pago.descripcion, tipo_pago.id;

-- ----------------------------
-- View structure for v_factura_productos
-- ----------------------------
DROP VIEW IF EXISTS "public"."v_factura_productos";
CREATE VIEW "public"."v_factura_productos" AS  SELECT facturas.cod_factura,
    detalle_factura.factura_id,
    detalle_factura.cantidad,
    productos.descripcion AS producto,
    detalle_producto.id AS detalle_producto_id,
    detalle_producto.descripcion AS detalle_producto,
    detalle_producto.stock,
    detalle_producto.precio,
    ((detalle_factura.cantidad)::numeric * detalle_producto.precio) AS cantidad_precio
   FROM (((facturas
     JOIN detalle_factura ON ((facturas.id = detalle_factura.factura_id)))
     JOIN detalle_producto ON ((detalle_factura.detalle_producto_id = detalle_producto.id)))
     JOIN productos ON ((detalle_producto.producto_id = productos.id)));

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."categorias_id_seq"
OWNED BY "public"."categorias"."id";
SELECT setval('"public"."categorias_id_seq"', 28, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."detalle_factura_id_seq"
OWNED BY "public"."detalle_factura"."id";
SELECT setval('"public"."detalle_factura_id_seq"', 10, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."detalle_producto_id_seq"
OWNED BY "public"."detalle_producto"."id";
SELECT setval('"public"."detalle_producto_id_seq"', 17, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."factura_id_seq"
OWNED BY "public"."facturas"."id";
SELECT setval('"public"."factura_id_seq"', 6, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."mensaje_respuesta_id_seq"
OWNED BY "public"."mensaje_respuesta"."id";
SELECT setval('"public"."mensaje_respuesta_id_seq"', 11, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."productos_categorias_id_seq"
OWNED BY "public"."productos_categorias"."id";
SELECT setval('"public"."productos_categorias_id_seq"', 72, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."productos_id_seq"
OWNED BY "public"."productos"."id";
SELECT setval('"public"."productos_id_seq"', 14, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tipo_pago_id_seq"
OWNED BY "public"."tipo_pago"."id";
SELECT setval('"public"."tipo_pago_id_seq"', 5, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."users_id_seq"
OWNED BY "public"."users"."id";
SELECT setval('"public"."users_id_seq"', 9, true);

-- ----------------------------
-- Primary Key structure for table categorias
-- ----------------------------
ALTER TABLE "public"."categorias" ADD CONSTRAINT "productos_categorias_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table detalle_factura
-- ----------------------------
ALTER TABLE "public"."detalle_factura" ADD CONSTRAINT "detalle_factura_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table detalle_producto
-- ----------------------------
ALTER TABLE "public"."detalle_producto" ADD CONSTRAINT "productos_detalle_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table facturas
-- ----------------------------
ALTER TABLE "public"."facturas" ADD CONSTRAINT "factura_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table mensaje_respuesta
-- ----------------------------
ALTER TABLE "public"."mensaje_respuesta" ADD CONSTRAINT "mensaje_respuesta_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table productos
-- ----------------------------
ALTER TABLE "public"."productos" ADD CONSTRAINT "productos_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table productos_categorias
-- ----------------------------
ALTER TABLE "public"."productos_categorias" ADD CONSTRAINT "productos_categorias_pkey1" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tipo_pago
-- ----------------------------
ALTER TABLE "public"."tipo_pago" ADD CONSTRAINT "tipo_pago_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table detalle_factura
-- ----------------------------
ALTER TABLE "public"."detalle_factura" ADD CONSTRAINT "factura_detalle_factura" FOREIGN KEY ("factura_id") REFERENCES "public"."facturas" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "public"."detalle_factura" ADD CONSTRAINT "factura_detalle_producto" FOREIGN KEY ("detalle_producto_id") REFERENCES "public"."detalle_producto" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table detalle_producto
-- ----------------------------
ALTER TABLE "public"."detalle_producto" ADD CONSTRAINT "detalle_producto" FOREIGN KEY ("producto_id") REFERENCES "public"."productos" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table facturas
-- ----------------------------
ALTER TABLE "public"."facturas" ADD CONSTRAINT "factura_tipo_pago" FOREIGN KEY ("tipo_pago_id") REFERENCES "public"."tipo_pago" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "public"."facturas" ADD CONSTRAINT "factura_users" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table productos_categorias
-- ----------------------------
ALTER TABLE "public"."productos_categorias" ADD CONSTRAINT "categoria_id" FOREIGN KEY ("categoria_id") REFERENCES "public"."categorias" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "public"."productos_categorias" ADD CONSTRAINT "producto_id" FOREIGN KEY ("producto_id") REFERENCES "public"."productos" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
COMMENT ON CONSTRAINT "categoria_id" ON "public"."productos_categorias" IS 'Relacion con Productos';
COMMENT ON CONSTRAINT "producto_id" ON "public"."productos_categorias" IS 'Relacion con Categorias';
