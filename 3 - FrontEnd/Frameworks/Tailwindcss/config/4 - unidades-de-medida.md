# -------------------------------- #
# ------ Unidades de medida ------ #
# -------------------------------- #

```js
    module.exports = {
        theme: {
            extend: {
                spacing: {
                    // Las unidades ya existentes como (mt-3, p-4, etc), se sobrescriben.
                    "1": "1rem", 
                    "2": "2rem", 
                    "3": "3rem", 
                    // Puedes definir nuevas unidades de medida.
                    "50p": "50%", 
                    "10px": "10px"
                }
            }
        }
    }
```

# Las medidas definidas aplican para cualquier propiedad que acepte (medidas).

```html
    <div class="
        w-50p
        mx-auto

        mb-3 mt-3

        ml-10px mr-10px
    ">
    </div>
```