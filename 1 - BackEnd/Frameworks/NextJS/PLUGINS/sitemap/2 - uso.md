### ================================= ###
###### ===--- Configuracion ---=== ######
### ================================= ###

```js
	module.exports = {
	    siteUrl: "https://web.excel.network/", 
	    generateRobotsTxt: true, 
	    sitemapSize: 50000, 
	    
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
	    robotsTxtOptions: {
	        additionalSitemaps: [
	            `https://web.excel.network/sitemap-0.xml`
	        ]
	    }
	};
```