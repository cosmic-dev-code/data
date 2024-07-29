### ================================= ###
###### ===--- Configuracion ---=== ######
### ================================= ###

<!-- Normamente los mensajes de error que son proporcionados para la directiva (@error) vienen en ingles, 
esta configuracion se encuentra dentro de:  -->

	--- (resources/lang/en).

# NOTA: Si la carpeta no existe, entonces debemos crearla. 

<!-- Debemos duplicar la carpeta y cambiarle el nombre a (es). -->

	--- resources/lang: 
			--- en.
			--- (es).

<!-- Buscamos en internet los archivos en español y reemplazamos los de la carpeta (es). -->

###### --- --- --- --- --- --- {proyecto}/config/app.php --- --- --- --- --- --- ######

```php
    return [

        /*
        |--------------------------------------------------------------------------
        | Application Locale Configuration
        |--------------------------------------------------------------------------
        |
        | Hay mas elementos en este archivo, pero solo mostramos los fundamentales 
        | para este ejercicio.
        |
        */

        // En esta parte le indicamos que queremos utilizar la carpeta (es) y no la "en".
        'locale' => 'es', 
    ]
```

###### --- --- --- --- --- --- {proyecto}/resources/lang/es/validation.php --- --- --- --- --- --- ######

```php
    return [

        // ...

        // En nuestro archivo en español podemos...

        /* Cambiar los atributos de los input, sus campos (name) dandoles nombres en español, de esta manera los 
        mensajes de error vendran en español. */
        'attributes' => [
            'name' => "nombre",
            "surname" => "apellido",
            "password" => "contraseña",
            "password_1" => "repetir contraseña",
            "mail" => "correo"
        ],
    ];
```