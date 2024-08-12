"use strict";

/* ##########=================########## */
/* ######===--- Informacion ---===###### */
/* ##########=================########## */

/* NOTA: Es importante tener en cuenta que la codificación en base64 no es un método de encriptación seguro y no debe 
utilizarse como tal. La codificación base64 es simplemente una forma de representar datos binarios en formato 
de texto y no proporciona ningún tipo de seguridad adicional. */

/* La codificación base64 se utiliza comúnmente para representar datos binarios en formato de texto para su transmisión a 
través de canales que no admiten datos binarios, como el correo electrónico y HTTP. La codificación base64 
convierte cada grupo de tres bytes de datos binarios en cuatro caracteres ASCII. */

/* ##########===============########## */
/* ######===--- Codificar ---===###### */
/* ##########===============########## */

/* Esta función toma una cadena de texto como argumento y devuelve la versión codificada en base64 de la cadena. */

// Cadena a codificar.
const cadena = "Hello World!";

btoa(cadena); // "SGVsbG8gV29ybGQh"

/* ##########=================########## */
/* ######===--- Decodificar ---===###### */
/* ##########=================########## */

/* decodifica una cadena codificada en base64. La función toma una cadena codificada en base64 
como argumento y devuelve una cadena decodificada. */

// Cadena codificada en (base64).
const cadena = "SGVsbG8gV29ybGQh";

atob(cadena); // "Hello World!"