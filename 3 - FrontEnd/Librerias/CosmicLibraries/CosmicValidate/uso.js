
/* ##########=========================########## */
/* ######===--- Validacion de datos ---===###### */
/* ##########=========================########## */

CosmicValidate.isSpace(" ");
CosmicValidate.isSpace("\n");
CosmicValidate.isSpace("\t");
// Verifica si existe un espacio.

CosmicValidate.isNumber(555);
// Verifica que el parametro sea un numero.

CosmicValidate.isInteger(555);
// Verifica que el parametro sea un numero entero.

CosmicValidate.isFloat(555.555);
// Verifica que el parametro sea un numero flotante.

CosmicValidate.isString("555.555");
// Verifica que el parametro sea una cadena de texto.

CosmicValidate.isArray([5, 5, 5]);
// Verifica que el parametro sea un arreglo

CosmicValidate.isBoolean(true);
// Verifica que el parametro sea un booleano.

CosmicValidate.isChar('a');
// Verifica que el parametro sea un caracter.

CosmicValidate.isType();
// Verifica que el parametro sea un tipo de dato.

CosmicValidate.isFunction(function(){});
CosmicValidate.isFunction(() => {});
// Verifica que el parametro sea una funcion.

CosmicValidate.isClass(class{});
// Verifica que el parametro sea una clase.

/* ##########===========================########## */
/* ######===--- Reglas para los datos ---===###### */
/* ##########===========================########## */

// --------------------------- //
// ------ Campos vacios ------ //
// --------------------------- //

CosmicValidate.empty("");
CosmicValidate.empty(0);
CosmicValidate.empty(null);
CosmicValidate.empty(undefined);
CosmicValidate.empty(NaN);
// Verifica que el parametro este vacio o sea invalido.

let objEmpty = CosmicValidate.emptyAll([
	["name", "Hola"], 
	["surname", ""], 
	["age", "22"]
]);
// Valida multiples campos.

objEmpty.hasEmpty; // Verifica si tiene algun campo vacio.
objEmpty.dataEmpty;
/* Devuelve un arreglo con los campos.

	--- [name, false]
	--- [surname, true]
	--- [age, false]
*/

let objEmpty = CosmicValidate.emptyAll([
	["name", "Hola"], 
	["surname", ""], 
	["age", "22"]
], {
	except: ["surname"]
});
/* El segundo parametro exceptua de validar un campo. 

	--- [name, false]
	--- [surname, false]
	--- [age, false]
*/

// -------------------------------- //
// ------ Verificar patrones ------ //
// -------------------------------- //

CosmicValidate.pattern("Brandon", "text");
CosmicValidate.pattern("117", "number");
CosmicValidate.pattern("Brandon 22", "textAndNumber");
// Tipado de texto y numero.

CosmicValidate.pattern("22", "age");
CosmicValidate.pattern("brandon@gmail.com", "email");
// Tipado de datos de usuario.

CosmicValidate.pattern("2022-10-24", "date");
CosmicValidate.pattern("12:59", "time");
CosmicValidate.pattern("2022-10", "month");
CosmicValidate.pattern("2022-10-24T12:59", "dateTimeLocal");
// Tipado de fecha y hora.

CosmicValidate.pattern("Hello world", "except");
CosmicValidate.pattern("Hello world", "file");
// (except) y (file) exceptuan los campos, devolviendo (true).

CosmicValidate.patternAll([
	["Hola", "text"], 
	["333", "number"], 
	["Number_talk", "except"]
]);
// Podemos validar cada uno de los patrones.

// ---------------------------------- //
// ------ Verificar longitudes ------ //
// ---------------------------------- //

CosmicValidate.minMax("Hola mundo", 10);
CosmicValidate.minMax("Hola mundo", 10, "equal");
// Verifica que la cadena tenga 10 caracteres.

CosmicValidate.minMax("Hola", 10, "max");
// Verifica que la cadena tenga maximo 10 caracteres.

CosmicValidate.minMax("Hola", 10, "min");
// Verifica que la cadena tenga minimo 10 caracteres.

CosmicValidate.minMaxAll([
	["one", "Hola", 10, "min"], 
	["two", "Hola mundo", 10, "max"], 
	["one", "Hola mund", 10, "equal"]
]);
/* Verifica multiples longitudes de datos. 

	--- ['one', false]
	--- ['two', true]
	--- ['three', false]
*/

// ----------------------------- //
// ------ Limpiar cadenas ------ //
// ----------------------------- //

CosmicValidate.sanitizeString(`	
	<div>
		<h1>Hola mundo</h1>
		<article></article>
	</div>
`);
// Devuelve una cadena de texto sin las etiquetas HTML.

