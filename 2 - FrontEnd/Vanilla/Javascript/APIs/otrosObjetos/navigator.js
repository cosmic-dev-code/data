
/* ##########=================########## */
/* ######===--- Propiedades ---===###### */
/* ##########=================########## */

// Devuelve el nombre del navegador, (suele equivocarse).
navigator.appCodeName;

// Devuelve el nombre oficial del navegador.
navigator.appName;

// Devuelve la version del sistema operativo.
navigator.appVersion;

// Devuelve informacion acerca de la conexion a internet.
navigator.connection;
	
	/* Devuelve la cantidad efectiva de magabytes por segundo. */
	navigator.connection.downlink;

	// Se puede verificar cuando cambie.
	navigator.connection.onchange;

navigator.geolocation;

// Devuelve la cantidad de nucleos del procesador logico.
navigator.hardwareConcurrency;

// Devuelve el idioma del navegador.
navigator.language;

/* Devuelve un arreglo con la cantidad de 
idiomas que el usuario entiende, (viene 
por defecto en el navegador). */
navigator.languages

/* Son los tipos de encabezados por los que se 
envian los datos. */
navigator.mimeTypes;

// Devuelve si el usuario tiene internet.
navigator.onLine;

/* Devuelve la informacion del navegador y la informacion 
del sistema operativo que el usuario esta utilizando.
(suele equivocarse) */
navigator.userAgent;

// Devuelve si el usuario tiene las cookies activadas.
navigator.cookieEnabled

/* Devuelve el objeto (Permissions) el cual permite 
acceder a los distintos permisos del (microfono, 
la camara, las notificaciones, etc). */
navigator.permissions;

/* Devuelve la plataforma en la que se esta corriendo el 
navegador, (windows 32, 64, linux, etc). */
navigator.platform;

/* Devuelve un array (Plugin) el cual contiene todos los 
(plugins / MIMES) instalados en el navegador. 

	--- Primero los arrays de cada plugin.
	--- Luego los plugins. */
navigator.plugins;

/* Devuelve el producto del navegador que por lo general 
es (Geko), todo navegador que soporte el objeto (Navigator) 
lo tiene, sirve para solucionar problemas de compatibilidad 
rn algunos sitios web. (Ya no se usa). */
navigator.product;

/* Es parecido a los (Dedicate worker), la diferencia es 
que los (Dedicate Worker) no comparten informacion y son 
especificos para una pagina de un sitio web, mientras que 
los (Service Worker) si comparte informacion. */
navigator.serviceWorker;

/* ##########=============########## */
/* ######===--- Metodos ---===###### */
/* ##########=============########## */

/* Nos permite acceder al audio y al video de nuestro dispositivo 
local a traves de ciertos parametros. */
navigator.getUserMedia();

/* Permite a los (Web Sites) registrarse como posibles controladores 
de tipo (MIME) determinado. */
navigator.registerContentHandler();

/* Permite a los (Web Sites) registrarse como posibles controladores 
de tipo (PROTOCOLO) determinado. */
navigator.registerProtocolHandler();

/* Devuelve una promesa para otro objeto el cual es (MediaKeySystemAccess) 
el cual sirve para acceder a ciertas cosas del sistema. */
navigator.requestMediaKeySystemAccess();

/* Devuelve en un valor (Booleano) si el navegador tiene (Java) habilitado. */
navigator.javaEnabled();

/* Se usa para transferir de forma sincrona conjuntos pequeños de datos (HTTP) 
del agente (usuario) al (servidor). */
navigator.sendBeacon();

/* Se utiliza para hacer vibrar un dispositivo. */
navigator.vibrate();