### ================================= ###
###### ===--- Configuracion ---=== ######
### ================================= ###

<!-- Opciones de configuracion para el archivo Sitemap. -->

```js
	module.exports = {
		// Ubicacion del (sitemap.xml).
	    siteUrl: "https://web.excel.network/", 
	    // Indica si queremos el archivo (robots.txt).
	    generateRobotsTxt: true, 
	    // Limite de URLs para el (sitemap.txt).
	    sitemapSize: 50000, 
	    // Agrega los ajustes del archivo (sitemap.xml).
	    additionalPaths: async (config) => {
	        const result = [
				{
					loc: "/ruta-adicional-1",
					changefreq: "daily",
					priority: 0.8,
					lastmod: new Date().toISOString()
				},
				{
					loc: "/ruta-adicional-2",
					changefreq: "weekly",
					priority: 0.6,
					lastmod: new Date().toISOString()
				}
	        ];

	        return result;
	    }, 
	    // Ajustes para el archivo (robots.txt).
	    robotsTxtOptions: {
	        policies: [
	            { userAgent: '*', allow: '/' },
	            { userAgent: 'Googlebot', disallow: '/ruta-secreta/' },
	        ],
	        // Si agregas mas de un archivo Sitemap, puedes indicarlo aqui.
	        additionalSitemaps: [
	            `https://web.excel.network/sitemap-0.xml`
	        ]
	    }
	};
```