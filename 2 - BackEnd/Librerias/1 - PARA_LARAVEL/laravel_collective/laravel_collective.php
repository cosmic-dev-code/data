<?php

/* ##########===================================########## */
/* ######===--- ¿Que es (Laravel Collective)? ---===###### */
/* ##########===================================########## */

/* (Laravel Collective) es una libreria de (PHP) para (Laravel) la cual proporciona formularios con un token en 
especifico, de esta manera ya no debemos especificar el token, los 'ids' y demas, esta especialmente 
hecho para (Laravel).

/* ##########=======================########## */
/* ######===--- Formulario normal ---===###### */
/* ##########=======================########## */

/* Esta es una forma de crear un formulario totalmente valido en (Laravel). */ ?>

@if(session('successfull'))
	<div class="py-4 px-10 text-center bg-blue-500 rounded m-3">
		<strong class="text-bold text-white">{{ session('successfull') }}</strong>
	</div>
@endif

<form action="{{ route('usuarios.update', $usuario) }}" method="POST">
	@csrf
	@method('put')

	<div class="my-3">
		<label for="nombre" class="text-bold">Ingrese su nombre: </label>
		<input type="text" name="nombre" id="nombre" placeholder="Nombre" class="py-2 px-4 shadow rounded">
		@error('nombre')
			<div class="text-center my-2">
				<span class="text-red-600 bg-red-300 py-2 px-3 rounded-full">{{ $message }}</span>
			</div>
		@enderror
	</div>

	<div class="my-3">
		<label for="email" class="text-bold">Ingrese su correo: </label>
		<input type="email" 
			name="email" 
			id="email" 
			placeholder="Correo" 
			value="email@example.com" 
			class="py-2 px-4 shadow rounded"
		>
		@error('email')
			<div class="text-center my-2">
				<span class="text-red-600 bg-red-300 py-2 px-3 rounded-full">{{ $message }}</span>
			</div>
		@enderror
	</div>

	<div class="my-3">
		<label for="password" class="text-bold">Ingrese su password: </label>
		<input type="text" name="password" id="password" placeholder="Password" class="py-2 px-4 shadow rounded">
		@error('password')
			<div class="text-center my-2">
				<span class="text-red-600 bg-red-300 py-2 px-3 rounded-full">{{ $message }}</span>
			</div>
		@enderror
	</div>

	<div class="my-3">
		<span>Seleccione su genero: </span>
		<label class="block my-2">
			<input type="radio" checked="" name="genero" value="h"><span class="inline-block mr-2"> Hombre</span>
			<input type="radio" name="genero" value="m"><span> Mujer</span>
		</label>
		@error('genero')
			<div class="text-center my-2">
				<span class="text-red-600 bg-red-300 py-2 px-3 rounded-full">{{ $message }}</span>
			</div>
		@enderror
		<span>Seleccione su experiencia: </span>
		<label class="block my-2">
			<div class="my-1">
				<input type="checkbox" name="exp[]" value="cpp"><span class="">C++</span>
			</div>
			<div class="my-1">
				<input type="checkbox" name="exp[]" value="cs"><span class="">C#</span>
			</div>
			<div class="my-1">
				<input type="checkbox" name="exp[]" value="c"><span class="">C</span>
			</div>
			<div class="my-1">
				<input type="checkbox" name="exp[]" value="php"><span class="">PHP</span>
			</div>
			<div class="my-1">
				<input type="checkbox" name="exp[]" value="js"><span class="">Javascript</span>
			</div>
			<div class="my-1">
				<input type="checkbox" name="exp[]" value="py"><span class="">Python</span>
			</div>
		</label>
		@error('exp')
			<div class="text-center my-2">
				<span class="text-red-600 bg-red-300 py-2 px-3 rounded-full">{{ $message }}</span>
			</div>
		@enderror
	</div>

	<div class="my-3">
		<label>
			<textarea id="idTextArea" name="idTextArea" class="w-full">Area para escribir</textarea>
			<input type="file" name="file" id="file" class="w-full">
			<input type="hidden" name="user_id" id="user_id" value="{{ auth() -> user() -> id }}">
		</label>
	</div>

	<div class="my-3">
		<label for="color">Elija un color: </label>
		<select name="color" id="color" class="block w-full">
			<option value="red" selected="">Rojo</option>
			<option value="blue">Azul</option>
			<option value="green">Verde</option>
		</select>
	</div>

	<div class="mt-4">
		<input type="submit" value="Enviar" class="py-2 px-4 rounded-full bg-blue-500 text-white text-bold hover:bg-blue-600">
	</div>

