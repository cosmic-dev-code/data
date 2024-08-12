# --------------------- #
# ------ screens ------ #
# --------------------- #

```js
    module.exports = {
        theme: {
            extend: {
                screens: {
                    'sm': '640px',  // Punto de quiebre para pantallas (pequeñas)
                    'md': '768px',  // Punto de quiebre para pantallas (medianas)
                    'lg': '1024px', // Punto de quiebre para pantallas (grandes)
                    'xl': '1280px', // Punto de quiebre para pantallas (extra grandes)
                    '2xl': '1536px', // Punto de quiebre para pantallas (doble extra grandes)
                    '3xl': '1600px', // Punto de quiebre para pantallas (triple extra grandes)
                }
            }
        }
    }
```

```html
    <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <!-- El ancho del elemento será la mitad en pantallas pequeñas, un tercio en pantallas medianas,un cuarto en 
        pantallas grandes y un quinto en pantallas extra grandes. -->
    </div>
```