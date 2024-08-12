: ##########=====================########## :
: ######===--- Lista de tareas ---===###### :
: ##########=====================########## :

: Lista completa de opciones.
shutdown /?

: Añade un comentario al registro de eventos para el apagado.
shutdown /c "Comentario"

: Especifica el tiempo de espera antes de cerrar todas las aplicaciones y apagar el sistema (en segundos).
: (300s == 5min).
shutdown /s /t 300

: Forzar el cierre de todas las aplicaciones sin esperar a que se cierren.
shutdown /f

: Cierra la sesion de usuario.
shutdown /i
shutdown /l

: Hiberna el equipo local.
shutdown /h

: Configura el reinicio automático después de la actualización de Windows.
shutdown /fw

: -------------------------------- :
: ------ Apagar / Reiniciar ------ :
: -------------------------------- :

: Reinicia el ordenador.
shutdown /r

: Apaga el ordenador.
shutdown
shutdown /s

: Aborta una operación de apagado o reinicio.
shutdown /a