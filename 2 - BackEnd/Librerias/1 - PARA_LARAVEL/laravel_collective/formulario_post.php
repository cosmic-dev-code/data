<?php
	$style_btn = 'py-1 px-2 rounded text-bold bg-blue-700 text-white';
?>

<main class="my-3">
	<section class="w-1/2 mx-auto py-3 px-6 rounded-full shadow">
		<div>
			<?= Form::open('route' => 'usuarios.store', 'autocomplete' => 'off', 'files' => true) ?>
				<div class="block my-2">
					<?= Form::label('name', 'Ingrese su nombre: ', ['class' => 'block']) ?>
					<?= Form::text('name', null, ['placeholder' => 'Nombre']) ?>
				</div>
				<div class="block my-2">
					<?= Form::label('age', 'Ingrese su edad: ', ['class' => 'block']) ?>
					<?= Form::text('age', null, ['placeholder' => 'Edad']) ?>
				</div>
				<div class="block my-2">
					<?= Form::label('email', 'Ingrese su correo: ', ['class' => 'block']) ?>
					<?= Form::email('email', null, ['placeholder' => 'Correo']) ?>
				</div>
				<div class="block my-2">
					<?= Form::label('pass', 'Ingrese su password: ', ['class' => 'block']) ?>
					<?= Form::password('pass', null, ['placeholder' => 'Password']) ?>
				</div>
				<div class="block my-2">
					<?= Form::label('pass_1', 'Repita su password: ', ['class' => 'block']) ?>
					<?= Form::password('pass_1', null, ['placeholder' => 'Repita password']) ?>
				</div>
				<div class="text-center mt-3">
					<?= Form::submit('Enviar', ['class' => $style_btn]) ?>
				</div>
			<?= Form::close() ?>
		</div>
	</section>
</main>