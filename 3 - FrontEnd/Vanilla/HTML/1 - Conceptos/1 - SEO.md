### ======================= ###
###### ===--- SEO ---=== ######
### ======================= ###

# ¿Qué es SEO (Search Engine Optimization)?
SEO es la sigla para Search Engine Optimization, que significa "optimización para motores de búsqueda".
Consiste en una serie de técnicas, disciplinas y estrategias de optimización que se implementan en 
las páginas de un sitio web o blog para mejorar su posicionamiento en los buscadores.

# SEO = Posicionamiento orgánico
Como ya sabrás, el SEO se refiere a todas aquellas acciones que puedes tomar dentro o fuera de tu 
sitio web para optimizar su posicionamiento en los buscadores de forma orgánica. Este último 
punto es clave dado que orgánico quiere decir “no pago”.

Con una estrategia SEO tú no le pagas a Google o a cualquier otro motor de búsqueda para ganar 
posiciones en la SERP. Son tus contenidos de valor y tus optimizaciones las que se ganan 
esos lugares por derecho propio.

# SEM = Posicionamiento pago
Por el contrario, el SEM —Search Engine Marketing— se refiere a aquellas estrategias que incluyen 
la utilización de anuncios pagos.

Es decir, con una estrategia SEM creas una campaña publicitaria para que cuando un usuario digite 
una búsqueda, tu sitio aparezca antes que los resultados orgánicos en forma de anuncio, 
siempre y cuando concuerde con la intención de búsqueda del usuario.

### ========================================= ###
###### ===--- Etiquetas Para el SEO ---=== ######
### ========================================= ###

Las etiquetas deben ser utilizadas para lo que fueron hechas, esto mejora el posicionamiento del 
sitio web para la busqueda de los navegadores.

```html
	<!-- Descripcion de la pagina. -->
	<meta name="description" content="descripcion del sitio">

	<!-- Para cuando el sitio we es buscado por el motor y la misma pagina se duplica: 
		--- https://www.miSitio.com
		--- http://www.miSitio.com
		--- https://miSitio.com
		--- https://miSitio.com/index.php
		--- https://miSitio.com/index.php?user=Brandon -->
	<link rel="canonical" href="https://www.miSitio.com">

	<!-- Mostrar la pagina, en el idioma correcto para la audiencia. -->
	<link rel="alternate" hreflang="en" href="https://www.example.com/"/>
	<link rel="alternate" hreflang="es" href="https://www.example.es/"/>

	<!-- Titulo de la pagina. -->
	<title>Titulo de la pagina</title>

	<!-- Encabezados. -->
	<h1>Titulo principal</h1>
	<h2>Sub titulo</h2>
	<h3>Titulo</h3>
	<h4>Titulo</h4>
	<h5>Titulo</h5>
	<h6>Titulo</h6>

	<!-- Colocar textos alternativos para cuando se busca imagenes en el navegador, tambien para colocar un texto 
	alternativo en caso de que la imagen no cargue. -->
	<img src="url.extension" alt="Texto alternativo">

	<!-- Etiquetas de (no seguimiento), para ayudar al SEO. -->
	<a href="https://www.example.com" rel="external nofollow">Enlace</a>

	<!-- Enlaces dentro del mismo sitio. -->
	<a href="https://www.miSitio.com">Enlaces</a>
```