/* ##########======================########## */
/* ######===--- Tipos de eventos ---===###### */
/* ##########======================##########

	// --------------------------------- //
	// ------ Eventos del (mouse) ------ //
	// --------------------------------- //
	
	Click.
	--- (click): Un click.
	--- (dblclick): Doble click.
	--- (contentmenu): Desplegar la lista del click derecho del mouse.
	Hover.
	--- (mouseover): Sobre un elemento o sobre sus hijos.
	--- (mouseout): Fuera del elemento o de sus elementos.
	--- (mouseenter): Se mueve sobre del elemento pero especialmente hecho para internet explorer.
	--- (mouseleave): Se mueve fuera del elemento pero espacialmente hecho para internet explorer.
	Presionar.
	--- (mousemove): Mientras el mouse se mueva dentro del elemento.
	--- (mousedown): Presionar sobre un elemento.
	--- (mouseup): Despresionar un elemento.

	// ------------------------------------- //
	// ------ Eventos de (formulatio) ------ //
	// ------------------------------------- //

	Inputs.
	--- (focus): Cuando se hace foco del input, (cuando se selecciona, se mantiene activo).
	---	(blur): Cuando el elemento pierde el foco.

	// --------------------------------- //
	// ------ Eventos del (touch) ------ //
	// --------------------------------- //

	--- (touchstart): Ocurre cuando el usuario hace contacto con la pantalla tactil.
	--- (touchmove): Ocurre cuando el usuario desliza su dedo a lo largo de la pantalla tactil.
	--- (touchend): Ocurre cuando el usuario quita su dedo de la pantalla tactil.
	--- (touchcancel): Se activa cuando un punto de contacto se ha interrumpido 
		de una manera específica de la implementación (por ejemplo, se crean 
		demasiados puntos de contacto).
	
	// ----------------------------------- //
	// ------ Eventos del (teclado) ------ //
	// ----------------------------------- //
	
	--- (keydown): Cuando se presiona una tecla.
	--- (keypress): Cuando un tecla se presiona y se suelta.
	--- (keyup): Cuando una tecla se suelta.
	--- (input): Cuando un usuario escriba algo en un campo.

	// ---------------------------------------- //
	// ------ Eventos del (portapapeles) ------ //
	// ---------------------------------------- //

	--- (copy): Ocurre cuando el usuario copia un texto de un elemento, (CTRL + C).
	--- (paste): Ocurre cuando el usuario pega un texto a un elemento, (CTRL + V).
	--- (cut): Ocurre cuando el usuario corta un texto de un elemento, (CTRL + X).
	--- (select): Cuando el usuario selecciona un texto.

	// ------------------------------------ //
	// ------ Eventos del (interfaz) ------ //
	// ------------------------------------ //
	
	--- (error): Ocurre cuando un archivo multimedia no se ha cargado.
	--- (load): Ocurre cuando un objeto se ha cargado.
	--- (beforeunload): Ocurre cuando el usuario se va a ir del sitio.
	--- (unload): Ocurre cuando el usuario se fue del sitio.
	--- (resize): Ocurre cuando la pantalla de la página web cambia su tamaño.
	--- (scroll): Ocurre cuando el usuario hace scroll.
*/