### ============================= ###
###### ===--- Anidacion ---=== ######
### ============================= ###

###### --- --- --- --- --- --- {proyecto}/src/components/contador.jsx --- --- --- --- --- --- ######

<!-- Tenemos un componente llamado (Contador). -->

```jsx
	import React, { Component } from "react";

	export default class Contador extends Component {

	    state = {
	    	// (valor) obtendra el valor iniciar por el atributo como <etiqueta>.
	    	valor: this.props.value
	    };

	    obtenerValor(){
	    	return this.state.valor;
	    }

	    incremento = () => {
	    	// Seteamos.
	        this.setState({
	        	valor: (this.state.valor + 1)
	        });
	    }

	    render() {
	        return (
	            <div>
	                <div>
	                	<div>
	                		{/* Imprimir el valor. */}
	                		<h3>Valor: { this.obtenerValor() }</h3>
	                	</div>
	                    <button onClick={ this.incremento }>Incrementar</button>
	                </div>
	            </div>
	        );
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/src/components/contadores.jsx --- --- --- --- --- --- ######

<!-- Tenemos el componente (Contadores) que manda a llamar al componente (Contador). -->

```jsx
	import React, { Component } from "react";

	// Dentro de la misma raiz mandamos a llamar al componente (Contador).
	import Contador from "./contador";

	class Contadores extends Component {
		state = {
			// Inicializamos la propiedad (contadores) dentro del (state/componente).
			contadores: [
				{
					id: 1, 
					value: 6
				}, 
				{
					id: 2, 
					value: 10
				}
			];
		};

		render(){
			return (
				<section>
					{/* INDIVIDUAL */}

					{/* Podemos imprimir de esta manera el componente (Contador) que recibe: 
						--- (key), porque ambas etiquetas Contador son iguales, asi que React debe diferenciarlas.
						--- (value), es el parametro que recibe el componente, (props). */}
					<div>
						<Contador key={1} value={6}/>
						<Contador key={2} value={10}/>
					</div>

					{/* MAPEO */}

					{/* Por otra parte podriamos mapear los datos de la propiedad (contadores) de este componente. */}
					<div>
						{/* Se imprime cada etiqueta (Contador) con sus valores. */}
						{ this.state.contadores.map(contador => (
							<Contador key={contador.id} value={contador.value}/>
						) ) }
					</div>
				</section>
			);
		}
	}

	export default Contadores;
```

### ===================================== ###
###### ===--- Agregar atributos ---=== ######
### ===================================== ###

<!-- Si deseas agregar atributos comunes. -->

###### --- --- --- --- --- --- {proyecto}/src/components/propiedades.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";

	export default class Propiedades extends Component {

	    render() {
	        return (
	            <button 
	            	// Recibe las propiedades.
	            	className={ this.props.className } 
	            	onClick={ this.props.onClick } 
	            	id={ this.props.id }
	            >
	            	<span>Click Aqui</span>
	            </button>
	        );
	    }
	}
```

###### --- --- --- --- --- --- {proyecto}/src/App.jsx --- --- --- --- --- --- ######

```jsx
	import React, { useState } from "react";

	// Importamos el componente.
	import Propiedades from "./components/propiedades";

	function App() {

		let [valor, setValor] = useState(0);

		// Valor que sera modificado por el componente hijo.
		const handleClick = () => setValor(100);

		return (
			<div className="App">

				{/* Le damos al componente sus propiedades. */}
				<Propiedades className="mi-clase" onClick={ handleClick } id="idCom"/>

			</div>
		);
	}

	export default App;
```