</form>

<!-- ##########=======================================########## -->
<!-- ######===--- Formulario con Laravel Collective ---===###### -->
<!-- ##########=======================================########## -->

@php
<?php
	# Ajustes para el formulario.
	$options = array(
		'route' => ['usuarios.update', $usuario],
		'method' => 'put',
		'autocomplete' => 'off', # Para autocompletar textos.
		'files' => true # Para permitir subir archivos.
	);

	# Ajustes para el boton. 
	$arr_button = [
		'class' => 'py-2 px-4 rounded-full bg-blue-500 text-white text-bold hover:bg-blue-600'
	];

	# 'Imaginemos que este arreglo viene desde el servidor'.
	$arr_colors = array(
        'red' => 'Rojo',
        'yellos' => 'Amarillo',
        'green' => 'Verde',
        'blue' => 'Azul',
        'indigo' => 'Indigo',
        'purple' => 'Morado',
        'pink' => 'Rosa'
	);
?>
@endphp

@if(session('successfull'))
	<div class="py-4 px-10 text-center bg-blue-500 rounded m-3">
		<strong class="text-bold text-white">{{ session('successfull') }}</strong>
	</div>
@endif

<!-- Abrimos nuestroformulario con sus respectivos ajustes, por defecto el metodo suele ser (Post), 
por lo que se utiliza un metodo estatico llamado (open), pero solo se utiliza el metodo estatico 
(model) cuando vamos a hacer una peticion distinta a 'POST'. -->
<?= Form::model($options) ?>
	<div class="my-3">
		
		<!-- Creamos una etiqueta (label) con los siguientes parametros: 
			--- El nombre del atributo (name) y (id).
			--- El contenido de la etiqueta.
			--- Un array con los demas atributos, en este caso el atributo (class). -->
		<?= Form::label('nombre', 'Ingrese su nombre:', ['class' => 'text-bold']) ?>

		<!-- Creamos una etiqueta (input) con los siguientes parametros: 
			--- El nombre del atributo (name) y (id).
			--- El atributo (value).
			--- Un array con los demas atributos, en este caso el atributo (class) y (placeholder). -->
		<?= Form::text('nombre', null, ['class' => 'py-2 px-4 shadow rounded', 'placeholder' => 'Nombre']) ?>
		
		@error('nombre')
			<div class="text-center my-2">
				<span class="text-red-600 bg-red-300 py-2 px-3 rounded-full">{{ $message }}</span>
			</div>
		@enderror
	</div>

	<div class="my-3">
		<?= Form::label('email', 'Ingrese su correo:', ['class' => 'text-bold']) ?>
		<?= Form::text('email', 'email@example.com', ['class' => 'py-2 px-4 shadow rounded', 'placeholder' => 'Correo']) ?>
		@error('email')
			<div class="text-center my-2">
				<span class="text-red-600 bg-red-300 py-2 px-3 rounded-full">{{ $message }}</span>
			</div>
		@enderror
	</div>

	<div class="my-3">
		<?= Form::label('password', 'Ingrese su password:', ['class' => 'text-bold']) ?>
		<?= Form::text('password', null, ['class' => 'py-2 px-4 shadow rounded', 'placeholder' => 'Password']) ?>
		@error('password')
			<div class="text-center my-2">
				<span class="text-red-600 bg-red-300 py-2 px-3 rounded-full">{{ $message }}</span>
			</div>
		@enderror
	</div>

	<div class="my-3">
		<span>Seleccione su genero: </span>
		<label class="block my-2">
		<!-- Creamos una etiqueta (radio) con los siguientes parametros: 
			--- El atributo (name) y (id).
			--- El valor de la etiqueta radio.
			--- Un valor booleano que determina si la etiqueta esta seleccionada por defecto.
			--- Un array con los demas atributos de la etiqueta. -->	
			<?= Form::radio('genero', 'h', true, []) ?> <span class="inline-block mr-2"> Hombre</span>
			<?= Form::radio('genero', 'm', false, []) ?> <span> Mujer</span>
		</label>
		@error('genero')
			<div class="text-center my-2">
				<span class="text-red-600 bg-red-300 py-2 px-3 rounded-full">{{ $message }}</span>
			</div>
		@enderror
		<span>Seleccione su experiencia: </span>
		@php<?php
			$arr_values = [
				'C++' => 'cpp', 'C#' => 'cs', 'C' => 'c', 'PHP' => 'php', 'javascript' => 'js', 
				'Python' => 'py'
			];
		?>@endphp
		<label class="block my-2">
			@foreach($arr_values as $index => $value)
				<div class="my-1">
					<!-- Creamos una etiqueta (checkbox) con los siguientes parametros: 
						--- El atributo (name) y (id), (que en este caso es un array).
						--- El valor de la etiqueta checkbox.
						--- Un valor booleano que determina si la etiqueta esta seleccionada por defecto.
						--- Un array con los demas atributos de la etiqueta. -->
					<?= Form::checkbox('exp[]', $value, null, array()) ?><span class="">{{ $index }}</span>
				</div>
			@endforeach
		</label>
		@error('exp')
			<div class="text-center my-2">
				<span class="text-red-600 bg-red-300 py-2 px-3 rounded-full">{{ $message }}</span>
			</div>
		@enderror
	</div>

	<div class="my-3">
		<label>
			<!-- Creamos una etiqueta (textarea) con los siguientes parametros: 
				--- El atributo (name) y (id),
				--- El contenido de la etiqueta (textarea).
				--- Un array con los demas atributos de la etiqueta. -->
			<?= Form::textarea('idTextArea', 'Area para escribir', ['class' => 'w-full']) ?>
			<!-- Creamos una etiqueta (input) de tipo (file) con los siguientes parametros: 
				--- El atributo (name) y (id),
				--- Un array con los demas atributos de la etiqueta. -->
			<?= Form::file('file', array('class' => 'w-full')) ?>

			<!-- Creamos una etiqueta (input) de tipo (hidden) con los siguientes parametros: 
				--- El atributo (name) y (id),
				--- Elcontenido de la caja de texto oculta.
				--- Un array con los demas atributos de la etiqueta. -->
			<?= Form::hidden('user_id', auth() -> user() -> id, []) ?>
		</label>
	</div>

	<div class="my-3">
		<?= Form::label('color', 'Color: ') ?>
		<!-- Creamos una etiqueta (select) con los siguientes parametros: 
			--- El atributo (name) y (id).
			--- El Un array con las opciones, (asosiativo).
			--- La opcion seleccionada por defecto.
			--- Un array con los demas atributos, en este caso el atributo (class). -->		
		<?= Form::select('color', $arr_colors, 'Rojo', ['class' => 'block w-full']) ?>
	</div>

	<div class="mt-4">
		<!-- Creamos una etiqueta (input) de tipo (submit) con los siguientes parametros: 
			--- El atributo (value).
			--- Un array con los demas atributos, en este caso el atributo (class). -->
		<?= Form::submit('Enviar', $arr_button) ?>
	</div>

<!-- Etiqueta de cierre de nuestro formulario. -->
<?= Form::close() ?>