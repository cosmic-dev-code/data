###### --- --- --- --- --- --- {proyecto}/src/components/formulario.jsx --- --- --- --- --- --- ######

```jsx
	import React, { useState } from "react";
	import Alert from "./alert";

	// Importamos el objeto de la libreria (joi) que nos permitira hacer validaciones.
	import Joi from "joi-browser";

	export default const Formulario = () => {

		/**
		 * Propiedades del componente.
		 */

		var [cuenta, setCuenta] = useState({
			nombre: "", 
			password: ""
		});
		var [errores, setErrores] = useState({});

		/**
		 * Reglas de validacion.
		 */

		const reglasCuenta = {
			// Aqui se validan cada una de las propiedades agregand la validacion y el mensaje de (error).
			nombre: Joi.string().required().LabeL("Nombre de usuario"), 
			password: Joi.string().required().LabeL("Password")
		};

		/**
		 * Validaciones.
		 */

		const validate = () => {
			/* Pasamos: 
				--- Las propiedades a validar.
				--- Las reglas de validacion.
				--- Opciones. */
			var error = Joi.validate(cuenta, reglasCuenta, {abortEarly: false});

			// Si no hay errores, entonces retorna un valor nulo.
			if(!error) return null;

			// De tener errores entonces...

			let erroresActuales = {};

			for(let detail of error.details){
				// Se crea cada propiedad en el objeto de error: {"nombre": "mensaje"}.
				erroresActuales[item.path[0]] = detail.message;
			}

			// Retornar objeto de errores actuales.
			return erroresActuales;
		};

		const validateProperty = ({ name, value }) => {
			// Se crea un objeto.

			// var obj = {}; 
			// obj[input.name] = input.value;
			var obj = { [name]: value };

			// Se valida el (obj) de acuerdo a las reglas de validacion.

			// { "propiedad impresa": reglasCuenta[name] }
			let error = Joi.validate(obj, { [name]: reglasCuenta[name] }).error;

			return (error ? error.details[0].message : null);
		};

		/**
		 * Eventos del componente.
		 */

		function handleSubmit(event){
			event.preventDefault();

			// Al hacer (submit) se recibe el nuevo objeto de errores, (con o sin errores).
			setErrores(
				validate() || {}
			);

			if(Object.keys(errores).length > 0) return void 0;

			// Se ejecuta el resto del codigo...
		}

		function handleChange({ currentTarget: input }){
			// Se hace una copia de las propiedades.
			const newCuenta = { ...cuenta };

			// Validar al hacer un cambio.
			let errMessage = validateProperty(input); // "string" | null

			if(!errMessage){
				// Se hace un cambio.
				newCuenta[input.name] = input.value;

				// Se actualizan las propiedades.
				setCuenta(newCuenta);
			}
		}

		return (
			// (handleSubmit) validara y tomara.
			<form action="#" onSubmit={handleSubmit}>
				<div>
					{/* (handleChange) validara y tomara el valor en tiempo real. */}

					<input 
						type="text" 
						name="nombre" 
						onChange={handleChange} 
						value={cuenta.nombre} 
					/>
					{/* Si hay un error especifico se imprime el componente de alerta. */}
					{ errores.nombre && <Alert color="danger" message={errores.nombre}/> }

					<input 
						type="password" 
						name="password" 
						onChange={handleChange} 
						value={cuenta.password} 
					/>
					{ errores.password && <Alert color="danger" message={errores.password}/> }
				</div>
				<div>
					{/* Si (validate) devuelve el objeto de errores, entonces es [true]. */}
					{/* Si devuelve (null) entonces no hay errores y es [false]. */}
					<input type="submit" value="Ingresar" disabled={validate()}>
				</div>
			</form>
		);
	};
```