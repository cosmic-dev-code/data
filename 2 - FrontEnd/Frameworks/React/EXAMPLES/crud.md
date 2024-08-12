
<!-- Podemos realizar un CRUD por ejemplo en la raiz de la aplicacion. -->

###### --- --- --- --- --- --- {proyecto}/src/App.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";
	// Estilos globales.
	import "./App.css";

	// Importamos la libreria (axios) para realizar peticiones HTTP.
	import axios from "axios";

	class App extends Component {

		// Propiedades del (state/componente).
	    state = {
	        users: [],
	    };

	    // Obtener los datos al montar el componente dentro del DOM.
	    async componentDidMount(){
	    	// const users = await axios.get("...").data;
	    	const { data: users } = await axios.get("https://api/users");

	    	this.setState({
	    		users // users: users
	    	});
	    }

		/* -------------------------- */
		/* ------ Metodos CRUD ------ */
		/* -------------------------- */

	    // Crear nuevo usuario con el metodo (post) y agregar a los usuarios del (state).
	    handleAdd = async () => {
	    	const newUser = await axios.post("https://api/user/store", {
	    		names: "Brandon", 
	    		age: 22
	    	}).data;

	    	// this.state.users.push(newUser);
	    	const users = [user, ...this.state.users];
	    	this.setState({ users });
	    };

	    // Actualizar un registro y el arreglo de usuarios del (state).
	    handleUpdate = (userUpdate) => {
	    	userUpdate.names = "Anthony";

	    	await axios.put(`https://api/user/${userUpdate.id}`, userUpdate);

	    	// Obtener usuarios.
	    	var users = this.state.users;
	    	// Obtener indice.
	    	var index = this.state.users.indexOf(userUpdate);
	    	
	    	// Acutualizar arreglo con el cambio del indice.
	    	users[index] = { ...userUpdate };

	    	// Actualizar state.
	    	this.setState({ users });
	    };

	    // Eliminar usuario por el metodo DELETE y actualizar el (state) sin el usuario eliminado.
	    handleDelete = (userDelete) => {
	    	await axios.delete(`https://api/user/destroy/${userDelete.id}`, userDelete);

	    	const users = this.state.users.filter(user => user.id !== userDelete.id);

	    	this.setState({ users });
	    };

		/* ------------------------- */
		/* ------ Renderizado ------ */
		/* ------------------------- */

	    render() {
	        return (
	        	// Colocamos el HTML dentro de un (fragmento) para detectarlo como un bloque de datos.
	            <React.Fragment>
	                <button className="btn btn-primary" onClick={this.handleAdd}>
	                    Agregar
	                </button>
	                {/* Dentro de la tabla que muestra los datos. */}
	                <table className="table">
	                    <thead>
	                        <tr>
	                            <th>Título</th>
	                            <th>Actualizar</th>
	                            <th>Borrar</th>
	                        </tr>
	                    </thead>
	                    <tbody>
	                    	{/* Se iteran los datos. */}
	                        {this.state.users.map((user) => (
	                            <tr key={user.id}>
	                                <td>
	                                	<label>{user.names}</label>
	                                </td>
	                                {/* Botones para el CRUD. */}
	                                <td>
	                                    <button onClick={() => this.handleUpdate(user)}>Actualizar</button>
	                                </td>
	                                <td>
	                                    <button onClick={() => this.handleDelete(user)}>Borrar</button>
	                                </td>
	                            </tr>
	                        ))}
	                    </tbody>
	                </table>
	            </React.Fragment>
	        );
	    }
	}

	export default App;
```