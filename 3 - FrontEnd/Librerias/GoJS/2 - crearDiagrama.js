/* ##########=======================########## */
/* ######===--- Crear un diagrama ---===###### */
/* ##########=======================########## */

/* Instanciamos un objeto de la clase (Diagram), recibe por parametros: 
	--- El 'id' del elemento que contendra el diagrama.
	--- Un objeto con los ajustes del diagrama. */
const diagrama = new go.Diagram('idDiv', {
	// Esta propiedad habilita el (Ctrl Z) y el (Ctrl Y).
	"undoManager.isEnabled": true 
});

/* Dentro de la propiedad (model) colocamos un objeto de tipo (Model), recibe por parametro: 
	--- Los elementos que se encuentran en el diagrama. */
diagrama.model = new go.Model(new Array(
	{key: "Item #0"},
	{key: "Item #1"},
	{key: "Item #2"}
));