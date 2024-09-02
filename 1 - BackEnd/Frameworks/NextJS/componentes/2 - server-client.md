### ====================================== ###
###### ===--- Cliente y servidor ---=== ######
### ====================================== ###

# Componentes del Cliente ("use client"):
<!-- 
	Ejecución en el navegador del usuario.
	Incluyen lógica del cliente, como manejadores de eventos y estado local.
	Si un componente del cliente importa otro componente del cliente o del servidor.
-->
*El código del servidor también se ejecutará en el cliente*

# Componentes del Servidor:
<!-- 
	Ejecución en el servidor para generar el HTML inicial.
	No pueden usar lógica específica del cliente.
	Si un componente del servidor importa un componente del cliente, el componente del cliente se incluirá en el HTML generado y luego será hidratado en el navegador.
-->
*Mientras que el servidor no se convierte en cliente.*

### =============================== ###
###### ===--- Componentes ---=== ######
### =============================== ###

# -------------------------------- #
# ------ Componente Cliente ------ #
# -------------------------------- #

<!-- Aqui (document) y (window) estan disponibles como en cualquier codigo JavaScript. -->

```jsx
	// Componente que accede a funciones de cliente, (codigo Fronted).
	"use client";

	// Codigo de cliente.
	document.getElementById("idClient");
	window.location.href;

	export default function Cliente() {
	  return <div>Componente del Cliente con Lógica de Cliente</div>;
	}
```

# NOTA: Si colocas logica de cliente en servidor sin especificar USE CLIENT, dara error.

# --------------------------------- #
# ------ Componente Servidor ------ #
# --------------------------------- #

<!-- Aqui (require) esta disponible como en cualquier codigo NodeJS. -->

```jsx
	// Importa el cliente.
	import Cliente from './Cliente';

	// Codigo de servidor.
	import os from "os";
	const os = require("os");

	export default function Servidor() {
		return (
			<div>
				{/* Aquí Cliente se incluirá en el HTML enviado al cliente */}
				<Cliente />
			</div>
		);
	}
```

### ================================== ###
###### ===--- Fetch de datos ---=== ######
### ================================== ###

###### --- --- --- --- --- --- {proyecto}/src/app/components/server.js --- --- --- --- --- --- ######

<!-- Podemos hacer fetch desde el (servidor) y enviar al cliente. -->

```jsx
	export default async function Server(){

		// Directamente extrae los datos de alguna base de datos.
		const result = await fetch("https://www.example.com/users"), 
			  data = await result.json();

		return (
			<div>
				{/* ... */}
			</div>
		);
	}
```