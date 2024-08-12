### ======================================= ###
###### ===--- Valores arbitrarios ---=== ######
### ======================================= ###

<!-- Los valores arbitrarios son literalmente valores personalizados que pueden aplicarse a las directivas. -->

<!-- [Entre corchetes] se escribe el valor que se le dara a la propiedad. -->

# -------------------------------- #
# ------ Unidades de medida ------ #
# -------------------------------- #

```html
	<div class="w-[2rem] h-[30px]">
		<!-- Donde: 
			--- (width): 2rem;
			--- (height): 30px; -->
	</div>

	<!-- En este ejemplo (top), (bottom) y (left) utilizan valores arbitrarios, (personalizados). -->

	<section class="relative">
		<article class="absolute top-[3rem] bottom-[0] left-[-1rem] right-0"></article>
	</section>


	<!-- Tambien funciona con fuentes. -->

	<h1 class="text-[3.5rem]">Hola mundo</h1>
```

# --------------------- #
# ------ Colores ------ #
# --------------------- #

<!-- Funciona con los fondos y textos. -->

```html
	<div class="bg-[#bada55]">
		
		<p class="text-[#fff]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque vel non veniam neque excepturi dignissimos voluptatibus nulla, ex dolorum itaque atque? Quis veniam, eum enim ea rem aut, ex officia.</p>

	</div>
```

# ----------------------- #
# ------ Variables ------ #
# ----------------------- #

<!-- Los valores arbitrarios son capaces de soportar variables. -->

<!-- Tenemos una variable. -->

```css
	:root{
		--my-color: blue;
		--my-text-color: blue;
	}
```

<!-- Utilizamos la variable en el HTML como valor arbitrario. -->

```html
	<div class="bg-[--my-color]">
		<h1 class="text-[--my-text-color]">Hola mundo</h1>
	</div>
```

# ------------------------------ #
# ------ Pseudo elementos ------ #
# ------------------------------ #

<!-- No se limita unicamente a los elementos, sino tambien a los pseudo elementos. -->

```html
	<div class="before:content-['Festivus']">
		<!--
			div::before{
				content: 'Festivus'
			}
		-->
	</div>
```

# -------------------------------- #
# ------ La funcion (theme) ------ #
# -------------------------------- #

<!-- Digamos que en tu archivo de configuracion tienes algunos valores definidos para las utilidades. -->

```js
	module.exports = {
		theme: {
			spacing: {
				'1': '8px',
				'2': '12px',
				'3': '16px',
				'4': '24px',
				'5': '32px',
				'6': '48px',
				// ...
				'32': '256px', // Este es el valor que utilizaremos.
			},
			extend: {
				// otras personalizaciones del tema ...
			},
		},
		variants: {},
		plugins: []
	}
```

<!-- Podemos utilizar cualquiera de los valores para la propiedad que deseemos, (siempre y cuando el valor corresponda 
	a la tipo de propiedad). -->

```html
	<!-- Aqui referenciamos a nuestro archivo de tema, la: 
		--- Propiedad (theme).
			--- Propiedad (spacing).
				--- Propiedad (32) la cual devuelve (256px). -->
	<div class="w-[theme('spacing.32')]">
		<!-- Resultado: 

			div{
				width: 256px;
			}

		-->
	</div>
```

<!-- NOTA: La funcion (theme) solo funciona con los valores arbitrarios, dentro de los [corchetes]. -->