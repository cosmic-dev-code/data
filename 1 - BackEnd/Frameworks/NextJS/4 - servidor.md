### ====================================== ###
###### ===--- Cliente y servidor ---=== ######
### ====================================== ###

# Componentes del Cliente ("use client"):

*	Ejecución en el navegador del usuario.
	Incluyen lógica del cliente, como manejadores de eventos y estado local.
	Si un componente del cliente importa otro componente del cliente o del servidor.
	__El código del servidor también se ejecutará en el cliente__.

# Componentes del Servidor:

*	Ejecución en el servidor para generar el HTML inicial.
	No pueden usar lógica específica del cliente.
	Si un componente del servidor importa un componente del cliente, el componente del cliente se incluirá en el HTML generado y luego será hidratado en el navegador.
	__Mientras que el servidor no se convierte en cliente.__

### =============================== ###
###### ===--- Componentes ---=== ######
### =============================== ###

# -------------------------------- #
# ------ Componente Cliente ------ #
# -------------------------------- #

###### --- --- --- --- --- --- {proyecto}/src/app/components/client.js --- --- --- --- --- --- ######

Aqui [](document) y [](window) estan disponibles como en cualquier codigo JavaScript.

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

# NOTA: 
*	Si tratas de utilizar funciones del lado del [](cliente) en un componente sin especificar _use client_, 
	entonces te dara un [](error), ya que el componente no esta declarado como del cliente.

# --------------------------------- #
# ------ Componente Servidor ------ #
# --------------------------------- #

###### --- --- --- --- --- --- {proyecto}/src/app/components/server.js --- --- --- --- --- --- ######

Aqui [](require) esta disponible como en cualquier codigo NodeJS.

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

# -------------------------------- #
# ------ Componente Cliente ------ #
# -------------------------------- #

Antes utilizavamos [](use_effect) para inicializar un componente con los datos por defecto, generalmente 
esto se hacia con [](fetch) cuando queriamos extraer de la [](DB).

###### --- --- --- --- --- --- {proyecto}/src/app/components/client.js --- --- --- --- --- --- ######

```jsx
	"use client";

	import React, { useEffect } from "react";

	export default function Client(){

		// Cuando el componente se inicializa.
		useEffect(async () => {
			// Se extraen datos de alguna base de datos.
			const result = await fetch("https://www.example.com/users"), 
				  data = await result.json();
		});
	}
```

# Esto conyeva sobrecarga para el cliente, quien despues de montar el componente, tambien hace la peticion.

# --------------------------------- #
# ------ Componente Servidor ------ #
# --------------------------------- #

###### --- --- --- --- --- --- {proyecto}/src/app/components/server.js --- --- --- --- --- --- ######

Ahora con los componentes de [](servidor) podemos hacer fetch desde el servidor y este envia al [](cliente).

```jsx
	export default async function Server(){

		// Directamente extrae los datos de alguna base de datos.
		const result = await fetch("https://www.example.com/users"), 
			  data = await result.json();
	}
```