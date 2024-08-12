
/* ##########=========================########## */
/* ######===--- Crear base de datos ---===###### */
/* ##########=========================########## */

-- Esta es la instruccion para crear una (base de datos).
CREATE DATABASE `database_name`;

/* Si la base de datos no existe no la crea, pero si no existe 
entonces la crea. */
CREATE DATABASE IF NOT EXISTS `database_name`;

/* ##########==============================########## */
/* ######===--- Borrar una base de datos ---===###### */
/* ##########==============================########## */

# Borra una base de datos con todo su contenido.
DROP DATABASE `database_name`;

# Si la base de datos existe, entonces la borra.
DROP DATABASE IF EXISTS `database_name`;

/* ##########==========########## */
/* ######===--- Info ---===###### */
/* ##########==========########## */

-- Devuelve el (usuario) y el (host).
SELECT SESSION_USER();
SELECT SYSTEM_USER(); -- root@localhost.
SELECT USER();

-- Devuelve la version de la base de datos.
SELECT VERSION(); -- Da: 10.4.25-MariaDB.

-- Muestra todas las bases de datos existentes.
SHOW DATABASES;

-- Usar una base de datos.
USE `my_database`;

-- Nos permite ver que base de datos tenemos seleccionada.
SELECT DATABASE();

-- Muestra las tablas de la base de datos seleccionada.
SHOW TABLES;

-- Muestra la estructura de la tabla.
DESCRIBE `tabla`;
DESC `tabla`;

-- Muestra todos los elementos de una columna, e incluso los comentarios.
SHOW FULL COLUMNS FROM `tabla`;

-- Muestra todos los warnings.
SHOW WARNINGS;

/* ##########========================########## */
/* ######===--- Copia de seguridad ---===###### */
/* ##########========================########## */

-- (BACKUP), permite respaldar una base de datos marcandole la ruta.
BACKUP DATABASE `my_database` TO DISK = 'D:\backups\testDB.bak';

-- Respaldar una base de datos con diferencia.
BACKUP DATABASE `my_database` TO DISK = 'D:\backups\testDB.bak' WITH DIFFERENTIAL;