<?php

/* ##########=================================########## */
/* ######===--- Crear regla de autorizacion ---===###### */
/* ##########=================================########## */

######### --- --- --- Archivo (app/Policies/UsuarioPolicy) --- --- --- #########

/* Las (policies) contienen metodos de seguridad, parecido a los observers. Pero estas trabajan obligatoriamente 
con el usuario actualmente autentificado.

Si el usuario no esta autentificado, entonces la (policy) tomara al usuario como invalido sin siquiera pasar 
por las reglas de validacion que implementamos. */

namespace App\Policies;
use Illuminate\Auth\Access\HandlesAuthorization;

# Este modelo ya viene importado por defecto.
use App\Models\User;
# Traemos el modelo (Post).
use App\Models\Post;

class UsuarioPolicy
{
    use HandlesAuthorization;

    /**
     * Por ejemplo, protejeremos que cada usuario pueda editar solo su post.
     */

    // Se recibe el primer parametro obligatorio, el segundo nosotros lo implementamos.
    public function author(User $user, Post $post){

        // Hacemos la regla de validacion.

    	if($user -> id == $post -> user_id){
    		# El (post) es del usuario.
    		return true;
    	}else{
    		# El (post) no es del usuario.
    		return false;
    	}
    }

    /**
     * Tambien queremos que cada usuario entre solo a su post, pero que cuando esten publicos los vea cualquiera.
     */

    // Implementamos el primer parametro (opcional).
    public function published(?User $user, Post $post){

        // Si recibimos el primer parametro se hace la validacion.
    	
        if($post -> status == 2){
            # El (post) esta publicado.
        	return true;
        }else{
            # El (post) no esta publicado, (esta oculto).
        	return false;
        }
    }
}

/* ##########=======================########## */
/* ######===--- Utilizar (policy) ---===###### */
/* ##########=======================########## */

/* En el controlador implementaremos las policies. */

######### --- --- --- Archivo (app/Http/Controllers/PostController) --- --- --- #########

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Post;

class PostController extends Controller{

	/* El metodo (autorize) recibe dos parametros: 
        --- El metodo de la (policy) que se utilizara para validar.
        --- El parametro que requiere ese metodo, (recordemos que el usuario no se envia, ya que se 
        utiliza al actualmente autentificado). */

	public function show(Post $post)
    {
		# Cuando veamos un (post) especifico queremos asegurarnos que sea uno publicado.
        $this -> authorize('published', $post);

        # Esta es otra manera de utilizar la (policy) en caso de no tenerla con el (this).
        if($post -> user() -> can("published", $post)){
            // ...
        }else{
            return redirect("/no_authorize");
        }

        // ...
    }

    public function edit(Post $post)
    {
    	# Cuando editamos un (post) mandamos a llamar al metodo de autorizacion.
        $this -> authorize('author', $post);

        # Otra manera de llamar a la (policy).
        if($post -> user() -> can("author", $post)){
            // ...
        }else{
            return redirect("/no_authorize");
        }

        // ...
    }

    public function update(PostRequest $request, Post $post)
    {
    	# Cuando actualizamos un (post) mandamos a llamar al metodo de autorizacion.
        $this -> authorize('author', $post);

        # Otra manera de llamar a la (policy).
        if($post -> user() -> can("author", $post)){
            // ...
        }else{
            return redirect("/no_authorize");
        }

        // ...
    }

    public function destroy(Post $post)
    {
    	# Cuando eliminamos un (post) mandamos a llamar al metodo de autorizacion.
        $this -> authorize('author', $post);

        # Otra manera de llamar a la (policy).
        if($post -> user() -> can("author", $post)){
            // ...
        }else{
            return redirect("/no_authorize");
        }

        // ...
    }
}