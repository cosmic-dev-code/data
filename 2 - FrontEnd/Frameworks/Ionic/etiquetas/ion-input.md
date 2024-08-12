### ==================================== ###
###### ===--- Propiedades HTML ---=== ######
### ==================================== ###

<!-- Coloca solo un input sin texto, el input adquiere todo el espacio del contenedor padre, (block). -->

```html
	<ion-input></ion-input>
```

<!-- Coloca un (label) al lado izquierdo del input. -->

```html
	<ion-input label="Ingrese sus nombres: "></ion-input>
```

<!-- Como cualquier input recibe su (type) y (placeholder). -->

```html
	<ion-input type="password" placeholder="Password"  label="Ingrese su password: "></ion-input>
```

<!-- Puede recibir un (value). -->

```html
	<ion-input type="password" placeholder="Password"  label="Ingrese su password: "></ion-input>
```

<!-- Ademas puede recibir identificadores, (id) y (class). -->

```html
	<ion-input label="Ingrese su password: " class="input" id="idInput"></ion-input>
```

# --------------------- #
# ------ Relleno ------ #
# --------------------- #

```html
	<!-- Coloca un background de color gris. -->
	<ion-input label="Relleno" fill="solid"></ion-input>

	<!-- Coloca un borde en toda la caja del input. -->
	<ion-input label="Relleno" fill="outline"></ion-input>
```

<!-- Este es el efecto que se puede lograr, (como lo hace Google con sus inputs). -->

```html
	<ion-input label="Nombres: " label-placement="floating" fill="outline"></ion-input>
```

### ========================= ###
###### ===--- Label ---=== ######
### ========================= ###

<!-- La propiedad (labelPlacement) recibe varios valores: 
	--- (fixed): Donde el texto muy largo del label se corta colocando (...)
	--- (stacked): Coloca el label encima del input y lo hace mas chico, se ilumina en azul al hacer (active).
	--- (floating): El label se coloca en medio del input y al hacer (active) flota hacia arriba a la 
		izquierda haciendose chico. -->

```html
	<ion-input labelPlacement="floating"></ion-input>
	<ion-input label-placement="floating"></ion-input>
```

# ------------------------ #
# ------ Label slot ------ #
# ------------------------ #

<!-- Label normal para un input. -->

```html
	<ion-input label="Email"></ion-input>
```

<!-- Podemos colocar "Slot" para darle estilos al Label. -->

```html
	<ion-input>
		<!-- Este (slot="label") indica que todo el contenido dentro del (div) pertenece al label. -->
		<div slot="label">
			<!-- Podemos colocar dentro del label un icono. -->
			<ion-icon name="key"></ion-icon>
			<span>Ingrese su password: </span>
		</div>
	</ion-input>

	<!-- Tambien podemos cambiar una parte del (label) de otro color. -->
	<ion-input label-placement="floating" value="hi@ionic.io">
		<div slot="label">
			Email <ion-text color="danger">(Required)</ion-text>
		</div>
	</ion-input>
```

# --------------------------------------- #
# ------ Dos slot, (start) y (end) ------ #
# --------------------------------------- #

```html
	<!-- El label queda arriba del input. -->
	<ion-input label-placement="stacked" label="Email" placeholder="email@domain.com">
		<!-- Un icono de candadito al lado izquierdo, (start) del input. -->
		<ion-icon slot="start" name="lock-closed" aria-hidden="true"></ion-icon>
		<!-- Un icono de ojo al lado derecho del input, (end). -->
		<!-- Al boton le quitamos el background, (fill clear). -->
		<ion-button fill="clear" slot="end" aria-label="Show/hide">
			<ion-icon slot="icon-only" name="eye" aria-hidden="true"></ion-icon>
		</ion-button>
	</ion-input>
```

# ------------------------- #
# ------ Helper Text ------ #
# ------------------------- #

<!-- Similar al (label), helper text es un texto de ayuda que se posiciona en la parte inferior del (input). -->

```html
	<ion-label label="Texto la lado izquierdo" helperText="Texto inferior de ayuda"></ion-label>
```

### =============================== ###
###### ===--- Clear input ---=== ######
### =============================== ###

<!-- Los inputs permiten utilizan varias opciones de borrado. -->

```html
	<!-- Muestra una cruz al final del input que permite borrar el contenido al hacer click. -->
	<ion-input [clearInput]="true"></ion-input>
```

```html
	<!-- Borra el contenido cuando se hace click otra vez en el input y se enpieza a escribir. -->
	<!-- Tambien borra el contenido con solo precionar una vez el (Backspace). -->
	<ion-input [clearOnEdit]="true"></ion-input>
```

### ================================ ###
###### ===--- Validaciones ---=== ######
### ================================ ###

# ------------------------ #
# ------ Validacion ------ #
# ------------------------ #

<!-- Indicar el (type) es indistinto. -->

```html
	<!-- (error-text) contiene el texto a mostrar cuando el contenido del input no sea valido. -->

	<!-- (ngModel) y (email) hace una validacion interna del contenido del input, en este caso valida un email. -->
	<ion-input
		errorText="Invalid email"
		error-text="Invalid email" 

		ngModel email
	></ion-input>
```

# ------------------------ #
# ------ Caracteres ------ #
# ------------------------ #

<!-- Al activar (counter) se colocara un maximo de caracteres segun indique (maxlength), ejemplo: 
	--- 0/20 -->

```html
	<!-- Es dinamico, por lo que muestra debajo del input los caracteres restantes: 0/20. -->
	<ion-input label="Default counter" labelPlacement="floating" [counter]="true" maxlength="20"></ion-input>
```

###### --- --- --- --- --- --- {proyecto}/src/app/pages/example/example.page.html --- --- --- --- --- --- ######

<!-- Otra forma de hacerlo seria utilizado codigo TypeScript. -->

```html
	<!-- Volvemos a actvar (counter) con un maximo de caracteres (maxlength). -->
	<!-- (counterFormatter) ejecuta un metodo TypeScript. -->
	<ion-input
		[counter]="true" maxlength="20"
		[counterFormatter]="customCounterFormatter"
	></ion-input>
```

###### --- --- --- --- --- --- {proyecto}/src/app/pages/example/example.page.ts --- --- --- --- --- --- ######

<!-- El metodo contiene lo siguiente. -->

```ts
	import { Component } from '@angular/core';

	@Component({
		selector: 'app-example',
		templateUrl: 'example.component.html',
	})
	export class ExampleComponent {
		// Metodo que ejecuta el (counterFormatter).
		customCounterFormatter(inputLength:number, maxLength:number) {
			// Recibe el total de caracteres en el input y el maximo establecido.
			// Se regresa la diferencia mas un texto y eso es lo que se coloca como texto de ayuda debajo del (input).
			return `${maxLength - inputLength} caracteres restantes.`;
		}
	}
```