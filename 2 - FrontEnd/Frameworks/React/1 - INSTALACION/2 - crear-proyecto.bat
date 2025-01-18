: ------------------------------------------- :
: ------ React instalado (globalmente) ------ :
: ------------------------------------------- :

: Comando para crear un proyecto.
rem NOTA: Es importante mencionar que el nombre del proyecto no debe contener, (mayusculas), (espacios), (simbolos raros), (etc).
create-react-app proyecto

: --------------------------------- :
: ------ Sin React instalado ------ :
: --------------------------------- :

: Crea un proyecto descargando la ultima version de React (sin necesidad de tener React instalado).
: NOTA: El primer uso de este comando puede ser mas lento.
npx create-react-app proyecto

: Crealo por medio de (yarn) si lo prefieres.
yarn create react-app nombre-del-proyecto

: ------------------------------- :
: ------ Ejecutar servidor ------ :
: ------------------------------- :

: Acceder a la carpeta del proyecto.
cd proyecto

: Inicia el servidor, creara un servidor temporal parecido a (http://localhost:3000/).
npm start

rem NOTA: El servidor puede cancelarse utilizando (CTRL + C).