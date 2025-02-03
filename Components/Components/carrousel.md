### ======================================= ###
###### ===--- Formateo de estilos ---=== ######
### ======================================= ###

```css
    *{
        margin: 0;
        padding: 0;

        /* Importante, para que los elementos hijo del carrousel puedan tener margen o padding sin desbordarse. */
        box-sizing: border-box;

        outline: none;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
    }
```

### ========================================= ###
###### ===--- Estilos del carrousel ---=== ######
### ========================================= ###

```css
    /* Contenedor General. */
    .container{
        display: block;
        width: 100%;
        background-color: #ccc;
    }

        /* Contenedor del carrousel */
        .container-carrousel{
            /* Puede tener el tamaño que sea. */
            width: 50%;
            margin: auto;

            /* Esta propiedad ocultara el desbordamiento del carrousel interno. */
            overflow-x: hidden;
            background-color: #fff;
        }

            .carrousel{
                /* Aqui debe medir el (100% * cantidad de elementos del carrousel), en este caso son 6 elementos.
                    --- (6 * 100% === 600%). */
                width: 600%;
                /* Transicion para cuando este carrousel sea movido y muestre los elementos. */
                transition: 300ms all linear;
            }

                .carrousel-content{
                    display: flex;
                    /* (row) para alinear los elementos horizontalmente, (nowrap) para evitar que los elementos 
                    se envuelvan y lograr que se desborden. */
                    flex-direction: row;
                    flex-wrap: nowrap;
                }

                    /* El (100%) de su padre es (600%). Asi que si colocamos: 
                        --- (max-width: 100%), estamos refiriendonos que abarque los 600% de su padre, 
                        (porque ese es el 100% del padre).
                    Asi que colocamos (100% que serian los 600%) / 6 elementos que tenemos dentro del padre. */
                    .carrousel-content > img{
                        display: block;
                        /* No (width) sino (max-width) para evitar que los elementos tomen mas de lo debido, ya que 
                        con un pequeño desbordamiento los elementos quedaran desalineados. */
                        max-width: calc(100% / 6);
                        /* Nos aseguramos que su ancho minimo tambien sea el asignado, ya que 
                        con un pequeño desbordamiento los elementos quedaran desalineados.  */
                        min-width: calc(100% / 6);

                        /* (min-width), (max-width) y medidas relativas como (%), aseguran que los elementos 
                        mantendran sus dimensiones, lo que garantiza el modo (responsive). */

                        /* Evitamos que los elementos crezcan o disminuyan mas de lo que tienen asignado en su 
                        (max-width) y (min-width), porque un desbordamiento minimo desalinea los elementos. */
                        flex: 1; /* (grow) y (shrink). */
                    }

    center > button{
        padding: 0.6rem 1rem;
    }
```

### ============================================ ###
###### ===--- Etiquetado del carrousel ---=== ######
### ============================================ ###

```html
    <section class="container">

        <!-- Contenedor del carrousel. -->
        <div class="container-carrousel">
            <!-- Carrousel que oculta su contenido desbordado. -->
            <article class="carrousel">
                <!-- Contenido que se desborda del carrousel. -->
                <div class="carrousel-content">
                    <!-- Elementos, en este caso (6) elementos que tienen un ancho de (100% / 6). -->
                    <img src="https://baconmockup.com/640/360">
                    <img src="https://loremflickr.com/640/360">
                    <img src="https://baconmockup.com/640/360">
                    <img src="https://loremflickr.com/640/360">
                    <img src="https://baconmockup.com/640/360">
                    <img src="https://loremflickr.com/640/360">
                </div>
            </article>
        </div>
        <br>
        <!-- Botones del carrousel. -->
        <center>
            <button><</button>
            <button>></button>
        </center>

    </section>
```

### ======================================== ###
###### ===--- Logica del carrousel ---=== ######
### ======================================== ###

```js
    // Este es el carrousel que estaremos moviendo de un lado para otro para mostrar su contenido.
    const $carrousel = document.querySelector(".carrousel");

    // Indica el elemento del carrousel en el que nos encontramos.
    let position = 0, 
    // Contiene la cantidad de elementos del carrosel.
        countElements = $carrousel.getElementsByTagName("img").length; // 6

    // Boton izquierdo.
    document.querySelectorAll("button")[0].onclick = event => {
        /* Si la posicion mayor a 0, significa que no estamos al principio de los elementos, asi 
        que podemos retroceder. */
        if(position > 0){
            /* Restamos (100%) a la posicion actual del elemento, (recordemos que son 6 posiciones y cada una 
            contiene 100% del 600% de su padre). */
            position -= 100;

            /* Si estabamos en la posicion (200), significa que estabamos en la (2): 
                --- (0, 1, 2).
                --- (200 - 100 = 100).
                --- (100% / 6) === (16.67%).
                --- El (.carrousel-content) mide (600%), por lo que el padre (.carrousel) mide tambien (600%) ya que contiene 
                    a su hijo que se desborda, (solo que lo esconde).
                --- Recordemos que cada elemento del carrousel mide (100% de su padre / 6) que seria (600% / 6).
                --- Entonces al mover al padre un (16.67%), estamos moviendo elemento, por elemento. */
            $carrousel.style.transform = `translateX(calc(-${position}% / ${countElements}))`;
        }
    };

    // Boton derecho.
    document.querySelectorAll("button")[1].onclick = event => {
        /* Recordemos que (length) devuelve un numero de mas, no comienza de cero, asi que le restamos uno.
            --- 5, (contando el 0 como uno), (5 * 100 = 500).
            --- Si la posicion es igual o mayor a 500, entonces ya llegamos al final y no hay porque continuar avanzando. */
        if(position < ((countElements - 1) * 100)){
            // Sumamos para el siguiente elemento.
            position += 100;
            // Movemos el carrousel un elemento siguiente.
            // Siempre sera (-) y no (+) porque el carrousel siempre se movera de derecha a izquierda.
            // Y la primera instancia siempre comienza desde el cero.
            $carrousel.style.transform = `translateX(calc(-${position}% / ${countElements}))`;
        }
    };
```