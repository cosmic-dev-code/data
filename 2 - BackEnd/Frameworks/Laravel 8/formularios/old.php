<?php

/* La funcion (old) se caracteriza por mantener los datos que el usuario haya 
agregado previamente en el formulario.

De esa manera cuando el usuario recarga la pagina no se pierden los datos de los inputs. */

######### --- --- --- Archivo (resources/views/misPaginas/usuarios/update.blade.php) --- --- --- ######### ?>

<x-base>
	<x-header></x-header>
	<section>
		<div class="my-3">
			<h3 class="text-6xl text-gray-800 font-bold">Formulario de registro</h3>
		</div>
		<!-- La funcion (old) recibe dos parametros: 
			--- Primero el nombre del campo que va a recibir, (name).
			--- El valor por defecto que recibe nuestro (input). -->
		<form action="<?= route('usuarios.update') ?>" method="POST" class="p-2">
			@csrf
			@method('put')
			<label class="block w-full my-2">
				<span>Nombre: </span>
				<input type="text" name="nombre" placeholder="Nombre" value="<?php old('nombre', ''); ?>">
				@error("nombre")
					<div class="bg-red-600 p-3 w-1/2 mx-auto rounded-lg shadow-md text-center">
						<span class="text-2xl text-white uppercase">{{ $message }}</span>
					</div>
				@enderror
			</label>

			<label class="block w-full my-2">
				<span>Edad: </span>
				<input type="text" name="edad" placeholder="Nombre" value="<?php old('edad', ''); ?>">
				@error("edad")
					<div class="bg-red-600 p-3 w-1/2 mx-auto rounded-lg shadow-md text-center">
						<span class="text-2xl text-white uppercase">{{ $message }}</span>
					</div>
				@enderror
			</label>

			<label class="block w-full my-2">
				<span>Correo: </span>
				<input type="text" name="correo" placeholder="Nombre" value="<?php old('correo', ''); ?>">
				@error("correo")
					<div class="bg-red-600 p-3 w-1/2 mx-auto rounded-lg shadow-md text-center">
						<span class="text-2xl text-white uppercase">{{ $message }}</span>
					</div>
				@enderror
			</label>

			<label class="block w-full my-2">
				<span>Password: </span>
				<input type="text" name="pass" placeholder="Nombre" value="<?php old('pass', ''); ?>">
				@error("pass")
					<div class="bg-red-600 p-3 w-1/2 mx-auto rounded-lg shadow-md text-center">
						<span class="text-2xl text-white uppercase">{{ $message }}</span>
					</div>
				@enderror
			</label>

			<label class="block w-full my-2">
				<span>Repetir password: </span>
				<input type="text" name="pass_1" placeholder="Nombre" value="<?php old('pass_1', ''); ?>">
				@error("pass_1")
					<div class="bg-red-600 p-3 w-1/2 mx-auto rounded-lg shadow-md text-center">
						<span class="text-2xl text-white uppercase">{{ $message }}</span>
					</div>
				@enderror
			</label>

			<div class="mt-3 text-center">
				<button 
					class="py-2 px-4 bg-blue-800 text-white w-1/2 mx-auto rounded shadow" 
					type="submit">
					<span>Actualizar usuario</span>
				</button>
			</div>
		</form>
	</section>
</x-base>