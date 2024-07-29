
/* ##########================================########## */
/* ######===--- Verificar un solo elemento ---===###### */
/* ##########================================########## */

// Extraemos el 'id' de un elemento.
const caja3 = document.getElementById('idCaja3');

// Verificamos las entradas.
const verificarEntrada = (arrElementos) => {
	// Recibimos un array de elementos.
	const elemento = arrElementos[0];

	// Elemento que recibimos por parametro.
	elemento;
	// Verifica si el elemento es visible en el viewport, (ventana del navegador).
	elemento.isIntersecting;
	// Devuelve el elemento HTMLElement.
	elemento.target;
}

/* Creamos el objeto observer y le pasamos por parametro un callback la 
cual es una funcion que nosotros mismos creamos. */
const observer = new IntersectionObserver(verificarEntrada);

/* Mandamos por parametro el objeto a verificar.
   --- (Observe) observa el objeto que se le pase por parametro. */
observer.observe(caja3);

/* ##########================================########## */
/* ######===--- Verificar varios elementos ---===###### */
/* ##########================================########## */

// Obtenemos un array de objetos.
const cajas = document.querySelectorAll('.center');

// Creamos una funcion para verificar las entradas.
const verificarEntradas = (arrElementos) => {
	/* Recibimos cada uno de los objetos y verificamos su interseccion. */
	for(const elemento of arrElementos){
		// Si es intersectado enviamos su contenido de texto por consola.
		if(elemento.isIntersecting){
			console.log("Se esta viendo la caja: ", elemento.target.textContent);
		}
	}
}

/* Creamos el objeto observer y le pasamos por parametro un callback la cual es una funcion que nosotros mismos creamos. */
const observer = new IntersectionObserver(verificarEntradas);

/* Obtenemos cada uno de los objetos y lo mandamos por parametro al 'observe', (observar). */
for(let caja of cajas){
	observer.observe(caja);
}

/* ##########==============########## */
/* ######===--- Opciones ---===###### */
/* ##########==============########## */

const cajas = document.querySelectorAll('.center');

// Creamos una funcion para verificar las entradas.
const verificarEntradas = (arrElementos) => {
	/* Recibimos cada uno de los objetos y verificamos su interseccion. */
	for(const elemento of arrElementos){
		// Si es intersectado enviamos su contenido de texto por consola.
		if(elemento.isIntersecting){
			console.log("Se esta viendo la caja: ", elemento.target.textContent);
		}
	}
}

// Las opciones como segundo parametro.
let opciones = {
	root: "element", // Toma un elemento como referencia, por defecto es e 'viwport'.
	rootMargin: "30px",  // Toma en cuenta un margen de pixeles.
	treshold: 1, /* Muestra cuanto queremos que muestre del cuerpo: 
		--- (1) es el cuerpo completo, cuando termina de mostrarnos el cuerpo.
		--- (0) es al principio cuando nos muestra el cuerpo. */
}

/* Creamos el objeto observer y le pasamos por parametro un callback la cual es una funcion que nosotros mismos creamos, 
el segundo parametro son las opciones. */
const observer = new IntersectionObserver(verificarEntradas, opciones);

/* Obtenemos cada uno de los objetos y lo mandamos por parametro al 'observe', (observar). */
for(const caja of cajas){
	observer.observe(caja);
}