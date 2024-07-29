
: Muestra la configuracion de la red IP.
ipconfig

: Muesta la direccion fisica, (MAC).
getmac

: Hace 'ping' a una red.
ping
ping 192.168.10.20

: Muestra la tabla de enrutamiento de la red
route print

: Muestra los puertos y conexiones de red activas
netstat

: Abre una conexión a un servidor FTP
ftp

: Muestra la información de configuración del servidor DNS
nslookup

: Muestra información de configuración de DHCP
ipconfig /all

: Muestra el estado de la conexión de red
netsh interface show interface

: Libera la dirección IP asignada por DHCP
ipconfig /release

: Renueva la dirección IP asignada por DHCP
ipconfig /renew

: Restablece la conexión de red
netsh winsock reset

: Borra la caché DNS
ipconfig /flushdns

: Habilita la resolución de nombres de NetBIOS en sistemas con TCP/IP
nbtstat -R