"use strict";

/* ##########================########## */
/* ######===--- Estructura ---===###### */
/* ##########================########## */

// Por defecto hace una peticion GET y retorna una promesa.
axios.get("https://api.example.com")
	
	// Se recibe la respuesta.
	.then(response => {
		// Observamos el resultado.
		response.data;
	})

	// En caso de haber un error, aqui se recibe.
	.catch(error => {
		console.error(error);
	})

/* ##########=====================########## */
/* ######===--- catch y finally ---===###### */
/* ##########=====================########## */

axios.get("https://api.example.com")
	.then(response => {})
	.catch(error => {})

	// Bloque que se ejecuta cuando termina todo, (haya o no errores).
	.finally(() => {
		// ...
	});

/* ##########==================########## */
/* ######===--- Metodo (GET) ---===###### */
/* ##########==================########## */

// Hacer una peticion (GET).
axios.get("php/server.php")
	.then(response => {
		// Recibimos el resultado.
		response.data;
	})
	.catch(error => {});

// Esta es una manera acortada de hacerlo.
axios("php/server.php")
	.then(response => {
		// Recibimos el resultado.
		response.data;
	})
	.catch(error => {});

/**
 * Enviar parametros por la URL.
 */

// Se hace una peticion enviando parametros.
axios.get("php/server.php", {
	// Estos son los parametros que se envian por la URL.
	params: {
		id: 1, 
		category: "books"
	}
})
	.then(response => {
		// Recibimos el resultado.
		response.data;
	})
	.catch(error => {});

/* ##########===================########## */
/* ######===--- Metodo (POST) ---===###### */
/* ##########===================########## */

/**
 * Realizar una peticion POST.
 */

// Ahora utilizamos el metodo (post).
axios.post("php/server.php", {
	// Estos son los datos a enviar.
	nombre: "Brandon", 
	edad: 22, 
	headers: {
		'Content-Type': 'multipart/form-data'
	}
})
	.then(response => {
		// Recibimos el resultado.
		response.data;
	})
	.catch(error => {});

/**
 * Enviar un JSON al servidor.
 */

// Datos a enviar.
let datos = {
	nombre: "Brandon", 
	edad: 22
}

axios.post("php/server.php", datos, {
	headers: {
		// Le indicamos al servidor que estamos enviando un JSON.
		"Content-type": "application/json"
	}
})
	.then(response => {
		// Recibimos el resultado.
		response.data;
	})
	.catch(error => {});

/* ##########==================########## */
/* ######===--- Metodo (PUT) ---===###### */
/* ##########==================########## */

// Ahora utilizamos el metodo (put).
axios.put("php/server.php/users/1", {
	// Estos son los datos a enviar.
	nombre: "Brandon", 
	edad: 22
})
	.then(response => {
		// Recibimos el resultado.
		response.data;
	})
	.catch(error => {});

/* ##########=====================########## */
/* ######===--- Metodo (DELETE) ---===###### */
/* ##########=====================########## */

// Se utiliza el metodo (delete) y se indica en la URL el recurso a eliminar.
axios.delete("php/server.php/users/1")
	.then(response => {
		// ...
	})
	.catch(error => {});

/* ##########==================================########## */
/* ######===--- Encadenamiento de (promesas) ---===###### */
/* ##########==================================########## */

// Realiza una solicitud GET
axios.get('https://api.example.com')
    .then((response) => {
        // Si el status no es 200
        if (response.status !== 200) {
            // Lanza un error y captúralo en el bloque 'catch'
            throw new Error('HTTP error, status = ' + response.status);
        }
        // Devuelve el texto de la respuesta
        return response.data;
    })
    .then((response) => {
        // Recibe la respuesta resuelta aquí

        // Utiliza la respuesta para realizar otra solicitud POST
        return axios.post('https://api.example.com', response, {
            headers: {"Content-type": "application/x-www-form-urlencoded"}
        });
    })
    .then((response) => {
        // Verifica nuevamente, y si es correcto, devuelve el texto de la respuesta
        if (response.status !== 200) {
            throw new Error('HTTP error, status = ' + response.status);
        }
        return response.data;
    })
    .then((response) => {
        // La promesa devuelta se resuelve aquí, y se recibe el resultado final

        typeof response; // string
    })
    .catch((error) => {
        // Este bloque 'catch' maneja cualquier error de cualquier promesa, incluyendo los lanzados
        console.error('Error: ' + error.message);
    });

/* ##########=======================########## */
/* ######===--- (Axios) asincrono ---===###### */
/* ##########=======================########## */

// --------------------- //
// ------ Forma 0 ------ //
// --------------------- //

const getInfo = async () => {
	try{
		// Hacemos la peticion con (await).
		let resultado = await axios("archivo.txt");

		// Mostramos la respuesta.
		console.log(resultado.data);
	}catch(error){
		// ...
	}
};

// --------------------- //
// ------ Forma 1 ------ //
// --------------------- //

const getInfo = async () => {
	try{
		// Misma linea.
		let resultado = await axios("https://api.example", { name: "Brandon" }).data;

		// Tenemos directamente el resultado.
		console.log(resultado);
	}catch(error){
		// ...
	}
};