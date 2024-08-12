### =============================== ###
###### ===--- Instalacion ---=== ######
### =============================== ###

# ------------------------------- #
# ------ Instalacion local ------ #
# ------------------------------- #

<!-- Instala Babel en su ultima version de forma local porque es lo que se recomienda. -->

```bat
	npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

<!-- Crea el archivo (.babelrc) desde la (raiz) de tu proyecto y configuralo para transpilar el codigo JavaScript a ES6. -->

```json
	{
		"presets": ["@babel/preset-env"]
	}
```

# -------------------------------- #
# ------ Instalacion global ------ #
# -------------------------------- #

<!-- Se recomienda no hacer esto para mantener un (aislamiento limpio) de proyecto limpio, ademas, podria haber conflicto 
con las diferentes (versiones) del proyecto. -->

```bat
	: Instalacion global.
	npm install -g babel-cli
```

### ================================== ###
###### ===--- Ultima version ---=== ######
### ================================== ###

<!-- Puedes ver todas las versiones de las dependencias instaladas en Babel. -->

```bat
	npm list @babel/core @babel/preset-env
```

<!-- Puedes ver la version de (babel core) y el (preset-env) instaladas. -->

```bat
	npm show @babel/core version
	npm show @babel/preset-env version
```

<!-- Ver la version (global) de Babel. -->

```bat
	babel --version
```

<!-- Ver la version (local) de Babel. -->

```bat
	npx babel --version
```