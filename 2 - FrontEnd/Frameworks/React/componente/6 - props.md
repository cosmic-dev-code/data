### =============================== ###
###### ===--- Propiedades ---=== ######
### =============================== ###

###### --- --- --- --- --- --- {proyecto}/src/components/my-component.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";

	class MyComponent extends Component {

		// (props) contiene todos los atributos y valores que se pasan por (parametro) al componente.
		// NOTA: La propiedad (props) no puede modificarse directamente como (state).

	    state = {
	    	// (props) contiene (value={6}).
	    	valor: this.props.value
	    };

	    modificar = () => {
	    	// El metodo (setState) permite modificar las propiedades de un componente.
	    	// Cuando eso pasa el componente se renderiza de nuevo.
	        this.setState({
	        	valor: (this.state.valor + 1)
	        });
	    };

	    obtener() {
	    	return this.state.valor;
	    }

	    render() {
	        return (
	            <div>
	                <div>
	                	{/* Con (props) adquirimos (title="Titulo"). */}
	                    <h1>{this.props.title} {this.obtener()}</h1>
	                </div>
	                <div>
	                	{/* Incrementar propiedad (valor) y renderizar el componente para mostrar el nuevo valor. */}
	                    <button onClick={ this.modificar }>Incrementar</button>
	                </div>
	            </div>
	        );
	    }
	}

	// NOTA: Debe exportarse el componente.
	export default MyComponent;
```

###### --- --- --- --- --- --- {proyecto}/src/index.jsx --- --- --- --- --- --- ######

```jsx
	import React from 'react';
	import ReactDOM from 'react-dom';
	
	import reportWebVitals from "./reportWebVitals"

	// Importar el componente creado.
	import MyComponent from "./componets/my-component";

	ReactDOM.render(
		<React.StrictMode>

			{/* En el componente pasamos los valores por JavaScript o XML. */}
			<MyComponent value={6} title="Contador: "/>

		</React.StrictMode>,
		document.getElementById('root')
	);

	reportWebVitals();
```

### ======================== ###
###### ===--- Slot ---=== ######
### ======================== ###

###### --- --- --- --- --- --- {proyecto}/src/components/my-component.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";

	export default class MyComponent extends Component{

		render(){
			return (
				<>
					{/* (children) contiene todo el codigo HTML que se inyecta al componente. */}
					{ this.props.children }
				</>
			);
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/src/index.jsx --- --- --- --- --- --- ######

```jsx
	import React from 'react';
	import ReactDOM from 'react-dom';
	
	import reportWebVitals from "./reportWebVitals"

	// Importar el componente creado.
	import MyComponent from "./componets/my-component";

	ReactDOM.render(
		<React.StrictMode>

			{/* Inyectamos todos los elementos hijo, (children). */}
			<MyComponent>
				<div>
					{/* ... */}
				</div>
			</MyComponent>

		</React.StrictMode>,
		document.getElementById('root')
	);

	reportWebVitals();
```