### ============================= ###
###### ===--- Registros ---=== ######
### ============================= ###

```js
	// ------------------- //
	// ------ Crear ------ //
	// ------------------- //

	/**
	 * Insertar varios.
	 */

	// (inserMany) recibe un arreglo con los objetos a insetar.
	const result = await database.collection("myCollection").insertMany([
		// Cada uno tendra un (id) automatico asignado por (MongoDB).
		{ name: "Brandon", email: "brandon@gmail.com" }, 
		{ name: "Brandon 1", email: "brandon1@gmail.com" }, 
		{ name: "Brandon 2", email: "brandon2@gmail.com" }
	]);

	/**
	 * Insertar solo una coleccion.
	 */

	// De manera automatica (MongoDB) le asigna un (id) al registro.
	const result = await database.collection("myCollection").insertOne({
		nombre: "Brandon", 
		edad: 24, 
		correo: "brandon@gmail.com", 
		createdAt: new Date()
	});
```

### ====================== ###
###### ===--- Id ---=== ######
### ====================== ###

```js

	// -------------------------- //
	// ------ Asignar (id) ------ //
	// -------------------------- //

	const result = await database.collection("myCollection").insertOne({
		// Podemos asiganrle uno nosotros.
		_id: 128, 
		nombre: "Brandon"
	});

	// -------------------------------------- //
	// ------ Asignar (id) por MongoDB ------ //
	// -------------------------------------- //

	// Podemos asignar un (id) al registro, (aunque Mongo ya lo hace automaticamente).
	import { ObjectId } from 'mongodb';

	const result = await database.collection("myCollection").insertOne({
		// De esta manera MongoDB le asigna un id al objecto.
		_id: new ObjectId(), 
		nombre: "Brandon"
	});
```

### ================================== ###
###### ===--- Resto del CRUD ---=== ######
### ================================== ###

```js
	try{

		// ----------------------------- //
		// ------ Traer registros ------ //
		// ----------------------------- //

		/**
		 * Todos los registros.
		 */

		// (find), pasando un objeto vacio para traer todos los registros.
		const registros = await database.collection("myCollection").find({}).toArray();

		registros.forEach(registro => /* ... */);

		/**
		 * Registro especifico.
		 */

		// Todos los registros que coicidan son traidos.

		let filtro = { _id: 128 } // Podemos traer por nuestro (id) personalizado.
		let filtro = { _id: new ObjectId("64e2f948ad0b5e8b54d12d36") } // O podemos traer por su (ObjectId).

		const registros = await database.collection("myCollection").find(filtro).toArray();

		registros[0]; // Object

		// ------------------------ //
		// ------ Actualizar ------ //
		// ------------------------ //

		// (updateOne), actualiza el primer registro coincidente.
		const result = await database.collection(collectionName).updateOne(
			// Actualizar al registro con el (id).
			{ _id: 128 }, 
			// Dato que reemplazara.
			{ $set: {name: "Brandon", email: "brandon@gmail.com"} }
		);

		/**
		 * Actualizar todos los registros.
		 */

		// (updateMany), todos los registro coincidentes.
		const result = await database.collection(collectionName).updateMany(
			// Sin filtros.
			{},
			// Dato que reemplazara.
			{ $set: {name: "Brandon", email: "brandon@gmail.com"} }
		);

		// -------------------- //
		// ------ Eminar ------ //
		// -------------------- //

		/**
		 * Eliminar todos los registros.
		 */

		// (deleteMany), todos los registros coincidentes, (sin filtros).
		const result = await database.collection("myCollection").deleteMany({});

		/**
		 * Eliminar especifico.
		 */

		// (deleteOne), primer registro coincidente.
		const result = await database.collection("myCollection").deleteOne({
			// Eliminar por medio de su (id).
			_id: 128
		});

	}catch(error){
		// Mensaje de error.
		error.message;
	}
```