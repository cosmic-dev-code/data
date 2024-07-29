"use strict";

/* ##########=======================########## */
/* ######===--- Crear un carrusel ---===###### */
/* ##########=======================########## */

const carrousel = new CosmicCarrousel();
// Creamos un carrusel.

/* Establecemos los elementos del carrusel. */
carrousel.addData(`
	<center>
		<h3>Elemento 0</h3>
	</center>
`);

carrousel.addData(`
	<center>
		<h3>Elemento 1</h3>
	</center>
`);

carrousel.addData(`
	<center>
		<h3>Elemento 2</h3>
	</center>
`);

carrousel.createIn("#idDiv");
// Creamos el carrusel en un elemento especificado.

carrousel.createIn("#idDiv");
// Podemos crear el mismo carrusel en mas de un elemento.

/* ##########=================########## */
/* ######===--- Propiedades ---===###### */
/* ##########=================########## */

carrousel.setTitle("Titulo del carrousel");
// Establecemos el titulo del carrusel.

carrousel.media = {
	default: 50, 
	maxWidth1200: 80, 
	maxWidth700: 100
};
/* la propiedad (media) define la dimension del carrusel en modo 
(responsive), se maneja por porcentajes; esos son sus 
valores por defecto. */

carrousel.margin = {
	y: "1rem", 
	x: "auto"
};
/* La propiedad (margin) define los margenes del carrousel, esos son sus 
valores por defecto. */

/* ##########==================########## */
/* ######===--- Paginaciones ---===###### */
/* ##########==================########## */

// ----------------------------------- //
// ------ Establecer paginacion ------ //
// ----------------------------------- //

carrousel.paginateCircles();
// Establecemos el tipo de paginacion de tipo (circulos).

carrousel.paginateNumerics();
// Establecemos el tipo de paginacion de tipo (numeros).

carrousel.paginateNumerics("Elemento: ");
// Implementa la paginacion de tipo numeros con un texto.

// ----------------------------- //
// ------ Auto paginacion ------ //
// ----------------------------- //

carrousel.autoPaginate(3000);
/* El metodo (autoPaginate) Pagina el carrusel hacia la derecha, 
recibe por parametros: 
	--- El tiempo de paginacion expresado en millisegundos. */

carrousel.autoPaginateReverse(3000);
/* El metodo (autoPaginateReverse) Pagina el carrusel hacia la izquierda, 
recibe por parametros: 
	--- El tiempo de paginacion expresado en millisegundos. */

/* ##########===============########## */
/* ######===--- Templates ---===###### */
/* ##########===============########## */

let arrUsers = await fetch("php/server.php");
// Imaginemos que tenemos un arreglo con algunos registros.

arrUsers.forEach(user => {
	carrousel.addData(`
		<section class="card">
			<header>
				<h3>${user.names}</h3>
			</header>
			<dl>
				<dd>
					<b>Nombre completo: </b>
					<span>${(user.names + " " + user.surnames)}</span>
				</dd>
				<dd>
					<p>Edad: ${user.age}</p>
				</dd>
			</dl>
		</section>
	`);
});
// Podemos hacer uso del metodo (addData).

// ------------------------------ //
// ------ Uso de templates ------ //
// ------------------------------ //

/* Establecemos una plantilla. Podemos declarar variables para la platilla 
de la siguiente forma: 
	--- <% Nombre de la variable %> */
carrousel.template(`
	<section class="card">
		<header>
			<h3><%nombre%></h3>
		</header>
		<dl>
			<dd>
				<b>Nombre completo: </b>
				<span><%nombreCompleto%></span>
			</dd>
			<dd>
				<p>Edad: <%edad%></p>
			</dd>
		</dl>
	</section>
`);

arrUsers.forEach(user => {
	/* El metodo (addDataTemplate), recibe por parametro: 
		--- Un objeto con (las variables declaradas en el template): 
			--- Variable : valor. */
	carrousel.addDataTemplate({
		nombre: user.names, 
		nombreCompleto: (user.names + " " + user.surnames), 
		edad: user.age
	});
});

// --------------------------------------------------------------------------------- //

/* Agregamos los correspondientes valores para cada variable 
declarada en el template. */

carrousel.template(`
	<center>
		<h3><%titulo%></h3>
		<p><%contenido%></p>
	</center>
`);

