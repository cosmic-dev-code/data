### ======================================= ###
###### ===--- El objeto (browser) ---=== ######
### ======================================= ###

**NOTA: Solo disponible en el script del [](background) en segundo plano.**

Es una API de alto nivel que se utiliza en extensiones de navegador para interactuar con el navegador y realizar diversas tareas. El objeto "browser" tiene varias funcionalidades, entre las cuales se destacan:

**Administración de pestañas y ventanas:**
	--- Permite crear, cerrar, mover y cambiar el tamaño de las pestañas y ventanas del navegador.

**Gestión de marcadores:**
	--- Permite crear, eliminar y buscar marcadores del navegador.

**Acceso al historial de navegación:**
	--- Permite acceder al historial del navegador y buscar y filtrar los sitios web visitados.

**Manipulación del almacenamiento local:**
	--- Permite almacenar y recuperar datos en el almacenamiento local del navegador, como el localStorage y el indexedDB.

**Interacción con la interfaz de usuario del navegador:**
	--- Permite mostrar notificaciones y mensajes emergentes al usuario y modificar la apariencia y el comportamiento del navegador.

**Acceso a la red:**
	--- Permite realizar solicitudes HTTP y HTTPS a sitios web externos y recibir y enviar datos a través de protocolos de red como WebSocket.

**NOTA: El objeto [](browser) solo esta disponible en el archivo de fondo, (segundo plano) el (background.js), si se trata 
de utilizar en otros archivos como (popup.js) el objeto browser no funcionara, porque (popup.js) solo esta encargado 
de la pagina de la extension.**

**Tampoco funciona en archivos que acceden al DOM de la pagina actualmente abierta, como el archivo (document.js), 
refiriendonos a los (scripts inyectados en la pagina).**