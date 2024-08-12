### ========================== ###
###### ===--- Docker ---=== ######
### ========================== ###

Es una plataforma que permite crear, desplegar y ejecutar aplicaciones en contenedores.
Empaquetan todo el software necesario para que una aplicación funcione en diferentes entornos.

# --------------------------------------------- #
# ------ Problemas al NO utilizar Docker ------ #
# --------------------------------------------- #

Cuando un grupo de desarrolladores trabaja en un proyecto, son propensos a:

	1. Diferentes sistemas operativos o versiones.

	2. Diferentes dependecias del proyecto o versiones.

Esto puede ocasionar problemas de compatibilidad y por ende cada desarrollador esta sujeto a instalar 
lo mismo y con las mismas versiones.

# ---------------------- #
# ------ Solucion ------ #
# ---------------------- #

Para esto, docker funciona como una [](maquina_virtual) con un sistema operativo basado en [](Linux), 
no es una maquina virtual, pero funciona como una.

La virtualizacion de Docker permite almacenar dentro de la [](imagen): 

	1. Mismo sistema operativo. (Linux).

	2. Mismo proyecto.

	3. Mismas dependencias.

	4. Mismas versiones.

Cada [desarrollador] baja su propia [](imagen) y corre la maquina virtual en su computadora, sin necesidad 
de instalar todo lo relacionado al proyecto.

# Asi garantizamos que todos tengan exactamente lo mismo sin tener problemas de [compatibilidad].

### ================================ ###
###### ===--- Contenedores ---=== ######
### ================================ ###

# -------------------- #
# ------ Imagen ------ #
# -------------------- #

Las imagenes son archivos de solo lectura que contienen: 

	1. Sistema operativo (Linux basico).

	2. Codigo del proyecto.

	3. Dependencias del proyecto.

	4. Configuraciones.

# (Plantilla): Esta imagen es la que se comparte para crear contenedores.
# Veamos la imagen como un [](Repositorio_Base).

# ------------------------ #
# ------ Contenedor ------ #
# ------------------------ #

# Son capas de imagenes

La primera capa es la [distribucion de Linux], (el sistema operativo).

Se le conoce como [](Alpine_Linux) y es muy ligero.

Luego la capa de nuestra [](aplicacion) en ejecucion.

### ============================================== ###
###### ===--- Distintas Virtualizaciones ---=== ######
### ============================================== ###

El sistema operativo [](Anfitrion) es el del hardware y el o los invitado(s), el [](Cliente).

# Virtualización Completa

Emula un hardware completo, permite que sistemas operativos invitados funcionen de manera independiente 
del sistema operativo anfitrión.

	Ejemplos: VMware, VirtualBox.

# Virtualización Parcial (o Paravirtualización)

Modifica el sistema operativo invitado para que se comunique más eficientemente con el hipervisor, 
reduciendo la sobrecarga. 

	Ejemplos: Xen.

# Virtualización de Contenedores

No emula hardware ni modifica el sistema operativo invitado; en su lugar, aísla las aplicaciones 
en contenedores que comparten el mismo sistema operativo anfitrión, [](Kernel).

	Ejemplo: Docker.

*De modo que Docker es un poco mas eficiente y rapido al tener menos sobrecarga*.

### ================================== ###
###### ===--- Virtualizacion ---=== ######
### ================================== ###

En nuestra computadora [](Hardware) podemos hacer uso de estos contenedores, comprendamos las diferencias.

# ----------------------------- #
# ------ Maquina Virtual ------ #
# ----------------------------- #

- Normalmente instalas.
	- [](Aplicaciones): Codigo y dependencias del proyecto.
	- [](Kernel): Comunica el Hardware con las aplicaciones.

# Razon por la cual pesa muchos (gigabityes).

# -------------------- #
# ------ Docker ------ #
# -------------------- #

- Las imagenes de Docker solo instalan. 
	- [](Aplicaciones) y utliza el kernel del sistema en el cual se ha instalado.

# Razon por la cual pesa algunos cientos de (megabytes).

### ================================== ###
###### ===--- Pros de Docker ---=== ######
### ================================== ###

# Consistencia en Entornos

Asegura que las aplicaciones funcionen de la misma manera en diferentes entornos (desarrollo, pruebas, producción).

# Aislamiento

Mantiene las aplicaciones y sus dependencias aisladas unas de otras, evitando conflictos.

# Portabilidad

Permite ejecutar aplicaciones en cualquier lugar que soporte Docker, sin preocuparse por diferencias en el sistema operativo.

# Escalabilidad

Facilita el escalado y la administración de aplicaciones a gran escala a través de contenedores.