### ================================= ###
###### ===--- Uso de bcrypt ---=== ######
### ================================= ###

# ----------------------- #
# ------ Encriptar ------ #
# ----------------------- #

```js
	// Importamos libreria.
	const bcrypt = require('bcryptjs');

	/* El metodo (hash) recibe: 
		--- El password.
		--- El salto. */
	const passBcrypt = await bcrypt.hash("mi-password", 10);	
```

# ---------------------- #
# ------ Comparar ------ #
# ---------------------- #

```js
	const bcrypt = require('bcryptjs');

	// Comparar password con (password encriptado).
	let isMatch = await bcrypt.compare("mi-password", passBcrypt);

	if(isMatch){
		// El password coincide con el password encriptado.
	}else{
		// No coiciden.
	}
```