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

		// Al cambiar el valor del input, (HTMLInputElement) el cual se recibe por parametro en el (handleChange).
		handleChange({ currentTarget: input }){
			// Cambia el valor de la propiedad del (state/componente).
			this.setState({
				name: input.value
			});
		}

		// Aqui se renderizan los inputs se renderizan recibiendo los valores de (state).
		render(){
			/* NOTA: Recordemos que al alterar una propiedad del (state/componente), 
			el componente se vuelve a renderizar. */

			return (
				<form>
					
					{/* El input por valores recibe: 
						--- El valor de la propiedad (name) del state cada vez que se renderiza el componente.
						--- (onChange) actualiza la propiedad (name) del state y se renderiza el componente. */}
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

	// Importar un componente de input.
	import textbox from "./controls/textbox";

	class Formulario extends Component{

		state = {
			// Objetos con propiedades a las cuales se les hara (Binding).
			cuenta: {
				name: "", 
				password: ""
			}
		};

		// Al actualizar algun campo con este metodo como evento, se recibe el elemento.
		handleChange({ currentTarget: input }){
			const cuenta = this.state.cuenta;

			// Actualizar el campo segun el (name), ejemplo: cuenta.password = input.value;
			cuenta[input.name] = input.value;

			// Actualizar el objeto del (state).
			this.setState({ cuenta });
		}

		// Aqui se renderizan los inputs se renderizan recibiendo los valores de (state).
		render(){
			const cuenta = this.state.cuenta;

			return (
				<form>
					<textbox 
						type="text" 
						caption="Nombre" 
						name="name" 
						value={cuenta.name} 
						onChange={this.handleChange}
					/>
					<textbox 
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

	export default Formulario;
```

###### --- --- --- --- --- --- {proyecto}/src/components/controls/input.jsx --- --- --- --- --- --- ######

<!-- Componente para inyectar un (input). -->

```jsx
	import React, { Component } from "react";

	export default const textbox = ({ caption, name, type, value, onChange }) => {
		return (
			<div className="form-control">
				<label htmlFor={name} className="text-label">{caption}</label>
				<input autofocus type={type} onChange={onChange} name={name} value={value} className="textbox">
			</div>
		);
	};
```