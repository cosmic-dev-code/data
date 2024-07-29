
CosmicStorage.add({
	names: "Brandon Anthony", 
	surnames: "Olivares Amador", 
	age: 22
});
// Agrega un nuevo objeto en el (storage) convertido en cadena.

let register = CosmicStorage.get(1);
// Devuelve el primer registro.

	register.key; // Llave del registro.
	register.register; // El objeto almacenado en el (storage).

CosmicStorage.getAll();
// Devuelve un arreglo con todos los objetos de registro.

CosmicStorage.delete(1);
// Elimina un registro del (storage).

CosmicStorage.clear();
// Elimina todos los registros del (storage).

CosmicStorage.has();
// Devuelve un valor booleano que verifica si el (storage) tiene registros o no.

let data = CosmicStorage.getData();
// El metodo (getData) devuelve un objeto con todos los registros en el (storage).

	data.dataString;
	// Devuelve los registros en forma de arrays anidados.

	data.toTextXML();
	// Devuelve los registros en un (string) con formato (XML).

	data.toDocumentXML();
	// Devuelve los registros en un objeto DOM XML.

	data.toFileXML();
	// Abre un documento XML con todos los registros en una nueva ventana.