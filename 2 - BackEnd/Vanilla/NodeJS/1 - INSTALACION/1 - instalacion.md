### ======================================== ###
###### ===--- Instalacion de (NVM) ---=== ######
### ======================================== ###

<!-- (nvm) es un manejador de versiones de Node que permite instalar diferentes versiones de Node, 
por consiguiente trabajar con diferentes versiones y cambiar de manera facil entre versiones 
de Node como el proyecto lo requiera. --> 

- Para instalar [](nvm) debes ir a: 
	https://github.com/coreybutler/nvm-windows/releases en la seccion [](assets).

- Descargar la version para windows [](nvm-setup.exe).

- Seguir los pasos de una instalacion normal.

<!-- Ahora comprobamos que (nvm) esta instalado correctamente. -->

```bat
	nvm -v
	: O tambien.
	nvm --version
```

### ========================================= ###
###### ===--- Instalacion por (NVM) ---=== ######
### ========================================= ###

<!-- --------------------------------- -->
<!-- ------ Opciones a instalar ------ -->
<!-- --------------------------------- -->

<!-- Muestra todas las versiones de Node listas para instalar. -->

```bat
	nvm list-remote
```

<!-- --------------------------------------- -->
<!-- ------ Instalar una version Node ------ -->
<!-- --------------------------------------- -->

<!-- Para ver las versiones de Node instaladas. -->

```bat
	nvm list
```

# NOTA: Tienes que ir a la pagina oficial de Node y ver la version LTS actual para instalar.

```bat
	nvm install 20.10.0
```

<!-- Ahora utilizamos una de las versiones que tenemos instaladas. -->

```bat
	nvm use 20.10.0
```

<!-- ----------------------------- -->
<!-- ------ Desistalar Node ------ -->
<!-- ----------------------------- -->

<!-- Desinstalamos Node por (nvm). -->

```bat
	nvm uninstall 20.10.0
```

### ================================================= ###
###### ===--- Otras opciones de instalacion ---=== ######
### ================================================= ###

<!-- ------------------------------------------- -->
<!-- ------ Instalar version Node estable ------ -->
<!-- ------------------------------------------- -->

<!-- (Instala) y (usa) automaticamente la ultima version estable de (Node). -->

```bat
	nvm install stable
	: Comprobar.
	node -v
```

<!-- (Instala) y (usa) automaticamente la version lts de (Node). -->

```bat
	nvm install --lts
	: Comprobar.
	node -v
```

<!-- ------------------------------ -->
<!-- ------ Utilizar (alias) ------ -->
<!-- ------------------------------ -->

<!-- Colocamos un nombre para la version de Node que deseamos instalar. -->

```bat
	: nvm alias {nombre} {version}.
	nvm alias node-version-10 10.20.0
```

<!-- Para utilizar la version instalada podemos referirnos a su (alias). -->

```bat
	: nvm use {nombre}.
	nvm use node-version-10
```

<!-- --------------------------------------------------- -->
<!-- ------ Instalar o utilizar y ejecutar script ------ -->
<!-- --------------------------------------------------- -->

<!-- (Utiliza o instala) una version de Node y ejecuta un script.  -->

```bat
	: nvm run {version} {script}.
	nvm run 14.18.0 app.js
```

### ==================================== ###
###### ===--- Comprobar (Node) ---=== ######
### ==================================== ###

<!-- Ahora comprobamos que estamos utilizando una de las versiones de Node. -->

```bat
	node -v
	: O tambien.
	node --version
```