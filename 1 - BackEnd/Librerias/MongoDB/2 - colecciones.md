### =============================== ###
###### ===--- Colecciones ---=== ######
### =============================== ###

```js
	// ------------------- //
	// ------ Crear ------ //
	// ------------------- //

	try{
		
		// Crea una coleccion.
		let result = await database.createCollection("usuarios"); // Promise.

	}catch(error){
		if(error.codeName === "NamespaceExists"){
			// Error la coleccion existe.
		}else{
			// Error al crear la coleccion.
		}
	}

	/**
	 * Al realizar una insercion.
	 */

	// Al insertar un dato en una coleccion (que no existe), MongoDB creara una.
	await database.collection('myCollection').insertOne({
		nombre: "Brandon", 
		edad: 24, 
		correo: "brandon@gmail.com", 
		createdAt: new Date()
	});

	// ------------------ //
	// ------ Leer ------ //
	// ------------------ //

	/**
	 * Traer todas las colecciones.
	 */

	// Obtenemos una lista de colecciones.
	const colecciones = await database.listCollections().toArray();

	colecciones.forEach(coleccion => {
		coleccion.name; // Nombre de la coleccion.
	});

	/**
	 * Coleccion especifica.
	 */

	// Colocamos el nombre de la coleccion.
	database.listCollections({ name: 'myCollection' })
		.then(collection => {
			// Convertimos en arreglo.
			collection.toArray().then(array => { array.length });
		});

	// Forma acortada.

	const array = await database.listCollections({ name: 'myCollection' }).toArray();

	// ---------------------- //
	// ------ Eliminar ------ //
	// ---------------------- //

	try{
		
		// Elimina una coleccion.
		await database.collection("myCollection").drop();

	}catch(error){
		// Mensaje de error.
		error.message;
	}

	/**
	 * Eliminar todo.
	 */

	const colecciones = await database.listCollections().toArray();

	// Recorremos y borramos cada una de las colecciones.
	colecciones.forEach(coleccion => {
		await database.collection(coleccion.name).drop();
	});

```