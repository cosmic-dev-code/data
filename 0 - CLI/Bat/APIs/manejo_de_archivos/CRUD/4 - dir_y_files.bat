: ##########===================================########## :
: ######===--- Copiar directorios y archivos ---===###### :
: ##########===================================########## :

: El primer parametro recibe la ruta del archivo que se copiara.
: El segundo parametro recibe la ruta a la que se pegara.
xcopy archivo.txt "nueva carpeta"

: Copia los archivos del (directorio) al (directorio_1)
xcopy /d directorio directorio_1

: Copia los archivos del (directorio) al (directorio_1), (incluyendo las carpetas exepto las vacias).
xcopy /s directorio directorio_1

: Copia los archivos del (directorio) al (directorio_1), (incluyendo las carpetas aunque esten vacias).
xcopy /e directorio directorio_1

: Pide una (confirmacion) antes de copiar los archivos.
xcopy /p directorio directorio_1

: Continúa copiando (incluso si se producen errores).
xcopy /c directorio directorio_1

: Pide al usuario que (presione una tecla antes de copiar).
xcopy /w directorio directorio_1

: (Comprueba el tamaño) de cada archivo nuevo.
xcopy /v directorio directorio_1

: Copia también los (archivos de sistema y los ocultos).
xcopy /h directorio directorio_1

: (Sobrescribe) archivos de solo (lectura).
xcopy /r directorio directorio_1

: (Sobrescribe) los archivos de destino (sin pedir la autorizacion del usuario).
xcopy /y directorio directorio_1

: ##########===================================########## :
: ######===--- Cortar directorios y archivos ---===###### :
: ##########===================================########## :

: Corta y pega el primer archivo a un destino especifico.
move file.txt files/nuevo.txt
move archivos/archivo.txt ../otros/files/archivo.txt

: Tambien puede cortar carpetas y pegarlas en otro lugar.
: NOTA: Mueve los directorios con todo dentro de ellos.
move directorio directorio_1
move directorio mis/carpetas/nuevo directorio

: Verifica la integridad de los archivos movidos.
move /v directorio directorio_1

: Sobrescribe los archivos de destino sin pedir la autorizacion del usuario.
move /y directorio directorio_1

: ##########==================================########## :
: ######===--- Abrir directorios y archivos ---===###### :
: ##########==================================########## :

: Abre una nueva ventana de comandos de (windows).
start

: Abre una nueva ventana de comandos de (windows), con titulo.
start "Titulo de mi ventana de comandos"

: Abre el archivo como tal en la interfaz grafica.
start archivo.txt

: Abre un directorio como tal en la interfaz grafica.
start directorio

: Abre la ventana minimizada.
start /min archivo.txt
start /min directorio

: Amplia la ventana en pantalla completa
start /max archivo.txt
start /max directorio

: Abre la ventana solo en una parte, un espacio de memoria separado, 
: (Lo que tiene por defecto cualquier ventana al abrirla).
start /separate archivo.txt
start /separate directorio

: Abre la ventana solo en una parte, un espacio de memoria compartido, 
: (Lo que tiene por defecto cualquier ventana al abrirla).
start /shared archivo.txt
start /shared directorio

: Abre la ventana nueva y la ventana de comandos anterior espera a que la ventana 
: nueva se cierre para seguir ejecutando los procesos.
start /wait archivo.txt
start /wait directorio