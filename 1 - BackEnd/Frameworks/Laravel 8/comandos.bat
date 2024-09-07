REM Estos son todos los comandos que aparecen aqui en (laravel), como era de esperarse 
REM (Laravel) tiene multiples comandos, para lo cual tenemos una lista que 
REM nos puede ayudar: 

	: --- Migrations: 
		php artisan make:migration create_usuarios_table
		php artisan make:migration add_direccion_to_usuarios
		php artisan make:migration direccion_to_usuarios

		php artisan migrate
		php artisan migrate:fresh
		php artisan migrate:fresh --seed
		php artisan migrate:reset
		php artisan migrate:refresh
		php artisan migrate:rollback

		php artisan db:seed

	: --- Factories: 
		php artisan make:factory UsuarioFactory
		php artisan make:factory UsuarioFactory --model=Usuario

	: --- Models: 
		php artisan make:model Usuario
		php artisan make:model Usuario -m
		php artisan make:model Usuario -c
		php artisan make:model Usuario -s
		php artisan make:model Usuario -f
		php artisan make:model Usuario -mcsf
		php artisan make:model Usuario -a

	: --- Seeders: 
		php artisan make:seeder UsuarioSeeder

	: --- Controllers: 
		php artisan make:controller UsuarioController
		php artisan make:controller UsuarioController -r
		php artisan make:controller admin\UsuarioController
		php artisan make:controller admin\UsuarioController -r

	: --- Commponents: 
		php artisan vendor:publish
		php aritsan make:component NuevoComponente
		php artisan make:livewire NuevoComponente

	: --- Tailwind: 
		npm run dev

	: --- Laravel collective: 
		require laravelcollective/html

	: --- Routes: 
		php artisan r:l
		php artisan r:l --name=admin.categories

	: --- Observers: 
		php artisam make:observer
		php artisan make:observer --model=Usuario

	: --- Policies: 
		php artisan make:policy UsuarioPolicy

	: --- Storage: 
		php artisan storage:link & : Crea la ruta para el (Storage).

	: --- Key: 
		php artisan key:generate

	: --- Server: 
		php artisan serve
		php artisan serve --host=192.168.100.13