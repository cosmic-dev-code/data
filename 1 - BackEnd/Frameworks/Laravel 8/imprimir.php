
<?php
	# Tenemos una variable con codigo (HTML).
	$variable = "
		<h1>
			<span>Esta es una cadena de texto</span>
		</h1>
	";

	# Tenemos una funcion.
	function getString():string{
		return "https://www.google.com";
	}
?>

<!-- ##########=============================########## -->
<!-- ######===--- Impresion de resultados ---===###### -->
<!-- ##########=============================########## -->

<section>
	<article>
		<!-- Esta forma de imprimir variables escapa cualquier etiqueta (HTML). -->
		{{ $variable }}
	</article>
</section>

<section>
	<article>
		<!-- Esta forma de imprimir variables no escapa las etiquetas (HTML). -->
		{!! $variable !!}
	</article>
</section>

<section>
	<article>
		<!-- Forma de imprimir con php y Laravel. -->
		<?= getString() ?>
	</article>
</section>

<section>
	<article>
		<!-- Forma de imprimir con php. -->
		<?php echo $variable; ?>
	</article>
</section>

<!-- ##########======================================########## -->
<!-- ######===--- Imprimir dentro de (propiedades) ---===###### -->
<!-- ##########======================================########## -->

<!-- Podemos imprimir dentro de propiedades. -->

<a href="<?php getString(); ?>">Funcion</a>

<a href="<?= getString(); ?>"></a>

<a href="{{ getString() }}">Funcion</a>