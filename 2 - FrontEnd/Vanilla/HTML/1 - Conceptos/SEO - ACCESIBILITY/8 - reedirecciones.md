### ========================================= ###
###### ===--- Google Search Console ---=== ######
### ========================================= ###

1. Verifica la propiedad del Sitio en Google Search Console.

	_Debes asegurarte de que tu sitio web esté verificado._

2. Enviar el sitemap.xml.

	_Después de enviar tu sitemap, Google Search Console te permitirá ver si ha sido procesado correctamente y si hay problemas. Puedes ver información sobre las páginas que se han rastreado e indexado._

3. Verificar el robots.txt.

	_Puedes usar la herramienta de "Probar robots.txt" en Google Search Console para asegurarte de que Googlebot pueda leerlo correctamente._

### ==================================== ###
###### ===--- Reedireccion 301 ---=== ######
### ==================================== ###

Es un tipo de *redirección HTTP* que indica a los navegadores y motores de búsqueda que una 
URL ha sido movida de manera permanente a una nueva ubicación.

# Impacto en SEO

Transmiten casi todo el valor de SEO de la URL antigua a la nueva, ayudando a 
mantener el ranking en los motores de búsqueda.

# ¿Cuándo Usar Redirecciones 301?

1. Cambio de URL: 

	*Cuando cambias la estructura de tus URLs o renombrar páginas.*

2. Migración de Contenido: 

	*Cuando mueves contenido a una nueva ubicación o sitio.*

3. Eliminación de Páginas: 

	*Cuando eliminas páginas, pero quieres asegurarte de que los visitantes y motores de 
	búsqueda sean dirigidos a una página relevante.*

# ---------------------------- #
# ------ Implementacion ------ #
# ---------------------------- #

En el Archivo [](.htaccess) *(para servidores Apache)*.

```sh
	# Redirigir una página antigua a una nueva
	Redirect 301 /pagina-antigua.html https://www.example.com/pagina-nueva.html

	# Redirigir todo un directorio a otro
	Redirect 301 /antiguo-directorio/ https://www.example.com/nuevo-directorio/
```

Aplicacion [](Next.js) *(para servidores Node JS)*.

```js
	module.exports = {
		async redirects() {
			return [
				{
					source: '/pagina-antigua',
					destination: '/pagina-nueva',
					// Esto indica una redirección 301
					permanent: true,
				},
				{
					source: '/antiguo-directorio/:slug*',
					destination: '/nuevo-directorio/:slug*',
					permanent: true,
				},
			];
		},
	};
```

# -------------------------- #
# ------ Verificacion ------ #
# -------------------------- #

# Navegador

	Simplemente prueba accediendo a la URL antigua en tu navegador para asegurarte de que te 
	redirige correctamente a la nueva URL.

# Herramientas de SEO: 

	Usa herramientas como Google Search Console para verificar que las redirecciones están 
	funcionando correctamente y no hay enlaces rotos.

# Informar a Google

	Usa Google Search Console para enviar las nuevas URLs y asegurar que Google actualice 
	sus índices con la nueva estructura del sitio.