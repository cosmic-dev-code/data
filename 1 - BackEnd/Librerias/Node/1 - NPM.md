### ======================================== ###
###### ===--- Instalacion de (NPM) ---=== ######
### ======================================== ###

Primero debes haber instalado [](NodeJS).

```bat
	node -v
```

Una vez instalado [](NodeJS) procede con la instalacion de NPM.

```bat
	: Instala la ultima version de (NPM) de manera global.
	npm install -g npm
```

### ============================================= ###
###### ===--- Instalacion de (Paquetes) ---=== ######
### ============================================= ###

# ---------------------- #
# ------ Instalar ------ #
# ---------------------- #

<!-- Para instalar un paquete. -->

```bat
	: Esta es la forma.
	npm install {nombre-del-paquete}

	: Forma mas acortada.
	npm i {nombre-del-paquete}

	: (-D), instala el paquete en modo de (dependencia).
	npm i {nombre-del-paquete} -D

	: (-E), instala el paquete en modo de (desarrollo).
	npm i {nombre-del-paquete} -E
```

# ------------------------- #
# ------ Desinstalar ------ #
# ------------------------- #

<!-- Desinstalar un paquete -->

```bat
	npm uninstall {nombre-del-paquete}
```