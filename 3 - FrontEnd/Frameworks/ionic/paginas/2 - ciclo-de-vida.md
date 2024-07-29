###### --- --- --- --- --- --- {proyecto}/src/app/mi-pagina/mi-pagina.page.ts --- --- --- --- --- --- ######

```ts
    import { Component } from '@angular/core';
    import { NavController } from '@ionic/angular';

    @Component({
        selector: 'app-mi-pagina',
        templateUrl: 'mi-pagina.page.html',
        styleUrls: ['mi-pagina.page.scss'],
    })
    export class MiPagina {

        constructor(public navCtrl: NavController) {}

        ionViewWillEnter() {
            // Se ejecuta justo antes de que la página se convierta en la página activa.
        }

        ionViewDidEnter() {
            // Se ejecuta después de que la página se ha convertido en la página activa.
        }

        ionViewWillLeave() {
            // Se ejecuta justo antes de que la página deje de ser la página activa.
        }

        ionViewDidLeave() {
            // Se ejecuta después de que la página ha dejado de ser la página activa.
        }

        ionViewWillUnload() {
            // Se ejecuta justo antes de que la página se descargue y se elimine de la pila de navegación.
        }

        // NOTA: Cuando se refiere a "pagina activa" se refiere a la pagina que actualmente se muestra en la interfaz.
    }
```