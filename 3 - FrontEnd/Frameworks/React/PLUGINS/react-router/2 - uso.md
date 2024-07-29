### ===================================== ###
###### ===--- Definir las rutas ---=== ######
### ===================================== ###

###### --- --- --- --- --- --- {proyecto}/src/App.jsx --- --- --- --- --- --- ######

```jsx
	import React from 'react';
	import ReactDOM from 'react-dom';

	import reportWebVitals from "./reportWebVitals";

	/**
	 * Importamos las siguientes clases.
	 */
	import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

	// Estos son los componentes los cuales utilizaremos como paginas.
	import Home from './pages/home';
	import About from './pages/about';
	import Contact from './pages/contact';
	import Error404 from "./pages/404";

	// Componentes que estaran presentes en todas las paginas.
	import Header from './components/header';
	import Footer from './components/footer';

	ReactDOM.render(
		<React.StrictMode>

			{/* Este componente debe envolver toda la aplicacion, (para que funcione el enrutamiento). */}
			<Router>
				{/* Este componente se muestra en todas las paginas. */}
				<HeaderComponent/>
				
				{/* Define las rutas y asigna el componente a mostrar de cada una. */}
				<Routes>
					{/* Muestra el contenido segun la ruta especificada. */}
					<Route path="/" element={<Home/>}/>
					<Route path="/about" element={<About/>}/>
					<Route path="/contact" element={<Contact/>}/>
					<Route path="*" element={ <Error404/> }/>
				</Routes>

				<Footer/>
			</Router>

		</React.StrictMode>,
		document.getElementById('root')
	);

	reportWebVitals();
```
# NOTA: Solo podemos tener una definicion (Route) en la aplicacion, no definas en mas de un componente.
# Solo utiliza la clase (Route) una vez.

###### --- --- --- --- --- --- {proyecto}/src/componets/header.jsx --- --- --- --- --- --- ######

<!-- Digamos que tenemos un componente llamado (header). -->

```jsx
	import React from "react";

	// Importa la clase (Link) para utilizar la redireccion.
	import { Link } from 'react-router-dom';

	export default function Header(){
		return (
			<nav>
				<ul>
					{/* Podemos utilizar la forma tradicional para navegar entre nuestras paginas. */}
					<li>
						<a href="/">Inicio</a>
					</li>
					{/* Esta es otra forma donde podemos navegar utilizando la clase (Link). */}
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		);
	};
```