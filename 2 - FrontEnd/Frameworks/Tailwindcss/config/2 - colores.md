# --------------------- #
# ------ Colores ------ #
# --------------------- #

```js
    module.exports = {
        theme: {
            extend: {
                colors: {
                    // Define colores personalizados.
                    primario: "#ff9900", 
                    secundario: "#336699"
                }
            }
        }
    }
```

# Los colores definidos aplican para cualquier propiedad que acepte (colores).

```html
    <div class="
        bg-primario 

        border-primario 

        bg-gradient-to-t from-primario to-secundario
    ">
        <p class="text-secundario">Lorem, ipsum, dolor.</p>
    </div>
```

# ----------------------------- #
# ------ backgroundColor ------ #
# ----------------------------- #

<!-- NOTA: (backgroundColor) es especificamente para fondos, (no en general como [colors]). -->

```js
    module.exports = {
        theme: {
            extend: {
                backgroundColor: {
                    'primary': '#3490dc',  
                    'secondary': '#ffed4a'
                }
            }
        }
    }
```

```html
    <div class="bg-primary">Fondo con color primario</div>
    <div class="bg-secondary">Fondo con color secundario</div>
```

# ------------------------- #
# ------ borderColor ------ #
# ------------------------- #

<!-- NOTA: (borderColor) es especificamente para los bordes, (no en general como [colors]). -->

```js
    module.exports = {
        theme: {
            extend: {
                borderColor: {
                    'primary': '#3490dc', 
                    'secondary': '#ffed4a'
                }
            }
        }
    }
```

```html
    <div class="border-primary">Borde con color primario</div>
    <div class="border-secondary">Borde con color secundario</div>
```

# ----------------------- #
# ------ textColor ------ #
# ----------------------- #

<!-- NOTA: (textColor) es especificamente para los textos, (no en general como [colors]). -->

```js
    module.exports = {
        theme: {
            extend: {
                textColor: {
                    'primary': '#3490dc',  
                    'secondary': '#ffed4a'
                }
            }
        }
    }
```

```html
    <div class="text-primary">Texto con color primario</div>
    <div class="text-secondary">Texto con color secundario</div>
```