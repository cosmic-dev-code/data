### ============================= ###
###### ===--- Anidacion ---=== ######
### ============================= ###

###### --- --- --- --- --- --- {proyecto}/src/components/contador.jsx --- --- --- --- --- --- ######

```jsx
	import React, { useState } from "react";

	export default function Contador(props){

		// (valor) obtendra el valor iniciar por el atributo como <etiqueta>.
		let [valor, setValor] = useState(props.value);

	    function obtenerValor(){
	    	return valor;
	    }

	    const incremento = () => setValor(valor + 1);

	    return (
            <div>
                <div>
                	<div>
                		{/* Imprimir el valor. */}
                		<h3>Valor: { obtenerValor() }</h3>
                	</div>
                    <button onClick={ incremento }>Incrementar</button>
                </div>
            </div>
        );
	}
```

###### --- --- --- --- --- --- {proyecto}/src/components/contadores.jsx --- --- --- --- --- --- ######

<!-- Tenemos el componente (Contadores) que manda a llamar al componente (Contador). -->

```jsx
	import React, { useState } from "react";

	// Dentro de la misma raiz mandamos a llamar al componente (Contador).
	import Contador from "./contador";

	function Contadores(){

		// Inicializamos la propiedad (contadores) dentro del (state/componente).
		let [contadores, setContadores] = useState([
			{ id: 1, value: 6 }, 
			{ id: 2, value: 10 }
		]);

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
					{ contadores.map(contador => (
						<Contador key={contador.id} value={contador.value}/>
					) ) }
				</div>
			</section>
		);
	}

	export default Contadores;
```

### ===================================== ###
###### ===--- Agregar atributos ---=== ######
### ===================================== ###

<!-- Si deseas agregar atributos comunes. -->

###### --- --- --- --- --- --- {proyecto}/src/components/propiedades.jsx --- --- --- --- --- --- ######

```jsx
	import React from "react";

	export default function Propiedades(props) {
        return (
            <button 
            	// Recibe las propiedades.
            	className={ props.className } 
            	onClick={ props.onClick } 
            	id={ props.id }
            >
            	<span>Click Aqui</span>
            </button>
        );
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