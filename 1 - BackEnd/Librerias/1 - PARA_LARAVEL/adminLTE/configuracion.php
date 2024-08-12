<?php

/* Una vez instalada la plantilla (adminLTE) ahora debemos de personalizarla, para esto debemos acceder 
al archivo que administra dicha plantilla. 

######### --- --- --- Archivo (config/adminlte.php) --- --- --- ######### */

return [

    /*
    |
    | Podemos modificar algunas cosas del logo de la plantilla (adminLTE).
    |
    */

    # Texto del logo.
    'logo' => '<b>Mi</b> titulo',
    
    # 'Url' de nuestro logo.
    'logo_img' => 'vendor/adminlte/dist/img/AdminLTELogo.png',
    
    # Clases de boostrap para nuestro logo.
    'logo_img_class' => 'brand-image img-circle elevation-3',
    'logo_img_xl' => null,
    'logo_img_xl_class' => 'brand-image-xs',
    'logo_img_alt' => 'AdminLTE',

    /*
    |
    | 'Url' de (adminLTE).
    |
    */

    'use_route_url' => false,

    # Esta es la 'url' de nuestro logo. (al darle 'click').
    'dashboard_url' => '#',
    'logout_url' => 'logout',
    'login_url' => 'login',
    'register_url' => 'register',
    'password_reset_url' => 'password/reset',
    'password_email_url' => 'password/email',
    'profile_url' => false,

    /*
    |
    | Menu lateral de (adminLTE).
    | Los iconos los encontramos en (https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=dashboard).
    |
    */    

    'menu' => [
        // Navbar items:
        [
            'type'         => 'navbar-search',
            'text'         => 'search',
            'topnav_right' => true,
        ],
        [
            'type'         => 'fullscreen-widget',
            'topnav_right' => true,
        ],

        // Elementos de la barra lateral.
        [
            'type' => 'sidebar-menu-search',
            'text' => 'search',
        ],
        [
            'text' => 'blog',
            'url'  => 'admin/blog',
            'can'  => 'manage-blog',
        ],
        [
            // Boton inicial.

            # Texto del boton.
            'text'        => 'Dashboard',
            # 'url' del boton.
            'route'         => 'admin.home',
            # Podemos cambiar el icono.
            'icon'        => 'fas fa-tachometer-alt fa-fw',
            # Este es el cuadrito de notificaciones.
            'label'       => 5,
            'label_color' => 'primary',
        ],

        # Ajustes.
        ['header' => 'Ajustes de cuenta de administrador'],
        
        # Podemos modificar el (texto), (icono) y ('url').
        [
            'text' => 'Mi perfil',
            'route'  => 'home',
            'icon' => 'fas fa-fw fa-user',
        ],
        [
            'text' => 'Cambiar password',
            'url'  => '#',
            'icon' => 'fas fa-fw fa-lock',
        ],
        [
            # Nivel principal.
            'text'    => 'Categorias',
            'icon'    => 'fas fa-fw fa-share',
            'submenu' => [
                [
                    # Item de primera capa.
                    'text' => 'Programacion',
                    'url'  => '#',
                ],
                [
                    # Segunda capa.
                    'text'    => 'Paradigmas',
                    'url'     => '#',
                    'submenu' => [
                        [
                            # Item de segunda capa.
                            'text' => 'Funcional',
                            'url'  => '#',
                        ],
                        [
                            # Tercera capa.
                            'text'    => 'Lenguajes',
                            'url'     => '#',
                            'submenu' => [
                                [
                                    # Item de tercera capa.
                                    'text' => 'C++',
                                    'url'  => '#',
                                ],
                                [
                                    # Item de tercera capa.
                                    'text' => 'C',
                                    'url'  => '#',
                                ],
                            ],
                        ],
                    ],
                ],
                [
                    # Item de primera capa.
                    'text' => 'Frameworks',
                    'url'  => '#',
                ],
            ],
        ],

        # Circulos de colores, (titulo).
        ['header' => 'Mis roles'],

        # Circulos de colores, (items).
        [
            'text'       => 'Importante',
            'icon_color' => 'red',
            'url'        => '#',
        ],
        [
            'text'       => 'Peligro',
            'icon_color' => 'orange',
            'url'        => '#',
        ],
        [
            'text'       => 'Informacion',
            'icon_color' => 'blue',
            'url'        => '#',
        ],
    ],


    /* Esta es la opcion que nos permite trabajar con (livewire). */
    'livewire' => false,
];