### =================================== ###
###### ===--- Slider (simple) ---=== ######
### =================================== ###

# --------------------------------- #
# ------ Formateo de estilos ------ #
# --------------------------------- #

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

# -------------------------------- #
# ------ Estilos del slider ------ #
# -------------------------------- #

```css
    .slider{
        position: relative;

        /* Elementos en fila sin envolverse. */
        display: flex;

        /* El elemento se ajusta (width: 10 unidades) / (height: 16 unidades) del 100% de su elemento padre. */
        /* (Se puede hacer manualmente). */
        aspect-ratio: 10 / 16;

        /* El ancho del slider, (como el contenedor del carrousel), no queremos que abarque todo el ancho de la pagina, 
        a menos de que muestres mas de un elemento. */
        width: 600px;

        /* Permitimos el scroll para manipular el carrousel. */
        overflow-x: scroll;
        /* El scroll se ajusta en el eje horizontal sin dejar descansar el scroll en un punto intermedio. */
        scroll-snap-type: x mandatory;
        /* Sin cantidad considerada para descansar el scroll en cada elemento. */
        scroll-padding: 0;
        /* Movimiento automatico del scroll de manera suave. */
        scroll-behavior: smooth;
    }

    .slider > img{
    	/* Cada elemento se posiciona encima de su padre pero a la vez manteniendo su espacio. */
        position: sticky;
        /* Colocando cada elemento a la esquina superior izquierda de su padre. */
        left: 0;
        /* El scroll descansa en el (centro) del elemento mas cercano. */
        scroll-snap-align: center;

        object-fit: cover;
        border-radius: 5px;
        width: 100%;
    }
```

# -------------------------------- #
# ------ Marcado del slider ------ #
# -------------------------------- #

```html
	<div class="slider">
        <!-- Colocamos un tamaño fijo a cada imagen. -->
	    <img src="https://baconmockup.com/640/360">
	    <img src="https://baconmockup.com/640/360">
	    <img src="https://baconmockup.com/640/360">
	    <img src="https://baconmockup.com/640/360">
	    <img src="https://baconmockup.com/640/360">
	    <img src="https://baconmockup.com/640/360">
	</div>
```

### ====================================== ###
###### ===--- Agregar (dragging) ---=== ######
### ====================================== ###

```js
    /**
     * 💡 IDEA: Para poder mover el slider primero debemos identificar la posicion exacta del mouse.
     *  --- Desde donde esta arrastrando el usuario, (from).
     *  --- Hacia donde esta arrastrando el usuario. (to).
    */

    const slider = document.querySelector(".slider");

    // Coordenadas del mouse.
    var mouseCoords = { from: 0, to: 0};

    /**
     * Las acciones ocurren mientras el usuario esta presionando el (mouse).
    */

    // Mientras el usuario mantenga presionado el click izquierdo del mouse...
    // Ejecutamos el siguiente codigo una y otra vez hasta que el usuario suelte.
    slider.onmousedown = event => {
        // Extraemos la coordenada actual del mouse en el eje (X) dentro del (slider).
        mouseCoords.from = event.clientX;

        // Cambiamos el cursor del usuario a manita para agarrar.
        slider.style.setProperty("cursor", "grabbing");
    };

    // Cuando el usuario haya soltado...
    slider.onmouseup = event => {
        // Volvemos a extraer la posicion actual del mouse en el eje (X) dentro del elemento (slider).
        mouseCoords.to = event.clientX;
        // Cambiamos el cursor a manita agarrado.
        slider.style.setProperty("cursor", "grab");

        /**
         * Una vez el usuario haya soltado, ejecutamos esta funcion para hacer los calculos y ver hacia donde movio 
         * el usuario el cursor, (posicion inicial hasta posicion final).
        */
        dragMove(event);
    };

    function dragMove(event){
        /**
         * 💡 La idea es la siguiente: 
         *  --- Extraer el ancho total del elemento en pixeles.
         *  --- Dividir en 2 ese ancho total.
         *  --- Determinar en que punto inicio el usuario y en que punto termino, 
         *      (para saber si inicio en una mitad y termino en la otra).
         *  --- Mover el slider.
         * 
         * Si el elemento mide (600px) su mitad es (300px), y cada elemento, en este caso 6, tomara una 
         * parte del ancho del elemento, (scrollWidth / 6) para saber en que posicion se encuentra 
         * cada elemento.
        */

        let width = event.target.getBoundingClientRect().width, 
            middle = (width / 2), 
            widthIndividualElement = (slider.scrollWidth / 6);

        // Si (to / hacia) fue menor o igual a (300) hablamos del lado izquirdo del elemento.
        // Si (from / desde) fue mayor a (300) hablamos del lado derecho.
        // Entonces el usuario comenzo del lado derecho y termino en el izquierdo, arrastrando hacia la izquierda.
        if(mouseCoords.to <= middle && mouseCoords.from >= middle){

            // Movemos el scroll solo un elemento hacia la izquierda.
            slider.scrollTo({
                left: (slider.scrollLeft + widthIndividualElement), 
                behavior: 'smooth'
            });

        // La logica contrara aplica aca.
        }else if(mouseCoords.to >= middle && mouseCoords.from <= middle){

            slider.scrollTo({
                left: (slider.scrollLeft - widthIndividualElement), 
                behavior: 'smooth'
            });

        }
    }
```