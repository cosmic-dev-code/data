/* ##########===============########## */
/* ######===--- Formatear ---===###### */
/* ##########===============########## */

// Formatea un numero a valores especificos.

/* ##########=================########## */
/* ######===--- Tipo Moneda ---===###### */
/* ##########=================########## */

// ------------------------------------- //
// ------ Dólares Estadounidenses ------ //
// ------------------------------------- //

/* El (NumberFormat) permite formatear un numero a tipo (moneada), recibe: 
	--- El ideoma del tipo de moneda.
	--- Ajustes.
		--- Tipo de formato:
			--- (currency): Tipo moneda.
			--- (decimal): Número decimal.
			--- (percent): Porcentaje.
			--- (unit): Unidad (longitud, área, peso, etc.).
		--- Tipo de cambio.
			--- (USD): Dólares estadounidenses.
			--- (EUR): Euros.
			--- (JPY): Yenes japoneses.
			--- (MXN): Pesos mexicanos.
			--- (GBP): Libras esterlinas.
			--- (y otros códigos de moneda según la norma ISO 4217). */
const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});

formatter.format(123456.789); // "$123,456.79"

// ------------------- //
// ------ Euros ------ //
// ------------------- //

const euroFormatter = new Intl.NumberFormat('de-DE', {
	style: 'currency',
	currency: 'EUR',
});

euroFormatter.format(123456.789); // "123.456,79 €"

// ----------------------- //
// ------ Mexicanos ------ //
// ----------------------- //

const formatter = new Intl.NumberFormat('es-MX', {
	style: 'currency',
	currency: 'MXN',
});

formatter.format(123456.789) // "$123,456.79"