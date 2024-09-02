### ================================= ###
###### ===--- Una propiedad ---=== ######
### ================================= ###

###### --- --- --- --- --- --- {proyecto}/src/components/formulario.jsx --- --- --- --- --- --- ######

<!-- Hacer un Binding simplemente utilizando (onchange) hacia una propiedad del (state). -->

```jsx
	import React, { Component } from "react";

	export default class Formulario extends Component{

		state = {
			// Valor por defecto de la propiedad (name).
			name: "Nombre"
		};

		// Funcion que se pasa a un evento (onChange).
		handleChange({ currentTarget: input }){

			// Aqui se recibe el input que disparo el evento.
			//  	--- input = param.currentTarget;

			// Cambiamos el valor de la propiedad.
			this.setState({
				name: input.value
			});
		}
		render(){
			// Al modificar la propiedad (setState), el componente vuelve a renderizarse.

			return (
				<form>
					
					{/* El input por valores recibe: 
						--- value === Propiedad (name).
						--- (onChange) actualiza el valor de la propiedad (name). */}
					<input type="text" value={this.state.name} onChange={this.handleChange}>

					{/* Podemos imprimir el valor de la propiedad en tiempo real. */}
					<div>{ this.state.name }</div>

				</form>
			);
		}
	}
```

### =================================== ###
###### ===--- Mas propiedades ---=== ######
### =================================== ###

###### --- --- --- --- --- --- {proyecto}/src/components/vista.jsx --- --- --- --- --- --- ######

<!-- Hacer un Binding simplemente utilizando (onchange) hacia una propiedad del (state). -->

```jsx
	import React, { Component } from "react";

	export default class Formulario extends Component{
		state = {
			// Propiedades.
			cuenta: {
				name: "", 
				password: ""
			}
		};

		// Activar con evento (onChange).
		handleChange({ currentTarget: input }){
			// Recibir los valores actuales.
			const cuenta = this.state.cuenta;

			// cuenta.[nombre de input] = input.value
			cuenta[input.name] = input.value;

			// Actualizar el objeto del (state).
			this.setState({ cuenta });
		}

		render(){
			// Recordemos que el componente se renderiza cuando una propiedad cambia.
			const cuenta = this.state.cuenta;

			return (
				<form>
					<input 
						type="text" 
						caption="Nombre" 
						name="name" 
						value={cuenta.name} // Nombre de propiedad
						onChange={this.handleChange} // Valor a adquirir para setear.
					/>
					<input 
						type="password" 
						caption="Contraseña" 
						name="password" 
						value={cuenta.password} 
						onChange={this.handleChange}
					/>
				</form>
			);
		}
	}
```

### ============================= ###
###### ===--- Funcional ---=== ######
### ============================= ###

```jsx
	import React, { useState } from "react";

	export default function Component(){

		let [cuenta, setCuenta] = useState({
			// Propiedades.
			cuenta: {
				name: "", 
				password: ""
			}
		});

		// Activar con evento (onChange).
		function handleChange({ currentTarget: input }){
			// Recibir los valores actuales.
			const cuenta = this.state.cuenta;

			// Asignar valor a propuedad.
			cuenta[input.name] = input.value;

			// Actualizar el objeto del (state).
			setCuenta(cuenta);
		}

		// Aqui se renderizan los inputs se renderizan recibiendo los valores de (state).
		return {
			return (
				<form>
					<input 
						type="text" 
						caption="Nombre" 
						name="name" 
						value={cuenta.name} // Nombre de propiedad
						onChange={handleChange} // Valor a adquirir para setear.
					/>
					<input 
						type="password" 
						caption="Contraseña" 
						name="password" 
						value={cuenta.password} 
						onChange={handleChange}
					/>
				</form>
			);
		}
	}
```