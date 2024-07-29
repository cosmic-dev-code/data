<?php

/* Ya que en el documento (resources/views/navigation-menu.blade.php) hicimos unas cuantas modificaciones, ahora tenemos el campo libre para hacer uso del componente de (blade) que nos permitira utilizar el 
menu de navegacion.

Para esto debemos utilizar el componente que se encarga del (layout), y dicho componente se encuetra dentro de 
(opp/View/Components/AppLayout.php). */

######### --- --- --- Archivo (resources/views/welcome.blade.php) --- --- --- ######### ?>

<!-- Borramos todo lo que haya en este archivo y colocamos solamente el componente de (blade). 
De esta forma ya tenemos el menu de navegacion en esta vista, de manera que tenemos el 
resto de la pagina en blanco para colocar el contenido que queramos. -->

<x-app-layout></x-app-layout>