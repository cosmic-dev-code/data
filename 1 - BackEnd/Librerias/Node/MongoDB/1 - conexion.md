### ======================================== ###
###### ===--- Conectar con MongoDB ---=== ######
### ======================================== ###

```js
	import { MongoClient } from 'mongodb';
```

# Con instancia

```js
	/**
	 * Con instancia.
	 */

	// Instanciamos el cliente con la URL a conectar.
	const client = new MongoClient("mongodb://localhost:27017");

	try{

		// Conectamos.
		await client.connect();

	}catch(error){ console.error(error); }

	/**
	 * Sin instancia.
	 */

	try{

		// Conectar con MongoDB sin ajustes.
		const client = await MongoClient.connect("mongodb://localhost:27017");


		// Conectar con MongoDB con ajustes.
		const client = await MongoClient.connect("mongodb://localhost:27017", {
			// Indica si se utilizara el nuevo analizar de URL.
			// Recomendable.
			useNewUrlParser: true, 
			// Conexion y desconexion en segundo plano.
			// Recomendable.
			useUnifiedTopology: true 
		})

	}catch(error){ console.error(error) }
```

# ----------------------------- #
# ------ Cerrar conexion ------ #
# ----------------------------- #

```js
	try{

		// ...

	}catch(error){

		// ...

	}finally{
		// Puedes colocarlo despued de realizar las operaciones.
		await client.close();
	}
```

# --------------------------------- #
# ------ Abrir base de datos ------ #
# --------------------------------- #

```js

	// Crear base de datos.
	const database = client.db("miBaseDeDatos");

```