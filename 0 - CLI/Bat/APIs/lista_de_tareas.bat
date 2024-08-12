: ##########=====================########## :
: ######===--- Lista de tareas ---===###### :
: ##########=====================########## :

: Muestra todos los procesos/tareas abiertas.
tasklist

: Muestra informacion detallada de cada tarea ejecutandose.
tasklist /v

: Muestra la informacion organizada de una de las posibles maneras: "TABLE", "LIST", "CSV".
tasklist /fo table

: Si se usan los formatos "TABLE" y "CSV", especifica que el "encabezado de columna" no 
: se debe mostrar.
tasklist /nh

: Muestra información adicional de los servicios hospedados en cada proceso.
tasklist /svg

: Muestra todas las tareas que usan el modulo ntdll.dll.
tasklist /M ntdll.dll

: ##########=====================########## :
: ######===--- Finalizar tarea ---===###### :
: ##########=====================########## :

: Finaliza el proceso de esa tarea.
taskkill /im sublime_text.exe

: Cierra el proceso con el número de identidad 1250.
taskkill /pid 1250

: Se debe finalizar un proceso de forma forzada.
taskkill /f 

: Permite seleccionar varias tareas a traves de un filtro, 
: en este caso tareas (que no respondan).
taskkill /fi "status eq Not Responding"

: Cierra la consola de CMD y todos los procesos secundarios iniciados por ella.
taskkill /f /im cmd.exe /t

: Permite detener de forma forzada cualquier script escrito en VBScript de forma 
: forzada que sea imposible finalizar de otro modo.
taskkill /f /im wscript.exe

: Permite cerrar cualquier tarea en Windows que no responde.
taskkill.exe /f /fi "status eq Not Responding"