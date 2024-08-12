# ---------------------------- #
# ------ backdropFilter ------ #
# ---------------------------- #

```js
    module.exports = {
        theme: {
            extend: {
                backdropFilter: {
                	// Definimos los valores de la utilidad.
                	none: "none", 
                	"blur-sm": "blur(1px)", 
                	"blur-md": "blur(3px)", 
                	"blur-lg": "blur(6px)", 
                	"blur-xl": "blur(10px)", 
                	"blur-2xl": "blur(20px)", 
                	"blur-3xl": "blur(30px)"
                }
            }
        }
    }
```

```html
	<!-- Hacemos uso de la utilidad. -->
    <div class="backdrop-none"></div>

    <div class="backdrop-blur-sm"></div>
    <div class="backdrop-blur-lg"></div>
    <div class="backdrop-blur-3xl"></div>
```