carrousel.addDataTemplate({
	titulo: "Titulo 0", 
	contenido: "Contenido 0"
});

carrousel.addDataTemplate({
	titulo: "Titulo 1", 
	contenido: "Contenido 1"
});

carrousel.addDataTemplate({
	titulo: "Titulo 2", 
	contenido: "Contenido 2"
});

carrousel.addDataTemplate({
	titulo: "Titulo 3", 
	contenido: "Contenido 3"
});

carrousel.addDataTemplate({
	titulo: "Titulo 4", 
	contenido: "Contenido 4"
});

carrousel.addDataTemplate({
	titulo: "Titulo 5", 
	contenido: "Contenido 5"
});

// --------------------------------------- //
// ------ Optimizacion de templates ------ //
// --------------------------------------- //

// Tenemos un template
carrousel.template(`
	<center>
		<h3><%titulo%></h3>
		<p><%contenido%></p>
	</center>
`);

/* El metodo (addFullDataTemplate) recibe por parametro: 
	--- Las variables declaradas en el (template) y 
	sus valores.

La cantidad de valores define el numero de elementos 
para el carrusel. */
carrousel.addFullDataTemplate({
	titulo: [
		'Titulo 0', 'Titulo 1', 'Titulo 2', 
		'Titulo 3', 'Titulo 4', 'Titulo 5'
	], 
	contenido: [
		'Contenido 0', 'Contenido 1', 'Contenido 2', 
		'Contenido 3', 'Contenido 4', 'Contenido 5'
	]
});

carrousel.addFullDataTemplate({
	titulo: [
		'Titulo 0', 'Titulo 1', 'Titulo 2', 
		'Titulo 3'
	], 
	/* Dado que esta propiedad contiene mas valores, esta propiedad 
	definira la cantidad de elementos, colocando una cadena vacia 
	en las propiedades no existentes. */
	contenido: [
		'Contenido 0', 'Contenido 1', 'Contenido 2', 
		'Contenido 3', 'Contenido 4', 'Contenido 5'
	]
});

/* ##########=============================########## */
/* ######===--- Anidacion de carruseles ---===###### */
/* ##########=============================########## */

carrousel.setTitle("Primer carrousel");
carrousel.paginateCircles();

carrousel.autoPaginate(4000);

carrousel.addData(`
	<center class="card">
		<h3>Lista de usuarios</h3>
	</center>
`);

carrousel.template(`
	<section class="card">
		<header>
			<h3><%nombre%></h3>
		</header>
		<dl>
			<dd>
				<b>Nombre completo: </b>
				<span><%nombreCompleto%></span>
			</dd>
			<dd>
				<p>Edad: <%edad%></p>
			</dd>
		</dl>
	</section>
`);

// Este ultimo elemento del carrusel contendra otro carrusel.
carrousel.addData(`
	<center class="card">
		<div id="idNewCarrousel"></div>
	</center>
`);

// Agregamos elementos al primer carrusel.
arrUsers.forEach(user => {
	carrousel.addData(`
		<section class="card">
			<header>
				<h3>${user.names}</h3>
			</header>
			<dl>
				<dd>
					<b>Nombre completo: </b>
					<span>${(user.names + " " + user.surnames)}</span>
				</dd>
				<dd>
					<p>Edad: ${user.age}</p>
				</dd>
			</dl>
		</section>
	`);
});

carrousel.terminate(() => {
	const segundoCarrusel = new CosmicCarrousel();

	newCarrousel.paginateNumerics("Contenido: ");
	newCarrousel.autoPaginateReverse(3000);

	/* Tomamos un poco menos del 100% del contenedor, para 
	tener una separacion entre los botones 
	de ambos carruseles. */
	newCarrousel.media = {
		default: 80, 
		maxWidth1200: 80, 
		maxWidth700: 80
	};

	newCarrousel.margin.y = "2rem";

	newCarrousel.template(`
		<center>
			<h2><%title%></h2>
			<p><%content%></p>
		</center>
	`);

	// Agregamos elementos para el segundo carrusel.
	newCarrousel.fullDataTemplate({
		title: ['Element 0', 'Element 1', 'Element 2'], 
		content: ["Contenido 0", "Contenido 1", "Contenido 2"]
	});

	newCarrousel.createIn("#idNewCarrousel");
});

carrousel.createIn("#idDiv");