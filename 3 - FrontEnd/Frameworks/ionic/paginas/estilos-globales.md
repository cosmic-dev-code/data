
###### --- --- --- --- --- --- {proyecto}/src/global.scss --- --- --- --- --- --- ######

<!-- Aqui se definen todos los estilos globales para todos los elementos de la aplicacion. -->

```css
	/*
	 * App Global CSS
	 * ----------------------------------------------------------------------------
	 * Put style rules here that you want to apply globally. These styles are for
	 * the entire app and not just one component. Additionally, this file can be
	 * used as an entry point to import other CSS/Sass files to be included in the
	 * output CSS.
	 * For more information on global stylesheets, visit the documentation:
	 * https://ionicframework.com/docs/layout/global-stylesheets
	 */

	/* Core CSS required for Ionic components to work properly */
	@import "@ionic/angular/css/core.css";

	/* Basic CSS for apps built with Ionic */
	@import "@ionic/angular/css/normalize.css";
	@import "@ionic/angular/css/structure.css";
	@import "@ionic/angular/css/typography.css";
	@import "@ionic/angular/css/display.css";

	/* Optional CSS utils that can be commented out */
	@import "@ionic/angular/css/padding.css";
	@import "@ionic/angular/css/float-elements.css";
	@import "@ionic/angular/css/text-alignment.css";
	@import "@ionic/angular/css/text-transformation.css";
	@import "@ionic/angular/css/flex-utils.css";
```

###### --- --- --- --- --- --- {proyecto}/src/theme/variables.scss --- --- --- --- --- --- ######

Encontras todas las variables CSS de la app y el modo dark.

Podemos modificar todas las variables de manera rapida con el modificador de Ionic: 
-	https://ionicframework.com/docs/theming/colors#new-color-creator

```css
	:root {
	  /** primary **/
	  --ion-color-primary: #3880ff;
	  --ion-color-primary-rgb: 56, 128, 255;
	  --ion-color-primary-contrast: #ffffff;
	  --ion-color-primary-contrast-rgb: 255, 255, 255;
	  --ion-color-primary-shade: #3171e0;
	  --ion-color-primary-tint: #4c8dff;

	  // ...
	}
```