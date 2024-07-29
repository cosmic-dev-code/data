# ---------------------- #
# ------ fontSize ------ #
# ---------------------- #

```js
    module.exports = {
        theme: {
            extend: {
                fontSize: {
                    // Definimos nuevas medidas y las clases predeterminadas como (sm, md y lg) se sobrescriben.
                    "sm": "0.5rem", 
                    "md": "1rem", 
                    "md5": "1.5rem"
                    "lg": "2rem", 
                    "extra-lg": "5rem"
                }
            }
        }
    }
```

# Las medidas definidas aplican para cualquier propiedad que acepte (tamaños de fuentes).

```html
    <div class="
        text-sm 
        text-md 
        text-md5 
        text-lg 
        text-extra-lg
    ">
        <p class="text-secundario">Lorem, ipsum, dolor.</p>
    </div>
```

# ------------------------ #
# ------ fontFamily ------ #
# ------------------------ #

# 1. Descarga la fuente.
# 2. Guardala en tu proyecto, por ejemplo en una carpeta llamada (fonts).
# 3. Crea un archivo CSS e incluye la fuente y despues incluye el archivo al proyecto.
```css
    @font-face {
        font-family: 'CustomFont';
        src: url('proyecto/fonts/fuente.woff2') format('woff2'), url('proyecto/fonts/fuente.woff') format('woff');
        /* Agrega más formatos si es necesario */
        font-weight: normal;
        font-style: normal;
    }
```
```html
    <link rel="stylesheet" href="proyecto/fonts/fuente.css">
```
<!-- O bien agregalo al (styles.css) y asi no tendras la necesidad de utilizar la etiqueta (link) para incluir tu fuente. -->

```bat
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
# 4. Asegurate de que el archivo esta disponible en tu CSS.
# 5. Sigue los pasos para crear clases con fuentes personalizadas.

```js
    module.exports = {
        theme: {
            extend: {
                fontFamily: {
                    /* El (custom) es el identificador donde: 
                        --- (CustomFont) es la fuente definida.
                        --- (sans-serif) la que se utilizara si no esta disponible (CustomFont). */
                    custom: ['CustomFont', 'sans-serif'],
                }
            }
        }
    }
```

```html
    <p class="font-custom">Este texto utiliza la nueva fuente personalizada.</p>
```

# ------------------------ #
# ------ fontWeight ------ #
# ------------------------ #

```js
    module.exports = {
        theme: {
            extend: {
                fontWeight: {
                    // Define pesos de fuente personalizados y asigna valores numéricos.
                    "light": 300,
                    "medium": 500,
                    "extrabold": 800
                }
            }
        }
    }
```

```html
    <p class="font-light">Texto con peso ligero</p>
    <p class="font-medium">Texto con peso medio</p>
    <p class="font-extrabold">Texto con peso extra-negrita</p>
```

# --------------------------- #
# ------ letterSpacing ------ #
# --------------------------- #

```js
    module.exports = {
        theme: {
            extend: {
                letterSpacing: {
                    "tight": '-0.05em',
                    "normal": '0',
                    "wide": '0.1em'
                }
            }
        }
    }
```

```html
    <p class="tracking-tight">Texto con espaciado ajustado</p>
    <p class="tracking-wide">Texto con espaciado amplio</p>
    <p class="tracking-normal">Texto con espaciado normal</p>
```

# ------------------------ #
# ------ lineHeight ------ #
# ------------------------ #

```js
    module.exports = {
        theme: {
            extend: {
                lineHeight: {
                    "tight": 1.2,
                    "relaxed": 1.75,
                    "loose": 2
                }
            }
        }
    }
```

```html
    <p class="leading-tight">Texto con altura de línea ajustada</p>
    <p class="leading-relaxed">Texto con altura de línea relajada</p>
    <p class="leading-loose">Texto con altura de línea suelta</p>
```