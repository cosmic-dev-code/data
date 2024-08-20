###### --- --- --- --- --- --- {proyecto}/src/index.jsx --- --- --- --- --- --- ######

<!-- Este archivo es el que se ejecuta en todas las paginas de la aplicacion, por lo que todos los componentes 
que se renderizen aqui, se mostraran en todas las paginas. -->

```jsx
	// Estos elementos son importates para renderizar HTML.
	import React from 'react';
	import ReactDOM from 'react-dom';
	import reportWebVitals from "./reportWebVitals"

	// Si quieres utilizar un archivo CSS, lo importas para esta pagina.
	import "./index.css";
	// Componente que se importa para renderizar.
	import App from './App';

	ReactDOM.render(
		<React.StrictMode>

			{/* Aqui se renderizan los componentes. */}

			{/* Por defecto aqui se renderiza el componente (App), que es (App.jsx). */}
			<App/>

		</React.StrictMode>,
		document.getElementById('root')
	);

	reportWebVitals();
```

###### --- --- --- --- --- --- {proyecto}/src/App.jsx --- --- --- --- --- --- ######

<!-- Los componentes como (App.js) son paginas individuales que se mandan a llamar y se renderizan. -->

```jsx
	import React from "react";

	// Esta pagina importa una imagen que ha de utilizar.
	import logo from './logo.svg';
	// Importa su propio archivo CSS, las clases se aplican a este componente y a todos los que renderize aqui.
	import './App.css';

	/**
	 * Todo el Javascript va aqui, en este archivo.
	 * No es necesario importar archivos externos.
	 */

	function App() {
		return (
			// Una etiqueta siempre debe envolver todo el contenido.
			<div className="App">

				{/* Este es el contenido por defecto, (mira que hace uso del logotipo como src). */}
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Edit <code>src/App.js</code> and save to reload.</p>
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
				</header>

			</div>
		);
	}

	export default App;
```