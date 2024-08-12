<?php

// Establece el token para un formulario.
csrf_field();

// Establece el metodo para un formulario.
method_field('PUT');

?>

<!-- Funcionan de la misma manera. -->

@csrf
@method('PUT')