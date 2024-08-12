### ========================================= ###
###### ===--- Instalacion por (npm) ---=== ######
### ========================================= ###

Instalamos NextJS.
	- [](create-next-app): Crea un proyecto de Next JS.
	- [](latest): Extrae la ultima version estable.

```bat
	npx create-next-app@latest nombre-de-mi-app

	: Nos preguntara si deseamos el proyecto con TypeScript.
	> No

	: Luego si queremos el proyecto con ESLint, (un Linter).
	> Yes

	: Tailwindcss
	> Yes

	: Carpeta (src) para el proyecto.
	> Yes

	: (App Router), enrutamiento por archivos.
	> Yes

	: Si queremos importar con 'alias', evitando (./rutas) optando por (@).
	> No
```

Podemos ver las opciones que tenemos, normalmente muestra: 
	[](start): Para correr el servidor de (produccion).
	[](dev): Para correr el servidor de (desarrollo).
	[](built): Para compilar todos los archivos.
	[](lint): Para correr el Linter.

```bat
	npm run
```

Ahora procedemos a correr el servidor.

```bat
	npm run dev
```

Next.js [](local)

	- http://localhost:3000