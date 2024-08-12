
let text = "Texto de prueba";

// Hace el texto grande.
text = text.big(); // "<big>Texto de prueba</big>"

// Lo pone dentro de una etiqueta blink.
text = text.blink(); // "<blink>Texto de prueba</blink>"

// Lo pone entre etiquetas <b></b>.
text = text.bold(); // "<b>Texto de prueba</b>"

// Modifica la propiedad 'display' y le da el valor 'fixed'.
text = text.fixed(); // "<tt>Texto de prueba</tt>"

// Cambia el color de la tipografía.
text = text.fontcolor("red"); // "<font color=\"red\">Texto de prueba</font>"

// Cambia rl tamaño de la fuente.
text = text.fontsize("30px"); // <font size=\"60px\">Texto de prueba</font>

// Convierte el texto en itálica.
text = text.italics(); // "<i>Texto de prueba</i>"

// Crea un enlace 'a' sin el 'href'.
text = text.anchor(); // "<a name=\"undefined\">Texto de prueba</a>"

// Le pone al objeto el atributo 'name' con el nombre.
text = text.anchor("nombre"); // "<a name=\"Name\">Texto de prueba</a>"

// Crea una etiqueta 'a' con rl atributo 'href' y su valor.
text = text.link("http:\\youtube.com");

// Cambia el tamaño del texto en letra pequeña.
text = text.small(); // "<small>Texto de prueba</small>"

// Cambia el texto al texto tachado.
text = text.strike(); // "<strike>Texto de prueba</strike>"

// Baja un poco el texto.
text = text.sub(); // "<sub>Texto de prueba</sub>"

// Sube un poco el texto.
text = text.sup(); // "<sup>Texto de prueba</sup>"