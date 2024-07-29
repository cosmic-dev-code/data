### ======================== ###
###### ===--- NOTA ---=== ######
### ======================== ###

La API de PayPal es [](gratuita) para integrar a tus proyectos siempre y cuando cumplas con las condiciones 
y politicas que PayPal impone.

Sin embargo, __PayPal cobra una comision por cada transaccion que se realice__.

### ============================================ ###
###### ===--- Crear cuenta en (PayPal) ---=== ######
### ============================================ ###

<!-- Para crear una pasarela de pagos con: -->
*	--- (PayPal).
*	--- (Targeta de credito).

<!-- Debemos ir al sitio web de (PayPal) y seguir los siguientes pasos: -->

*	--- https://www.paypal.com/mx/webapps/mpp/account-selection
*	--- Crear una cuenta de (Negocio/Business).
*	--- Debemos ir a (paypal developer): 
*		--- https://developer.paypal.com/home/
*	--- Iniciar sesion.

### ================================================ ###
###### ===--- Crear cuenta de (aplicacion) ---=== ######
### ================================================ ###

<!-- En (sandbox) son los modos de prueba. En (live) es el modo produccion.

Tenemos una aplicacion por defecto la cual podemos utilizar, o podemos crear una, (todo en modo sandbox).

Al dar 'click' a la aplicacion, nos dara la siguiente informacion: -->

En la seccion __(Apps & Credentials)__. Dentro de __(Default Application)__.

# Credenciales de prueba.

*	--- App Name: [](Nombre_De_La_Aplicacion).
*	--- Client ID: [](AR0H6JqJlWlpWue7NQwA9iUei8nNDvFx2kNG53CqgGOXGy4sFVTsyNy-tWO7qLaQD4XIwFxyTZkaCKVm).
*	--- Secret Password: [](EAuIq22SFzs5Yho8Eafy2SBQDGTy471YADgdhKXwScSM0kF1Zf348jCLClHxULR9h-HIyKs9_Y2gEp9O).

# Informacion de la cuenta.

*	--- Sandbox URL: [](https://sandbox.paypal.com).
*	--- Sandbox Region: [](MX).
*	--- Email: [](sb-t3m43x21649975@business.example.com).
*	--- Password: [](FvH#F>4A).

### ===================================== ###
###### ===--- Cuentas de prueba ---=== ######
### ===================================== ###

Debemos ir a la seccion de __(Testing Tools -> Sandbox Accounds)__. Ahi tenemos dos cuentas: 
*	--- La de un vendedor: [](Business).
*	--- La de un cliente: [](Personal).

<!-- En los tres puntitos (:) y en la opcion (View accound/Editar cuenta), podemos ver tanto el correo y 
password de cualquiera de las dos cuentas de prueba:  -->

*	--- __Email (ID)__: sb-ds0q821501990@personal.example.com
*	--- __Password generado__: [][fWPul0-S]

<!-- Lo demas se hace en el codigo. -->