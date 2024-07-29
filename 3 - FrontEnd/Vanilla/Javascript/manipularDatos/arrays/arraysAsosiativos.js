"use strict";

/* ##########======================########## */
/* ######===--- Array asosiativo ---===###### */
/* ##########======================########## */

let array = {
	brandon: 22, 
	anthony: 20,
	cosmic: 19
};

array['brandon']; // 22
array['anthony']; // 20

// ------------------------- //
// ------ Anidaciones ------ //
// ------------------------- //

let array = Object({
    "nombres": ["Brandon", "Anthony", "Olivares", "Amador"], 
    "usuarios": {
        Brandon: 22, 
        "Anthony": 20, 
        Cosmic: 19
    }
});

array['nombres'][0]; // "Brandon"

array['usuarios']['Brandon']; // 22

// Cambio de valor.
array['usuarios']['Cosmic'] = 15;

// -------------------------- //
// ------ Iterar array ------ //
// -------------------------- //

let edades = {
    "Marcos": 34, 
    "Pedro": 85, 
    "Tania": 23
};

Object.values(edades).forEach(edad => {
    // ...
});

for(let edad in edades){
    // ...
}

// -------------------------------------------------------------------------------------- //

let elements = {
    "administradores": Array(
        "Brandon", "Anthony"
    ), 
    "usuarios": Array(
        "Brandon", "Anthony", "Cosmic"
    )
};

Object.values(elements).forEach(personas => {
    personas.forEach(persona => {
        // ...
    });
});

for(let personas in elements){
    for(let persona in personas){
        // ...
    }
}

/*
    Nombre: Brandon
    Nombre: Anthony
    Nombre: Brandon
    Nombre: Anthony
    Nombre: Cosmic
*/