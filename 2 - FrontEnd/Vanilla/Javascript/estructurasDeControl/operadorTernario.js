let edad = 18;

/* Se ejecuta una condicional y después se guarda el primer texto de ser positivo.
De lo contrario se guarda el segundo texto. */
let respuesta = (edad >= 18)?"Eres mayor de edad.":"Eres menor de edad.";

(variable === "Hola") ? console.log("Hola") : console.log("No hola"); 

// ------------------------------------------------------- //
// ------ Condicionales con más trabajos a ejecutar ------ //
// ------------------------------------------------------- //

let edad = 18, estado = 1, genero = 'H';

(edad >= 18 && estado == 1)?(
	console.log("Es real"),
	console.log("Y verdadero"),
	(genero == 'H')?(
		console.log("Ademas es varon")
	):(
		console.log("Ademas es mujer")
	)
):(
	console.log("No es real"),
	console.log("Y no es verdadero"),
	(genero != 'H')?(
		console.log("Ademas es mujer")
	):(
		console.log("Ademas es varon")
	)
);

let num = 10, num1 = 10, operacion = "suma", res = 0;

(operacion == "suma")?(
	res = (num+num1),
	console.log("La suma es: "+res)
):((operacion == "resta")?(
		res = (num-num1),
		console.log("La resta es: "+res)
	):(
		console.log("No es ninguna")
	)
);
