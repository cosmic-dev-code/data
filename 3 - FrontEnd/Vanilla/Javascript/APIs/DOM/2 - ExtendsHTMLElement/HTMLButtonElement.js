"use strict";

class HTMLButtonElement extends HTMLElement
{
    constructor(){
        const button = document.createElement("button");
    }

    // Establece el tipo de botón, puede ser: ("button", "submit", "reset").
    type = "button";

    // Especifica si el campo está desabilitado.
    disabled = false;

    // Simula un click.
    click(){}
}