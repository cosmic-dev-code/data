
```js
	// Muestra las bases de datos.
	show dbs

	// Usar una base de datos.
	use test

	// Crear una coleccion en la base de datos.
	test > db.createCollection("users") // { ok: 1 }

	// Otra forma de crear una coleccion es colocar un dato.
	// ASIGNA un ID Automatico.
	test > db.publicaciones.insertOne({}) // Dato desconocido.
	// Datos del registro.
	test > db.publicaciones.insertOne({
		"titulo": "Aprendiendo", 
		"cantidad": 50
	})

	// Muestra las colecciones en esa base de datos, (test).
	test > show collections

	/* Muestra todos los registros de la coleccion (publicaciones) en la db (test).
		{
			_id: ObjectId("54534576567247657567")
		}, 
		{
			_id: ObjectId("87904365479539673465"), 
			titulo: "Aprendiendo", 
			cantidad: 50
		} 
	*/
	// Documentos distintos en la misma coleccion.
	test > db.publicaciones.find()

	// Insertar mas de un registro.
	test > db.publicaciones.insertMany([
		{
			"titulo": "Primero", 
			"cantidad": 10
		}, 
		{
			// Podemos omitir el (id) automatico dando un id.
			_id: ObjectId(123), 
			"titulo": "Segundo", 
			"cantidad": 20
		}
	])

	// Trae los datos que concidan.
	test > db.publicaciones.find({
		titulo: "Segundo"
	})
	test > db.publicaciones.find({
		titulo: "Segundo", 
		cantidad: 20
	})

	// ($gte), mayor o igual a (40)
	// $eq: Igual que.
	// $ne: Distinto de.
	// Etc...
	test > db.publicaciones.find({
		edad: {$gte: 40}
	})

	// Trae los campos donde existe (edad).
	test > db.publicaciones.find({
		edad: {$exists: true}
	})

	// Traer registros utilizando el operador " || ".
	test > db.publicaciones.find({
		$or: [
			{titulo: "Uno"}, 
			{titulo: "Segundo"}
		]
	})

	// Traer registros utilizando el operador " && ".
	test > db.publicaciones.find({
		$and: [
			{titulo: "Uno"}, 
			{titulo: "Segundo"}
		]
	})

	// Actualizar el primer registro que encuentra.
	test > db.publicaciones.updateOne(
		// El primer registro que coincida.
		{ _id: ObjectId("24349543603858459436") }, 
		{ 
			$set: { titulo: "Nuevo titulo", nuevo: "Nuevo campo" }
		}
	)

	// Actualiza mas de un registro coincidente.
	test > db.publicaciones.updateMany(
		// Todos los registro que coincidan.
		{ titulo: "Nombre del titulo" }, 
		{ 	
			$set: { titulo: "Nuevo titulo", email: "brandon@gmail.com" }
		}
	)
	// Podria ser usado para actualizar un solo registro.
	test > db.publicaciones.updateMany(
		{ email: "brandon@gmail.com" }, 
		{ $set: { titulo: "Nuevo titulo", email: "brandon@gmail.com" } }
	)
	// Actualiza todos los registros.
	test > db.publicaciones.updateMany(
		// Sin filtros.
		{ }, 
		{ $set: { titulo: "Nuevo titulo" } }
	)

	// Elimina solo el primer registro coincidente.
	test > db.publicaciones.deleteOne({ _id: ObjectId("24349543603858459436") })
	test > db.publicaciones.deleteOne({ titulo: "Primero" })

	// Elimina todos los registros coincidentes.
	test > db.publicaciones.deleteMany({ titulo: "Primero" })

	// Trunca la coleccion.
	test > db.publicaciones.deleteMany({ })
```

Para hacer relaciones.

```js
	test > db.usuarios.insertOne({
		// Llave primaria.
		_id: ObjectId(123), 
		name: "Brandon", 
		edad: 24
	})

	test > db.posts.insertMany([
		{
			_id: ObjectId(1), 
			titulo: "Primero", 
			// Llave foranea.
			usuario_id: ObjectId(2)
		}, 
		{
			_id: ObjectId(2), 
			titulo: "Srgundo", 
			usuario_id: ObjectId(123) // Usuario.
		}, 
		{
			_id: ObjectId(3), 
			titulo: "Tercero", 
			// Llave foranea.
			usuario_id: ObjectId(56778)
		}
	])

	// De la coleccion (usuarios)
	// Relacion (1:1), (1:N), etc.
	test > db.getCollection("usuarios").aggregate({
		$lookup: {
			// Hacemos la relacion a la coleccion (posts).
			from: "posts", 
			// Por medio del (id) de la coleccion (usuarios).
			localField: "id", 
			// A la llave (foranea) de la coleccion (posts).
			foreignField: "usuario_id", 
			// Nombre de la propiedad que contiene todos los (posts) relacionados al (usuario).
			as: "posteos"
		}
	})
```

https://nosqlbooster.com/downloads