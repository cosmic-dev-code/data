### ========================================= ###
###### ===--- Alertas prefabricadas ---=== ######
### ========================================= ###

###### --- --- --- --- --- --- {proyecto}/src/pages/contact.jsx --- --- --- --- --- --- ######

```jsx
	import React, { Component } from "react";

	// Importa (Swal).
	import Swal from 'sweetalert2'

	export default class Contact extends Component{

		componentDidMount(){

			// Puedes utilizar Sweet Alert2.
            Swal.fire(
                "Titulo", 
                "Mensjae", 
                "success"
            );
            
		}

		render(){
			return <></>;
		}

	}
```