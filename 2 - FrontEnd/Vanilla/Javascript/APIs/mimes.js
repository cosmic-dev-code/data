"use strict";

("text/plain"); // Es el valor por defecto para los archivos de texto.
("application/octet-stream"); // Es el valor por defecto para todos los demas casos.

let mime = {

	// -------------------- //
	// ------ Audios ------ //
	// -------------------- //
	
	"audio": {".aac": "audio/aac"},
	"audio": {".mid, .midi": "audio/midi"},
	"audio": {".oga": "audio/ogg"},
	"audio": {".weba": "audio/webm"},
	"audio": {".3gp": "audio/3gpp (si no contiene video)"},
	"audio": {".3g2": "audio/3gpp2 (si no contiene video)"},

	// -------------------- //
	// ------ Videos ------ //
	// -------------------- //

	"video": {".avi": "video/x-msvideo"},
	"video": {".mpeg": "video/mpeg"},
	"video": {".ogv": "video/ogg"},
	"video": {".webm": "video/webm"},
	"video": {".3gp": "video/3gpp"},
	"video": {".3g2": "video/3gpp2"},

	// -------------------------- //
	// ------ Aplicaciones ------ //
	// -------------------------- //

	"applicationType": {".abw": "application/x-abiword"},
	"applicationType": {".arc": "application/octet-stream"},
	"applicationType": {".azw": "application/vnd.amazon.ebook"},
	"applicationType": {".bin": "application/octet-stream"},
	"applicationType": {".bz": "application/x-bzip"},
	"applicationType": {".bz2": "application/x-bzip2"},
	"applicationType": {".csh": "application/x-csh"},
	"applicationType": {".doc": "application/msword"},
	"applicationType": {".epub": "application/epub+zip"},
	"applicationType": {".jar": "application/java-archive"},
	"applicationType": {".js": "application/javascript"},
	"applicationType": {".json": "application/json"},
	"applicationType": {".mpkg": "application/vnd.apple.installer+xml"},
	"applicationType": {".odp": "application/vnd.oasis.opendocument.presentation"},
	"applicationType": {".ods": "application/vnd.oasis.opendocument.spreadsheet"},
	"applicationType": {".odt": "application/vnd.oasis.opendocument.text"},
	"applicationType": {".ogx": "application/ogg"},
	"applicationType": {".pdf": "application/pdf"},
	"applicationType": {".ppt": "application/vnd.ms-powerpoint"},
	"applicationType": {".rar": "application/x-rar-compressed"},
	"applicationType": {".rtf": "application/rtf"},
	"applicationType": {".sh": "application/x-sh"},
	"applicationType": {".swf": "application/x-shockwave-flash"},
	"applicationType": {".tar": "application/x-tar"},
	"applicationType": {".vsd": "application/vnd.visio"},
	"applicationType": {".xhtml": "application/xhtml+xml"},
	"applicationType": {".xls": "application/vnd.ms-excel"},
	"applicationType": {".xml": "application/xml"},
	"applicationType": {".xul": "application/vnd.mozilla.xul+xml"},
	"applicationType": {".zip": "application/zip"},
	"applicationType": {".7z": "application/x-7z-compressed"},

	// -------------------- //
	// ------ Textos ------ //
	// -------------------- //

	"text": {".css": "text/css"},
	"text": {".xml": "text/xml"},
	"text": {".csv": "text/csv"},
	"text": {".htm, .html": "text/html"},

	// ---------------------- //
	// ------ Imagenes ------ //
	// ---------------------- //

	"image": {".gif": "image/gif"},
	"image": {".jpeg, jpg": "image/jpeg"},
	"image": {".svg": "image/svg+xml"},
	"image": {".tif, .tiff": "image/tiff"},
	"image": {".webp": "image/webp"},

	// --------------------- //
	// ------ Fuentes ------ //
	// --------------------- //

	"font": {".ttf": "font/ttf"},
	"font": {".woff": "font/woff"},
	"font": {".woff2": "font/woff2"}
};