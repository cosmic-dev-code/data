<?php

######### --- --- --- Archivo (config/adminlte.php) --- --- --- ######### */

return [

    # Texto del logo.
    'logo' => '<b>Mi</b> titulo',
    
    # 'Url' de nuestro logo.
    'logo_img' => 'vendor/adminlte/dist/img/AdminLTELogo.png',
    
    # Clases de boostrap para nuestro logo.
    'logo_img_class' => 'brand-image img-circle elevation-3',
    'logo_img_xl' => null,
    'logo_img_xl_class' => 'brand-image-xs',
    'logo_img_alt' => 'AdminLTE',

    'use_route_url' => false,
    'dashboard_url' => 'users.index',
    'logout_url' => 'logout',
    'login_url' => 'login',
    'register_url' => 'register',
    'password_reset_url' => 'password/reset',
    'password_email_url' => 'password/email',
    'profile_url' => false,

    /* El campo (can) es el responsable de verificar que el usuario tenga o no 
    permiso de acceder a esa ruta. Si no tiene el permiso, entonces el 
    elemento no se mostrara. */

    'menu' => [
        [
            'text'        => 'Dashboard',
            'route'         => 'admin.home',
            'icon'        => 'fas fa-tachometer-alt fa-fw'
            'can'       => 'admin.home' # Verifica que el usuario pueda acceder a la ruta.
        ],

        # Ajustes.
        ['header' => 'Ajustes de cuenta de administrador'],
        
        [
            'text' => 'Ver lista de usuarios',
            'route'  => 'usuarios.index',
            'icon' => 'fas fa-fw fa-user',
            'can' => 'usuarios.index' # Verifica que el usuario pueda acceder a la ruta.
        ],
        [
            'text' => 'Ver todas las publicaciones',
            'url'  => 'posts.index',
            'icon' => 'fas fa-fw fa-lock',
            'can' => 'posts.index' # Verifica que el usuario pueda acceder a la ruta.
        ],

        # Circulos de colores, (titulo).
        ['header' => 'Mis roles'],

        # Circulos de colores, (items).
        [
            'text'       => 'Crear publicacion',
            'icon_color' => 'blue',
            'url'        => 'publicaciones.create',
            'can'        => 'publicaciones.create' # Verifica que el usuario pueda acceder a la ruta.
        ],
        [
            'text'       => 'Editar publicacion',
            'icon_color' => 'orange',
            'url'        => 'publicaciones.edit',
            'can'        => 'publicaciones.edit' # Verifica que el usuario pueda acceder a la ruta.
        ],
        [
            'text'       => 'Eliminar publicacion',
            'icon_color' => 'red',
            'url'        => 'publicaciones.destroy',
            'can'        => 'publicaciones.destroy' # Verifica que el usuario pueda acceder a la ruta.
        ],
    ],

    'livewire' => false,
];