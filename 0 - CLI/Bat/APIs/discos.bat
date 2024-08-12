: ##########=======================########## :
: ######===--- Cambiar de discos ---===###### :
: ##########=======================########## :

: Describe lo que se encuentra en el disco actual.
dir

: Cambia al disco (E)
E:

: Cambia al disco (D)
D:

: ##########=================########## :
: ######===--- Particiones ---===###### :
: ##########=================########## :

: Entramos al modificador de discos.
diskpart

: Muestra una tabla con las caracteristicas de cada disco.
list disk

: Selecciona un disco.
select disk 1

: Muestra una tabla con las caracteristicas de cada particion 
: del (disco seleccionado).
list partition

: Selecciona una particion del (disco seleccionado).
select partition 1

: Elimina la (particion seleccionada) del (disco seleccionado).
delete partition

: ##########=======================================########## :
: ######===--- Formatear por completo una unidad ---===###### :
: ##########=======================================########## :

: Entramos al modificador de discos.
diskpart

: Muestra una tabla con las caracteristicas de cada disco.
list disk

: Selecciona un disco.
select disk 2

: Formatea de forma permanente el disco seleccionado.
clean

: Crea una nueva particion.
create partition primary

: Selecciona la particion, en este caso la primera.
select partition 1

: Ahora la activamos.
active

: Formatewamos la unidad, (debemos esperar que 
: finalice el proceso).
format fs=ntfs label=Data quick

: Asignamos una letra para la unidad.
assing letter=w

: Salimos de la (Diskpart).
exit