/* ##########===========================########## */
/* ######===--- Reglas para los datos ---===###### */
/* ##########===========================########## */

// ---------------------------- //
// ------ Obtener campos ------ //
// ---------------------------- //

let inputs = CosmicValidate.getInputs("#myForm");
// Obtenemos todos los campos de un formulario.

	inputs.inputAll;
	// Array: Con todos los campos.
	inputs.inputOption;
	// Array: Todos los campos de opcion como: radios, checkboxs, etc.
	inputs.inputString;
	// Array: Todos los campos donde el usuario puede ingresar texto.

// ----------------------------- //
// ------ Obtener valores ------ //
// ----------------------------- //

let values = CosmicValidate.getValues("#myForm");
// Obtiene todos los valores de los campos.
	
	values.options;
	// Todos los valores de los campos de tipo (opcion).

		values.options.all;
		// Un arreglo con todos los valores: [name, value, checked].
		values.options.toObject();
		// Convierte en objeto el arreglo, poniendo como propiedad el (name).

	values.strings;
	// Todos los valores de los campos donde el usuario puede ingresar (texto).

		values.strings.all;
		// Un arreglo con todos los valores: [name, value].
		values.options.toObject();
		// Convierte en objeto el arreglo, poniendo como propiedad el (name).

	values.valuesAll;
	// Un array con todos los campos: [name, value].

// ---------------------------------------- //
// ------ Obtener valores con tipado ------ //
// ---------------------------------------- //

let values = CosmicValidate.getValues("#myForm", true);
// Agrega el tipo de patron solo a los campos donde el usuario ingresa texto.

	values.strings.all;
	// Un arreglo con todos los valores: [name, value, tipo de patron].
	values.valuesAll;
	// Aqui tambien los agrega.

/* ##########========================########## */
/* ######===--- Validar formulario ---===###### */
/* ##########========================########## */

let objReview = CosmicValidate.reviewForm("#myForm");
// Valida todos los campos de un elemento.

	objReview.options;
	// Campos de opcion.

		objReview.options.all;
		// Un array: [name, value, checked].
		objReview.options.invalid;
		// Un array con todos los campos invalidos.
		objReview.options.valid;
		// Un array con todos los campos validos.

	objReview.strings;
	// Campos de texto.

		objReview.strings.all;
		// Un array: [name, validacion booleana].
		objReview.strings.invalid;
		// Un array con todos los campos invalidos.
		objReview.strings.valid;
		// Un array con todos los campos validos.

	objReview.reviewsAll;
	// Todos los campos.

		objReview.reviewsAll.all;
		objReview.reviewsAll.invalid;
		objReview.reviewsAll.valid;
		// Mezcla todos los campos.

	objReview.hasEmpty;
	// Devuelve un booleano validando si hubo al menos un campo vacio.
	objReview.hasInvalid;
	// Devuelve un booleano validando si hubo al menos un campo invalido.
	objReview.dataEmpty;
	// Devuelve un arreglo con todos los campos vacios, (si los hubo).

// -------------------------------------------------- //
// ------ Reemplazar los (name) y validaciones ------ //
// -------------------------------------------------- //

CosmicValidate.reviewForm("div", {
	replaceNames: {
		names: "nombres", // (names) por (nombres).
		age: "edad" // (age) por (edad).
	}, 
	replacePatterns: {
		names: "number" // (names) se valida como [number].
	}
});
/* El metodo (reviewForm) recibe por segundo parametro un objeto con algunos ajustes: 
	--- (replaceNames): Reemplaza los valores de un (name) especificado por otro.
	--- (replacePatterns): Reemplaza los patrones por uno especificado. */

/* ##########=========================########## */
/* ######===--- Objeto (CosmicForm) ---===###### */
/* ##########=========================########## */

const cosmicForm = new CosmicValidate.Form("#myForm");
// Instaciamos un objeto (CosmicForm).

	cosmicForm.selectByName("names");
	// Trae todos los elementos con el [name="names"].

	cosmicForm.selectById("idAge");
	// Trae el elemento con el [id="idAge"].

	cosmicForm.selectByClass("text");
	// Trae todos los elementos con el [class="text"].

	cosmicForm.selectByType("text");
	// Trae todos los elementos con el [type="text"].

	cosmicForm.validate({
		replaceNames: {
			names: "nombres", 
			age: "edad"
		}, 
		replacePatterns: {
			names: "number"
		}
	});
	// El metodo (validate) es equivalente al metodo estatico (reviewForm) exceptuando el primer parametro.

	cosmicForm.getValues(true);
	// El metodo (getValues) es equivalente al metodo estatico (getValues) exceptuando el primer parametro.

	cosmicForm.getInputs();
	// El metodo (getInputs) es equivalente al metodo estatico (getInputs).
