
<!-- DEBEMOS CREARLO NOSOTROS. -->
<!-- Indica la version de (node) utilizada en el proyecto. -->
# .nvmrc

```bat
	v18.12.0
```

<!-- Es el archivo que maneja soporte para todas las versiones de los navegadores. -->
# .browserslistrc

```bat
	last 1 Chrome version
	last 1 Firefox version
	last 2 Edge major versions
	last 2 Safari major versions
	last 2 iOS major versions
	Firefox ESR
```

<!-- Maneja las diferentes configuraciones dentro de un equipo. -->
# .editorconfig

```php
	# Editor configuration, see https://editorconfig.org
	root = true

	[*]
	charset = utf-8
	indent_style = space
	indent_size = 2
	insert_final_newline = true
	trim_trailing_whitespace = true

	[*.ts]
	quote_type = single

	[*.md]
	max_line_length = off
	trim_trailing_whitespace = false
```

<!-- Configuracion de Angular. -->
# tsconfig.json

```txt
	Muestra como esta configurado Typescript, ya que Angular trabaja por defecto con Typescript. Por ejemplo la forma 
	en que compila Angular. Configurar ambientes de prueba. budgets: Cuanto debe pesar Angular.Etc.
```

<!-- (Dependencias/Paquetes) instalados. -->
# package.json