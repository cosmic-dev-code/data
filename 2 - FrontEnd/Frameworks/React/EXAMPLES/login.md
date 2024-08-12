###### --- --- --- --- --- --- {proyecto}/src/login.jsx --- --- --- --- --- --- ######

```jsx
	import React, { useState } from 'react';

	// Libreria para hacer peticiones HTTP.
	import axios from 'axios';

	function Login(){
		// Propiedades del componente.
		const [username, setUsername] = useState('');
		const [password, setPassword] = useState('');

		/**
		 * Al hacer (submit).
		 */
		const handleSubmit = async (event) => {
			event.preventDefault();
			
			try{
				// Hacemos la peticion para el login pasando el (usuario): 
				//    --- {username: username, password: password}
				const response = await axios.post('http://localhost:3000/login', { username, password });
				
				// Guardar el token devuelto en el LocalStorage.
				localStorage.setItem('token', response.data.token);
				
				// Redirigimos al usuario a la página protegida.
				window.location.href = '/protegido';
			}catch(e){
				console.error(e);
			}
		};

		return (

			/**
			 * Hacer (binding) con (onChange) y setear los valores por medio de (setPropiedad).
			 */
			<form onSubmit={handleSubmit}>
				<label>
					<span>Usuario:</span>
					<input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
				</label>
				<label>
					<span>Contraseña:</span>
					<input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
				</label>
				<button type="submit">Iniciar sesión</button>
			</form>
		);
	}

	export default Login;
```

###### --- --- --- --- --- --- {proyecto}/src/protejido.jsx --- --- --- --- --- --- ######

```jsx
	import React, { useEffect, useState } from 'react';
	import axios from 'axios';

	function Protegido(){
		// Propiedad.
		const [mensaje, setMensaje] = useState('');

		// (useEffect), se ejecuta despues de que el componente se haya renderizado.
		useEffect(() => {
			async function fetchData(){
			  try{
			  		// Extraer token guardado en el Local Storage.
					const token = localStorage.getItem('token');

					if(!token){
						// Si no se proporciona un token, redirigimos al usuario a la página de inicio de sesión.
						window.location.href = '/login';
					} else {
						// Enviamos el token en la cabecera de la solicitud HTTP.
						axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

						const response = await axios.get('http://localhost:3000/protegido');

						// El componente se renderiza con el nuevo valor para (mensaje).
						setMensaje(response.data.message);
					}
				}catch(e){
					console.error(e);
				}
			}

			// Ejecutar peticion.
			fetchData();
		}, []); // Sin dependencias.

		// Imprimir mensaje despues de hacer la peticion.
		return <h1>{mensaje}</h1>;
	}

	export default Protegido;
```