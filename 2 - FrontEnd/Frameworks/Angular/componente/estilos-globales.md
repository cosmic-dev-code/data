
###### --- --- --- --- --- --- {proyecto}/src/app/src/styles.scss --- --- --- --- --- --- ######
```css
	/* Aqui se colocan los estilos globales, ya que cada componente de Angular tiene su propio 
	archivo de estilos. */

	img{
		display: block;
	}

	/* Esto si se puede hacer, podemos modificar los estilos de otros componentes. */
	app-img > div{
		display: block;
	}
```