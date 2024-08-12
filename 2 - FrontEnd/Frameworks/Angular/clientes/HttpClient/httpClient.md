
###### --- --- --- --- --- --- {proyecto}/src/app/app.module.ts --- --- --- --- --- --- ######
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importamos a (HttpClientModule) el cual es un modulo perteneciente a Angular.
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    // Lo importamos justo aqui.
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

###### --- --- --- --- --- --- {proyecto}/src/app/components/products/products.component.ts --- --- --- --- --- --- ######
```typescript
  import { Component, OnInit } from '@angular/core';

  // Importamos nuestro cliente (HttpClient).
  import { HttpClient } from '@angular/common/http';

  @Component({
    selector: 'app-products', 
    templateUrl: './products.component.html', 
    styleUrls: ['./products.component.scss']
  })

  export class ProductsComponent implements OnInit {

    // Adquirimos como propiedad instanciada de la clase (HttpClient).
    constructor(private http:HttpClient) { }
    
    ngOnInit():void{

      // Ahora podemos hacer peticiones asincronas.
      this.http.get("https://url")
      // utilizamos el siguiente metodo el cual devuelve los datos de la peticion.
      .subscribe(data => {
        // ...
      });

      // Indicamos que tipo de datos esperamos recibir de la peticion.
      this.http.get<Product[]>("https://url")
      .subscribe(function(products:Product[]){
        // ...
      });
    }
  }
```

