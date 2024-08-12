/* ##########=======================########## */
/* ######===--- Objeto 'location' ---===###### */
/* ##########=======================########## */

// URL
window.location.href; // "https://webdev.brandondeveloper.com/projects"
// Puede redireccionar a otra pagina.
window.location.href = "https://nueva.com";

// Devuelve la informacion del (#).
window.location.hash; // "#idText"

// Dominio del archivo HTML y subdominio.
window.location.hostname; // "webdev.brandondeveloper.com"
window.location.host;

// Devuelve el origen del sitio.
window.location.origin; // "https://webdev.brandondeveloper.com"

// Devuelve el puerto donde se aloja el sitio web.
window.location.port; // "8080"

// Path.
window.location.pathname; // "/products/info"

// Protocolo.
window.location.protocol; // "http" || "https"

// Parametros.
window.location.search; // "?lol=Nuevo&names=Brandon%20Anthony"
// NOTA: Puede asignar un nuevo parametro, pero se recarga la pagina automaticamente con el nuevo parametro.
window.location.search = "?var=value";

// Carga un nuevo documento.
window.location.assign("https://youtube.com");

// Recargar la página web.
window.location.reload();