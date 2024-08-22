<?php

/* ##########=======================########## */
/* ######===--- ¿Qué es adminLTE? ---===###### */
/* ##########=======================########## */

/* Primer aclaremos algo ¿Qué es adminLTE? 
	
	--- AdminLTE es un panel de administración de código abierto, construido sobre Bootstrap 3, 
	ofrece una serie de elementos responsivos, adaptándose de manera íntegra, desde 
	computadoras a dispositivos móviles.

/* ##########=======================########## */
/* ######===--- Utilizar adminLTE ---===###### */
/* ##########=======================########## */

/* Para hacer uso de (adminLTE) es necesario utilizar las plantillas (blade), para lo cual es necesario 
tener una vista en la cual podamos implementar la plantilla de (adminLTE) por medio de (blade).

######### --- --- --- Archivo (resources/views/misPaginas/admin.blade.php) --- --- --- ######### */ ?>

<!-- Lo primero que debemos hacer es implementar la plantilla de (adminLTE). -->
@extends('adminlte::page')

<!-- Esta seccion implementa el titulo de la pagina. -->
@section('title', 'miTituloDePagina')

<!-- Aqui se implementa el (encabezado) dentro de la plantilla de (adminLTE). -->
@section('content_header')
    <h1>Dashboard</h1>
@stop

<!-- Aqui se implementa el (contenido) debajo del encabezado dentro de la plantilla de (adminLTE). -->
@section('content')
    <p>Welcome to this beautiful admin panel.</p>
@stop

<!-- Podemos introducir codigo CSS y JavaScript adicional. -->

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
    <script> console.log('Hi!'); </script>
@stop