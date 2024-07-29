"use strict";

/* ##########==============================########## */
/* ######===--- Crear una (Notificacion) ---===###### */
/* ##########==============================########## */

// Validamos que el navegador tenga disponible el objeto (Notification).
if(!('Notification' in window)){
	console.log("Esta");
}
else{
	console.log("Esta");
}

/* Metodo para preguntarle al usuario si desea 
que le enviemos notificaciones. */
Notification.requestPermission();

/* Propiedad que nos permite saber si tenemos 
permiso o no de mandar notificaciones, esto 
puede tener uno de estos tres valores: 
	--- (granted), cuando el usuario elige que si.
	--- (denied), cuando el usuario elige que no.
	--- (default), no se le ha pedido permiso aun, por 
	lo que la app no tiene permisos. */
Notification.permission;

/* Crear notificaciones. */
new Notification("Esta es una nueva notificacion.");