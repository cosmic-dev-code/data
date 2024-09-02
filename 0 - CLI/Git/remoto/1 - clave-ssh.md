### ===================================== ###
###### ===--- Configurar claves ---=== ######
### ===================================== ###

La clave [](SSH) se utiliza para autenticarse en un *servidor Git remoto*, permitiendo a los usuarios interactuar con un repositorio Git alojado en un servidor externo, como GitHub, Bitbucket o GitLab.

La clave [](SSH) se utiliza en lugar de un nombre de usuario y contraseña para *autenticar la conexión*.

Con una clave [](SSH), los usuarios pueden: 
	--- Clonar un repositorio.
	--- Realizar cambios en sus archivos y subir los cambios de regreso al servidor remoto sin tener que autenticarse en cada operación.

# ---------------------------------- #
# ------ Ver todas las claves ------ #
# ---------------------------------- #

<!-- Muestra las claves existentes que hemos creado. -->

```sh
	ls -al ~/.ssh
```

<!-- Tambien es posible ver las claves creadas en la siguiente ruta: 
	---	C:\Users\{usuario}\.ssh -->

# NOTA: De ser primera vez, (es posible que no tengas claves).

# ---------------------------- #
# ------ Generar claves ------ #
# ---------------------------- #

<!-- Vamos a una ruta especifica para generar las claves. -->

```sh
	# En la carpeta (Example) generaremos nuestras claves.
	cd Desktop/Example/
```

<!-- Para generar una nueva clave (SSH), (no olvides cambiar el correo). -->

```sh
	ssh-keygen -t ed25519 -C "brandonolivares.developer@gmail.com"
```

Ahora pedira el *nombre del archivo* que contendra las claves (publica) y (privada).
Lo creamos en la ruta [](Desktop/Example).

```sh
	# Este es el nombre del archivo contendra nuestras claves dentro de la ruta (Desktop/Example).
	# Puede ser cualquier nombre, incluso (keysbrand).
	> id_ed25519
```

<!-- Pedira un password para el archivo para protejer las claves, (parecido a un password). -->

# NOTA: No es obligatorio y puedes decidir no ingresar nada.

```sh
	# Ingresar password.
	> password_github

	# Confirmacion del password.
	> password_github
```

<!-- Tras aceptar las hubicaciones por defecto ahora ejecutamos los comandos.
Para agregar la clave SSH a tu agente SSH: -->

```sh
	# Inicia el agente y establece las variables de entorno necesarias.
	eval "$(ssh-agent -s)"
```

<!-- Ahora agregamos las claves privadas al agente de autenticación SSH en nuestro sistema. -->

Si creaste el archivo desde la base, entonces la ruta es: 
	- **ssh-add ~/.ssh/id_ed25519**
	- **Clave para subir todos los repositorios de git sin aitenticarte en cada uno de ellos.**
Pero si lo creaste en (Desktop/Example), la ruta es: 
	- **ssh-add ~/Desktop/Example/id_ed25519**
	- **Clave solo para autenticarte en un proyecto, tendras que generar un par de claves para y drla de alta en github**.

```sh
	# El comando (ssh-add) y frente a el la ruta de tu archivo.
	ssh-add ~/Desktop/Example/id_ed25519

	# Te pedira el password, (si lo hay) para agregar las claves al agente SSH en tu sistema.
	> password_github
```

# ---------------------------- #
# ------ Ver claves SSH ------ #
# ---------------------------- #

Para ver la clave [](privada) ejecuta.

```sh
	cat ~/.ssh/id_ed25519
```

La clave que aparecera en consola, es algo como lo siguiente.

```sh
	# ----- BEGIN OPENSSH PRIVATE KEY ------
	b3BlbnNzaC1rZXktdjEAAAAACmFlczI1Ni1jdHIAAAAGYmNyeXB0AAAAGAAAABCHUNXAzB
	tsg9t31vZ3EHsRAAAAGAAAAAEAAAAzAAAAC3NzaC1lZDI1NTE5AAAAIMfbMxD1ophEhdL2
	4+/GNg20KoglKFcy8YJYGA8NHc6DAAAAsBbNoNEYaEafEHawsOB4j2kGg9Qvppttfeitv5
	ccgfEmX158eyfjoeFrm9zz1ybxFRwtHTHcuY5kBkP0jjTQYJ/z3Nz0CbHjeRb8lNrKeP9v
	WbZwHGOxtDxuAZ0nozRsQIQdUH2W10UMD2iVV0jopgtsdcoxzex/wwvR5Uw2H4URsvDI2+
	8oFMMuHIij2kNbDHlTRBVUTiy+btG/vFBMidx9ENT6k43tvHEQQvWdN7rM
```

La clave [](publica) puede verse ejecutando.

```sh
	cat ~/.ssh/id_ed25519.pub
```

Muestra algo como lo siguiente

```sh
	ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIABM/WM1++3fa3mjZzJLZ9zr4IBE/MZ3fMpFLCgf7NEG usuario@example.com
```

# ----------------------------- #
# ------ Utilizar claves ------ #
# ----------------------------- #

### 1 - Iniciamos sesion en [](github).

### 2 - En la parte derecha superior del (header) en la fotografia, damos click.

### 3 - En (settings).

### 4 - En la parte derecha, en el (aside), damos click en (SSH and GPG Keys).

### 5 - Damos click en (New SSH Key).

### 6 - Colocamos en (title) un titulo representativo de la clave. Y en el textarea del (key), colocamos la clave: 

***title:*** 
	Clave para mi primer proyecto
***public key:*** 
	ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIABM/WM1++3fa3mjZzJLZ9zr4IBE/MZ3fMpFLCgf7NEG brandonolivares.developer@gmail.com

### 7 - Damos click en (Add SSH Key).

### ================================== ###
###### ===--- Limpiar claves ---=== ######
### ================================== ###

<!-- Si deseas limpiar tus claves SSH, entonces entra al directorio. -->

```sh
	cd ~/.ssh/
```

<!-- Aqui puedes ver tus archivos los cuales contienen tus claves. -->

```sh
	ls
```

<!-- Borra la carpeta. -->

```sh
	rm -f ~/.ssh/*
```

<!-- Es todo lo que tienes que hacer. -->

# NOTA: Esto hazlo cuando has creado otro git y deseas volver a crear las claves o 
# porque eliminaste las que tenias. Recuerda que debes darlas de alta en tu 
# ordenador y en tu GitHub, como se vio en los pasos anteriores.