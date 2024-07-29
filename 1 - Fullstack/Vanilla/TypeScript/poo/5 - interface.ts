"use strict";
/*
    Nota: las interfaces pueden contener propiedades y métodos, pero no campos.
*/

/* ##########==================================########## */
/* ######===--- Crear e implementar interfaz ---===###### */
/* ##########==================================########## */

// Creamos la interfaz.
interface IUsuario
{
    nombre:string;
    edad:number;
    ciudad:string;
    mostrarDatos():void;
}

/* La clase que se instancia de la interfaz debe cumplir con las propiedades y 
metodos que establece la interfaz. */
class User implements IUsuario
{
    public nombre:string;
    public edad:number;
    public ciudad:string;

    public constructor(nombre:string, edad:number, ciudad:string){
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    public mostrarDatos():void{
        document.write(`
            <div>
                <div>${this.nombre}</div>
                <div>${this.edad}</div>
                <div>${this.ciudad}</div>
            </div>
        `);
    };
}

const user:User = new User("Brandon", 22, "Tijuana");
user.mostrarDatos();

/* ##########=======================================########## */
/* ######===--- Las interfaces no permiten cuerpo ---===###### */
/* ##########=======================================########## */

// Otra interfaz.
/* Aqui solo se declaran los campos de una clase, pero no se desarrollan mas que 
en la clase que hereda. */
interface IUsuario
{
    mostrarDatos():HTMLElement;
    getName():string;
}

// Implemetamos los campos que exige la (interfaz) masotros campos extra.
class User implements IUsuario
{
    public constructor(private nombre:string, private edad:number, private estado:boolean){}
    
    // Desarrollamos.
    public mostrarDatos():HTMLElement{
        const div:HTMLElement = document.createElement("div");

        div.innerHTML = (`
            <dl>
                <dt>${this.nombre}</dt>
                <dd>${this.edad} - ${this.estado}</dd>
            </dl>
        `);

        return div;
    }

    // Desarrollamos.
    public getName():string{
        return this.nombre;
    }
}

const user:User = new User("Brandon", 21, true);

user.mostrarDatos();
user.getName();