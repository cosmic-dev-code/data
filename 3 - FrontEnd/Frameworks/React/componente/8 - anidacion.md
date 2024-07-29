###### --- --- --- --- --- --- {proyecto}/src/components/contador.jsx --- --- --- --- --- --- ######

<!-- Tenemos un componente llamado (Contador). -->

```jsx
	import React, { Component } from "react";

	export default class Contador extends Component {

	    state = {
	    	// (valor) obtendra el valor iniciar por el atributo de la etiqueta.
	    	valor: this.props.value
	    };

	    obtenerValor(){
	    	return this.state.valor;
	    }

	    incremento = () => {
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
	                		<h3>Valor: {this.obtenerValor()}</h3>
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
					{/* Podemos imprimir de esta manera el componente (Contador) que recibe: 
						--- (key), porque ambas etiquetas Contador son iguales, asi que React debe diferenciarlas.
						--- (value), es el parametro que recibe el componente, (props). */}
					<div>
						<Contador key={1} value={6}/>
						<Contador key={2} value={10}/>
					</div>

					{/* Por otra parte podriamos mapear los datos de la propiedad (contadores) de este componente. */}
					<div>
						{/* Se imprime cada etiqueta (Contador) con sus valores. */}
						{ this.state.contadores.map(contador => <Contador key={contador.id} value={contador.value}/> ) }
					</div>
				</section>
			);
		}
	}

	export default Contadores;
```

###### --- --- --- --- --- --- {proyecto}/src/App.jsx --- --- --- --- --- --- ######

<!-- Dado el componente (Contadores) renderiza contenido HTML y al componente (Contador) varias veces, 
es mas comun renderizarlo en este archivo. -->

```jsx
	import React from "react";

	// El componente (Contadores) que manda a llamar dentro de si al componente (Contador).
	import Contadores from "./components/contadores";

	function App() {
		return (
			<div className="App">

				{/* Imprimir componente. */}
				<Contadores/>

			</div>
		);
	}

	export default App;
```