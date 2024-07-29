<?php

/* ##########====================########## */
/* ######===--- ¿Qué es blade? ---===###### */
/* ##########====================########## */

/* Las directivas de blade son codigo PHP presentado de una forma mas entendible, ayudan a leer claramente 
el codigo y a no repetir codigo. */ ?>

<!-- Podriamos iterar datos haciendolo de la siguiente manera. -->

<ul>
	<?php foreach($cursos as $curso) { ?>
		<li>
			<a href="<?php echo $curso -> id; ?>" class="<?php if(true){ echo "clase"; } ?>">
				<?php echo $curso -> nombre; ?>
			</a>
		</li>
	<?php } ?>
</ul>

<!-- Con directivas de (Blade). -->

<ul>
	@foreach($cursos as $curso)
		<li>
			<a href="{{ $curso -> id }}" class="@if(true) {{ 'clase' }} @endif">
				{{ $curso -> nombre }}
			</a>
		</li>
	@endforeach
</ul>

<!-- ##########===============########## -->
<!-- ######===--- (Foreach) ---===###### -->
<!-- ##########===============########## -->

<ul>
	<!-- Iteramos un arreglo como un (foreach) normal del PHP nativo. -->
	@foreach($cursos as $curso)
		<li>
			<a href="{{ $curso -> id }}">
				{{ $curso -> nombre }}
			</a>
		</li>
	@endforeach
</ul>


<!-- ##########===================########## -->
<!-- ######===--- (if) y (else) ---===###### -->
<!-- ##########===================########## -->

<!-- Funciona como el (if) tradicional de PHP. -->

@if($cursos -> count() > 0)
	<div>
		<p>{{ __('Tenemos cursos') }}</p>
	</div>

	@if($cursos -> count() > 10)
		<!-- ... -->
	@endif

@else
	<div>
		<p>{{ __('No tenemos cursos') }}</p>
	</div>
@endif

<!-- ##########============########## -->
<!-- ######===--- (auth) ---===###### -->
<!-- ##########============########## -->

<!-- La directiva (auth) permite saber si un usuario ha iniciado sesion, (autentificado). -->

@auth
	<p>Esto se muestra</p>
@endauth

<!-- Podemos tomar distintas deciciones de acuerdo a la (autenticacion) del usuario. -->

@auth
	<h3>Bienvenido a la pagina {{ auth() -> user() -> names }}</h3>
@else
	<a href="{{ route('login') }}">Iniciar sesion</a>
@endauth

<!-- Esta es la negacion de (auth). !auth(). -->

@guest
	<!-- No autenticado. -->
@else
	<!-- Autenticado. -->
@endguest

<!-- ##########===========########## -->
<!-- ######===--- (php) ---===###### -->
<!-- ##########===========########## -->

<!-- La directiva (php) funciona exactamente igual que las etiquetas PHP. -->

@php
	$variable = "Hola mundo";

	if($variable === "Hola mundo"){
		echo "Si es igual";
	}
@endphp