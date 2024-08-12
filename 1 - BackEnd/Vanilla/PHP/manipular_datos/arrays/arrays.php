<?php

    /* ##########==================================########## */
    /* ######===--- Declaracion e inicializacion ---===###### */
    /* ##########==================================########## */

    // ------------------------- //
    // ------ Declaracion ------ //
    // ------------------------- //

    // Array vacio.
    $array = [];
    $array_1 = array();

    // ---------------------------- //
    // ------ Inicializacion ------ //
    // ---------------------------- //

    // De un solo tipo.
    $array = array("Uno", "Dos", "Tres");

    // Los arreglos son flexibles.
    $array_varios = [
        "Uno", true, null, 55, array("Uno", "Tres")
    ]

    /* ##########=====================########## */
    /* ######===--- Bidimensionales ---===###### */
    /* ##########=====================########## */

    $array = [
        array(1,2,3),
        array("Manzana", "Pera", "Limon"),
        array(1, "Pera", true)
    ];
    
    foreach($array as $key => $array_dos){
        foreach($array_dos as $key_dos => $valor){
            // ...
        }
    }

    /* ##########======================########## */
    /* ######===--- Tridimensionales ---===###### */
    /* ##########======================########## */

    $arr = [
        [
            array(22.35223, 3.325245)
        ],
        [
            array(0, 3.3)
        ],
        [
            array(341.134314, 1)
        ]
    ];

    for($i = 0; $i < count($arr); $i++){
        for($j = 0; $j < count($arr[$i]); $j++){
            for($k = 0; $k < count($arr[$i][$j]); $k++){
                printf(
                    "Num: %.2f<br/>", 
                    $arr[$i][$j][$k]
                );
            }
        }
    }

    /* ##########=======================########## */
    /* ######===--- Imprimir arreglos ---===###### */
    /* ##########=======================########## */

?>
<pre>
    <?php
        # Muestra cualquier tipo de dato incluyendo los arrglos y sus datos.
        var_dump($cursos_1);
        
        // Imprime el array completo.
        print_r($frutas);
    ?>
</pre>