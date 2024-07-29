: ##########============================########## :
: ######===--- Operadores aritmeticos ---===###### :
: ##########============================########## :

set /a operacion=1

: Operador (+): Representa la suma.
set /a operacion= (5 + 5)

: Operador (-): Representa la resta.
set /a operacion= (5 - 5)

: Operador (*): Representa la multiplicacion.
set /a operacion= (5 * 5)

: Operador (/): Representa la division.
set /a operacion= (5 / 5)

: ##########========================########## :
: ######===--- Operadores logicos ---===###### :
: ##########========================########## :

: Operador (==): Igual que.
if 5==5

: Operador (not): Invierte el resultado a su contraparte.
if not 5==5

: Operador (equ): Equivalencia.
if 5 equ 5

: Operador (neq): No es igual que.
if 5 neq 5

: Operador (lss): Menor que.
if 5 lss 5

: Operador (gtr): Mayor que.
if 5 gtr 5

: Operador (leq): Menor o igual que.
if 5 leq 5

: Operador (geq): Mayor o igual que.
if 5 geq 5

: ---------------------------------- //
: ------ Mas de una condicion ------ //
: ---------------------------------- //

: Ambas condiciones deben cumplirse para ejecutar. (AND)
if 5==5 (
	if 10 leq 20 (
		set class=child
	)
)

if 5==5 if 10 leq 20 set class=child

: --------------------------------------------------------------------------------- :

: Resultado.
set res=F

: De acuerdo a que condicional se cumpla es el resultado. (OR)
if %hour% leq 6 set res=T
if %hour% geq 22 set res=T

if %res%==T (
	set state=asleep
)