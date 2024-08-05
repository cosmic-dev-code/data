### ====================================== ###
###### ===--- Archivo Robots.txt ---=== ######
### ====================================== ###

Utiliza el archivo [](robots.txt) para indicar a los motores de búsqueda qué páginas deben o no deben rastrear.

# BENEFICIOS

__(Control de Rastreo):__ 

	Esto evita que los bots gasten tiempo y recursos en rastrear páginas irrelevantes.

__(Optimización del Crawl Budget):__ 

	Optimizar el presupuesto de rastreo al dirigir a los motores de búsqueda hacia las partes más importantes de tu sitio.

__(Prevención de Indexación No Deseada)__

	Puedes evitar que ciertas páginas o secciones se indexen en los motores de búsqueda, puede ser útil 
	para contenido duplicado o páginas de prueba.

__(Indicación de Sitemaps)__

	Puedes facilitar a los motores de búsqueda la localización de tu sitemap, lo que ayuda a 
	asegurar que todas las páginas importantes sean indexadas.

# --------------------- #
# ------ Ejemplo ------ #
# --------------------- #

Se crea en la raiz del proyecto.

###### --- --- --- --- --- --- {proyecto}/public/robots.txt --- --- --- --- --- --- ######

```bat
	: Se aplica a todos los rastreadores de motores de búsqueda.
	User-agent: * 
	: Bloquea el acceso a la carpeta /private/.
	Disallow: /private/
	Disallow: /tmp/
	: Permite el acceso a la carpeta /public/, incluso si se encuentra dentro de una carpeta bloqueada.
	Allow: /public/
	Allow: 
	: Indica donde se encuentra el archivo (sitemap).
	Sitemap: https://www.example.com/sitemap.xml
```

# ------------------------- #
# ------ Modo de uso ------ #
# ------------------------- #

Los robots al visitar tu dominio automaticamente buscaran [](proyecto/public/robots.txt).

	https://www.example.com/robots.txt

# ----------------------------- #
# ------ Consideraciones ------ #
# ----------------------------- #

# NOTA:
	No Garantiza Privacidad, es solo informacion para los motores de busqueda, si tienes informacion sensible y 
	quieres bloquearla, es mejor un sistema de autenticacion, el bloqueo [](Disallow) 
	solo es para los motores de busqueda.

# Sin Archivo robots.txt
	Si no hay un archivo robots.txt en la raíz de tu dominio, los motores de búsqueda asumirán 
	que no hay restricciones y rastrearán todas las páginas a las que tienen acceso.

### ======================================= ###
###### ===--- Archivo sitemap.xml ---=== ######
### ======================================= ###

Por ejemplo, para [](optimizar) y hacer [](automatizacion), podemos generarlo desde el servidor.

###### --- --- --- --- --- --- {proyecto}/php/sitemap.php --- --- --- --- --- --- ######

```php
	// Datos de ejemplo - en un sitio real, esto puede ser consultado desde una base de datos
	$pages = [
	    [
	    	'loc' => 'https://www.example.com/', 
	    	'lastmod' => '2024-08-01', 
	    	'changefreq' => 'daily', 
	    	'priority' => '1.0'
	    ],
	    // ...
	];

	$xml = <<<XML
		<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	XML;

	foreach ($pages as $page){
		$loc = htmlspecialchars($page['loc']);
		$lastmod = htmlspecialchars($page['lastmod']);
		$changefreq = htmlspecialchars($page['changefreq']);
		$priority = htmlspecialchars($page['priority']);

		$xml .= <<<XML
			<url>
				<loc>{$loc}</loc>
				<lastmod>{$lastmod}</lastmod>
				<changefreq>{$changefreq}</changefreq>
				<priority>{$priority}</priority>
			</url>
		XML;
	}

	$xml .= "</urlset>";

	// Nombre del archivo que se generará en la raiz del sitio.
	file_put_contents((__DIR__ . "/sitemap.xml"), $xml);
```

# ------------------------- #
# ------ Modo de uso ------ #
# ------------------------- #

Los robots al visitar tu dominio automaticamente buscaran [](proyecto/public/sitemap.xml).

	Sitemap: https://www.example.com/sitemap.xml

# ----------------------- #
# ------ Resultado ------ #
# ----------------------- #

El resultado deberia lucir como algo asi.

```xml
	<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	    <url>
	        <loc>https://www.example.com/</loc>
	        <lastmod>2024-08-01</lastmod>
	        <changefreq>daily</changefreq>
	        <priority>1.0</priority>
	    </url>
	    <url>
	        <loc>https://www.example.com/about</loc>
	        <lastmod>2024-07-30</lastmod>
	        <changefreq>monthly</changefreq>
	        <priority>0.8</priority>
	    </url>
	</urlset>
```

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