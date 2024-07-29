: ##########===============================########## :
: ######===--- Navegar entre directorios ---===###### :
: ##########===============================########## :

: Muestra la ruta actual en la que nos encontramos.
cd

: Nos direcciona a la raiz de nuestro equipo.
cd /

: Entramos a un directorio.
cd Directorio/
cd Directorio

: Directorio actual
cd .

: Retrocede un directorio atras.
cd ..

: ##########=========================########## :
: ######===--- Obtener informacion ---===###### :
: ##########=========================########## :

: Muestra todos los archivos en dorma de lista.
dir

: Muestra todos los archivos normales.
dir /C

: Muestra solo los archivos (ocultos).
dir /A:H

: muestra todos los archivos y directorios, incluso los ocultos.
dir /A

: muestra el contenido del directorio de forma paginada.
dir /P

: muestra el contenido del directorio en una sola línea.
dir /W

: Muestra todos los archivos ocultos y normales.
dir /C /H

: Muestra a modo de arbol todas las carpetas y archivos.
tree c:\Users\User

: Muestra a modo de arbol todas las carpetas y archivos con diferente formato.
tree c:\Users\User /a

: Verifica que los datos escritos en el disco se grabaron correctamente.
: Muestra si la verificacion esta (activada/desactivada).
verify

: Activa la verificacion.
verify on

: Desactiva la verificacion.
verify off

: Muestra el contenido de un texto plano en consola.
: (CTRL + C), para salir cuando la informacion es muy grande.
more archivo.txt

: Muestra los atributos de los archivos.
attrib carpeta

: Trae un un archivo por lotes y lo ejecuta, dentro 
: del mismo archivo.
call archivo.bat

: ##########===========================########## :
: ######===--- Manipular directorios ---===###### :
: ##########===========================########## :

: ------------------- :
: ------ Crear ------ :
: ------------------- :

: Crea un nuevo directorio en el directorio actual.
: MKDIR [unidad:]ruta
: MD [unidad:]ruta
mkdir nueva_carpeta
md nueva_carpeta

: De esta manera creamos 3 carpetas con un solo comando.
mkdir carpeta_1 carpeta_2 carpeta_3

: Creamos una carpeta con espacios.
mkdir "carpeta de prueba"

: ---------------------- :
: ------ Eliminar ------ :
: ---------------------- :

: Elimina una carpeta
: RMDIR [unidad:]ruta
rmdir nueva_carpeta

: Elimina varias carpetas con un solo comando.
rmdir carpeta_1 carpeta_2 carpeta_3

: De esta manera borramos una carpeta con espacios.
rmdir "nueva carpeta"

: Borra una carpeta con archivos.
rmdir /s "nueva carpeta"

: Borra un directorio sin pedir autorizacion del usuario.
rmdir /s /q "nueva carpeta"

: Borra un directorio pidiendo autorizacion del usuario.
rmdir /s /i "nueva carpeta"

: Borra mas de una carpeta con archivos.
rmdir "Mi carpeta" "Mi otra carpeta" /s

: ##########========================########## :
: ######===--- Manipular archivos ---===###### :
: ##########========================########## :

: ---------------------------- :
: ------ Crear archivos ------ :
: ---------------------------- :

: Crea un nuevo archivo y lo abre.
notepad archivo.txt

: Crea un nuevo archivo vacio.
type nul > archivo.txt
type nul > "archivo con espacio.txt"

: Crea un archivo con texto.
echo Texto para mi archivo > archivo.txt
echo Texto para mi archivo > "archivo con espacio.txt"
: Escribimos una nueva linea.
echo Nueva linea >> archivo.txt
: Crea un srchivo con texto del sistema.
echo > archivo.txt

: Crea un archivo de 1000 bytes de dimension, (coloca espacios dentro del archivo).
fsutil file createnew archivo.txt 1000

: ----------------------------- :
: ------ Copiar archivos ------ :
: ----------------------------- :

: --- Escribir manuealmente ---
: Este comando abrira un editor el cual permitira ingresar texto.
: Podremos movilizarnos hacia la siguiente linea con presionar 
: (ENTER). Pulse (CRL + Z) y despues (ENTER) para guardar 
: las lineas escritas en el archivo.
copy con archivo.txt

: Copia y verifica si el archivo se copio correctamente.
copy /v con archivo.txt

: ------------------------------- :
: ------ Eliminar archivos ------ :
: ------------------------------- :

: Borra un archivo.
del archivo.txt

: Borra un archivo sin pedir la autorizacion del usuario.
del /q archivo.txt

: Borra un archivo pidiendo la autorizacion del usuario.
del /p archivo.txt

: Fuerza la eliminacion de los archivos de solo lectura.
del /f archivo.txt

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

: Pide una confirmacion antes de copiar los archivos.
xcopy /p directorio directorio_1

: Continúa con el proceso de copia incluso si se producen errores.
xcopy /c directorio directorio_1

: Pide al usuario que presione una tecla antes de copiar.
xcopy /w directorio directorio_1

: Comprueba el tamaño de cada archivo nuevo.
xcopy /v directorio directorio_1

: Copia también los archivos de sistema y los ocultos.
xcopy /h directorio directorio_1

: Sobrescribe archivos de solo lectura.
xcopy /r directorio directorio_1

: Sobrescribe los archivos de destino sin pedir la autorizacion del usuario.
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
: (lo que tiene por defecto cualquier ventana al abrirla).
start /separate archivo.txt
start /separate directorio

: Abre la ventana solo en una parte, un espacio de memoria compartido, 
: (lo que tiene por defecto cualquier ventana al abrirla).
start /shared archivo.txt
start /shared directorio

: Abre la ventana nueva y la ventana de comandos anterior espera a que la ventana 
: nueva se cierre para seguir ejecutando los procesos.
start /wait archivo.txt
start /wait directorio