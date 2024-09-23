/* ##########===========================########## */
/* ######===--- Crear un objeto (URL) ---===###### */
/* ##########===========================########## */

const url = new URL("https://ventaolivares.com?names=Brandon+Anthony&age=22&age=20&age=19");
/* La clase (URL) nos permite crear un objeto 'url' para manipular sus propiedades, recibe por parametros: 
	--- La url que vamos a manipular. */

// ------------------------- //
// ------ Propiedades ------ //
// ------------------------- //

// URL
url.href; // "https://webdev.brandondeveloper.com/projects"

// Devuelve la informacion del (#).
url.hash; // "#idText"

// Devuelve el host del sitio.
url.host; // "webdev.brandondeveloper.com"

// Devuelve el nombre del dominio del archivo html y también el sub dominio;
url.hostname; // "webdev.brandondeveloper.com"

// Devuelve el origen del sitio.
url.origin; // "https://webdev.brandondeveloper.com"

// Devuelve el puerto donde se aloja el sitio web.
url.port; // "8080"

// Path.
url.pathname; // "/products/info"

// Protocolo.
url.protocol; // "http" || "https"

// Parametros.
url.search; // "?lol=Nuevo&names=Brandon%20Anthony"

// Devuelve un objeto (URLSearchParams) para manipular los parametros de la (URL).
url.searchParams;

// --------------------- //
// ------ Metodos ------ //
// --------------------- //

// Convierte la cadena como tal en un formato (JSON).
url.toJSON();

/* Devuelve una cadena con los parametros, similar a la propiedad (search), pero sin el signo (?) al principio. */
url.toString();