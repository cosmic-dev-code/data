/* ##########==================########## */
/* ######===--- Memorizacion ---===###### */
/* ##########==================########## */

/* Los memorizer funcionan para almacenar resultados de una operación, cada que se adquiere un nuevo resultado se compara 
con los resultados dentro del (Array): 
	--- Si el resultado se encuentra ahí entonces se retorna.
	--- De lo contrario ese resultado se guarda en el array y se retorna.

De esta manera optimizamos el tiempo y nos evitamos tener que calcular un resultado igual a otro que 
ya habíamos calculado.

NOTA: Normalmente se utiliza para calculos computacionales muy grandes. */

/* ##########=============########## */
/* ######===--- Ejemplo ---===###### */
/* ##########=============########## */

// Creamos un array en donde se guardaran los resultados.
let cache = [];

const memoizer = func => {
	// Retornamos el resultado.
	return numero => {
		const indice = numero.toString();

		/* Si el resultado no se encuentra en el 'array' entonces lo guardamos en el arreglo. */
		if(cache[indice] === undefined){
			cache[indice] = func(numero);
		}else{
			// Si ya existe entonces lo retornamos.
			cache[indice];
		}
	}
};

// Funcion la cual realiza un trabajo lento.
const tardado = numero => {
	let suma = 0;

	for(let i = numero - 1; i >= 0; i--){
		for(let j = i - 1; j >= 0; j--){
			suma += (20*12);
		}
	}

	return suma;
}

// La funcion recibe un callback y lo ejecuta para comparar los datos.
memoizer(tardado(9000));