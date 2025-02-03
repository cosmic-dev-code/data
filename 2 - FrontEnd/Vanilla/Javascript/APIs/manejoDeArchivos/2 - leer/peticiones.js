/* ##########============########## */
/* ######===--- Imagen ---===###### */
/* ##########============########## */

fetch('https://example.com/image.png')
    .then(response => 
        // Puedes obtener la imagen como un (Blob).
        response.blob()
    ) 
    .then(blob => {
        // Tenemos la URL.
        const url = URL.createObjectURL(blob);

        /**
         * Puedes conocer la relacion de una (imagen).
         */

        // Crear y dar URL.
        const image = new Image();
        image.src = url;

        // Cuando la imagen carge obtenemos su relacion de aspecto.
        image.onload = function(){
            image.width;
            image.heigth;
        }
    })
    .catch(error => console.error('Error al obtener la imagen:', error));