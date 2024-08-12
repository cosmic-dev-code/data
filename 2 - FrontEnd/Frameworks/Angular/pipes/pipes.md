<!-- Los pipes son la manera en que se muestran los datos en la interfaz, cada 
pipe tiene la capacidad de modificar los datos segun la necesidad. -->

###### --- --- --- --- --- --- {proyecto}/src/app/app.component.html --- --- --- --- --- --- ######
```html
	<section>
		<div>
			<!-- El filtro (uppercase) convierte el valor en mayúsculas. -->
			<p>{{ names | uppercase }}</p>
			
			<!-- El filtro (lowercase) convierte el valor en minúsculas. -->
			<p>{{ names | lowercase }}</p>
			
			<!-- El filtro (currency) convierte el valor en formato de dolar. -->
			<p>{{ price | currency }}</p>
			
			<!-- El filtro (json) convierte el valor en una cadena de texto JSON. -->
			<p>{{ obj | json }}</p>
			
			<!-- El filtro (limitTo) convierte el valor a un número 
			específico de carácteres. -->
			<p>{{ names | limitTo: 6 }}</p>
			
			<!-- El filtro (number) convierte el valor numérico a texto. -->
			<p>{{ 556 | number }}</p>

			<!-- Muestra una fecha de manera valida para el usuario. -->
			<p>{{ new Date() | date }}</p>

			<!-- Muestra la fecha en un formato especifico, ejemplo: 2022/10/24 -->
			<p>{{ new Date() | date: "yyyy/dd/mm" }}</p>
		</div>
	</section>
```