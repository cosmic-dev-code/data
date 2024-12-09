### =============================== ###
###### ===--- Sitemap.xml ---=== ######
### =============================== ###

# ------------------------ #
# ------ Beneficios ------ #
# ------------------------ #

(Mejor Indexación):

<!-- Facilita a los motores de búsqueda encontrar e indexar todas las páginas importantes de tu sitio. -->

(Estructura del Contenido):

<!-- Proporciona una estructura clara de tu sitio, lo que ayuda a los motores de búsqueda a entender 
la relación entre las diferentes páginas. -->

(Prioridades y Frecuencia de Actualización):

<!-- Puedes especificar la prioridad y la frecuencia de actualización de cada página, 
ayuda a los motores a entender cuáles son las más importantes y con qué frecuencia deben revisarlas. -->

(Contenido Multimedia):

<!-- Permite incluir contenido multimedia (como imágenes y videos), lo que ayuda a indexar estos 
tipos de contenido de manera más eficiente. -->

(Notificación de Cambios):

<!-- Puedes utilizar el sitemap para notificar a los motores de búsqueda sobre cambios recientes 
en tu sitio, como nuevas páginas o modificaciones en el contenido. -->

(Compatibilidad con Herramientas SEO):

<!-- Facilita la integración con herramientas como Google Search Console, donde puedes enviar tu 
sitemap para ayudar a mejorar el rendimiento de tu sitio en las búsquedas. -->

### ======================================= ###
###### ===--- Archivo sitemap.xml ---=== ######
### ======================================= ###

Por ejemplo, para [](optimizar) y hacer [](automatizacion), podemos generarlo desde el servidor.

# ----------------------- #
# ------ Contenido ------ #
# ----------------------- #

```xml
	<?xml version="1.0" encoding="UTF-8"?>

	<!-- Aqui van las URLs -->
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">

		<!-- URL. -->
	    <url>

	    	<!-- Indica la pagina a indexar. -->
	        <loc>https://www.tudominio.com/</loc>

	        <!-- Ultima modificacion de la pagina, (YYYY-MM-DD). -->
	        <lastmod>2024-10-17</lastmod>
	        <lastmod>2024-10-17T12:00:00+00:00</lastmod>

	        <!-- No es obligatorio, pero ayuda a rastrear la frecuencia con la que cambia la pagina. -->
	        <!-- 
	        	=== (always), la página cambia constantemente.
	        	=== (hourly), la página cambia varias veces al día.
	        	=== (daily), la página cambia una vez al día.
	        	=== (weekly), la página cambia una vez a la semana.
	        	=== (monthly), la página cambia una vez al mes.
	        	=== (yearly), la página cambia una vez al año.
	        	=== (never), la página no cambia.
	        -->
	        <changefreq>monthly</changefreq>

	        <!-- Indica la prioridad de rastreo. -->
	        <!--
				=== (1.0), muy alta prioridad (páginas principales como la página de inicio).
				=== (0.8), alta prioridad (páginas importantes, pero no críticas).
				=== (0.5), prioridad media (páginas de contenido regular).
				=== (0.3), baja prioridad (páginas poco importantes).
	        -->
	        <priority>1.0</priority>
	    </url>
	    <url>
	        <loc>https://www.tudominio.com/ruta1</loc>
	        <lastmod>2024-10-16</lastmod>
	        <changefreq>weekly</changefreq>
	        <priority>0.8</priority>
	    </url>
	    <!-- Otras URLs -->
	</urlset>
```

# NOTA: El [](sitemap.xml) por defecto guarda hasta 50,000 URLs.

# --------------------------- #
# ------ Crear Sitemap ------ #
# --------------------------- #

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