### ======================================== ###
###### ===--- Modelos e Interfaces ---=== ######
### ======================================== ###

# Establecer reglas

###### --- --- --- --- --- --- {proyecto}/src/app/api/models/user.ts --- --- --- --- --- --- ######

```ts
	import mongoose, { Schema, Document, ObjectId } from "mongoose";

	// Instancia de objeto a insertar en Mongo.
	export interface IUser{
		_id?: ObjectId | string | null, 
		email: string, 
		password: string, 
		createdAt?: string
	}

	// Instancia del objeto Document extraido de Mongo.
	export interface IUserSchema extends Document{
		_id?: ObjectId | string | null, // Agrega Mongo automaticamente.
		email: string, 
		password: string, 
		createdAt?: string // Se crea por defecto de acuerdo a la Schema Rules.
	}

	// Reglas para la DB.
	export UserSchema = new Schema(
		{
			email: {
				type: String, 
				required: true, 
				unique: true
			}, 
			password: {
				type: String, 
				required: true, 
				unique: true
			}
		}, 
		{
			// Mantener una version de cada documento de mongo.
			versionKey: false, 
			// Agrega createdAt y updatedAt automáticamente.
			timestamps: true
		}
	);

	/**
	 * Modelo.
	 */

	// Los modelos tienen todos los metodos para realizar las peticiones.

	/**
	 * Coleccion.
	 */

	// De acuerdo al (nombre) asignado al (modelo), Mongo asigna un nombre automatico a la coleccion.

	// user = users
	// person = people

	/**
	 * Crear modelo.
	 */

	// (mongoose.models): Objeto que almacena todos los modelos creados en Mongoose.
	// Si el modelo existe lo devuelve, sino lo crea.
	const User = mongoose.models.User || mongoose.model("User", UserSchema);

	export default User;
```

# Ejemplo de un modelo

```ts
	// Extraer datos enviados desde el Cliente.
	const body:IUser = await request.json();

	// Busca { email: email } de acuerdo a lo definido en Schema
	await User.findOne({ email }); // Document | null
	await User.find({ email }); // Document[]
	await User.deleteOne({ email });
	await User.updateMany(filter, update)
```

### ============================ ###
###### ===--- Password ---=== ######
### ============================ ###

```ts
	import bcrypt from "bcryptjs"

	// Encriptar password.
	const passwordBcrypt = await bcrypt.hash("mi-password", 10);

	// Nueva instancia Document.
	const user:IUserSchema = new User({
		email: "brandon@gmail.com", 
		password: passwordBcrypt, 
		// Las otras propiedades son opcionales.
	});

	// Guardar en la base de datos.
	await user.save();
```

### ========================= ###
###### ===--- Token ---=== ######
### ========================= ###

```ts
	import jwt from "jsonwebtoken";

	function LoginUsuario(){
		// Extrae todas las propiedades del documento usuario (_doc) y la guarda en (resto).
		// Pero exceptua el password guardandolo aparte en (userPass).
		const { password: userPass, ...resto } = user._doc;

		// Crea un token con los datos del usuario, (exceptuando el password).
		// (mi-palabra), palabra clave al crear el TOKEN, simpre se va a utilizar.
		const token = jwt.sign({ data: resto }, 'mi-palabra');
		const token = jwt.sign({ data: resto }, process.env.NODE_WORD, {
			// Expira en (86400s) === (1d).
			expiresIn: 86400
		});

		// Cadena de texto.
		token; // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

		// Crear response.
		const response = NextResponse.json(
			{ usuario: resto, message: "Usuario creada correctamente" }, 
			{ status: 200 }
		);

		// Establecer cookie de inicio de sesion.

		/* Los parametros: 
				--- Nombre de la cookie.
				--- El valor que almacela la cookie, normalmente un valor (JWT).
				--- Ajustes. */
		response.cookies.set('auth_cookie', token, {
			// La cookie solo se envia a traves de la conexion (HTTPS) cuando la App este en produccion, mejora la seguridad.
			secure: process.env.NODE_ENV === "production", 
			// Prevenir ataques CSRF, la cookie no se envia con solicitudes iniciadas por terceros.
			sameSite: "strict", 
			sameSite: "none", 
			// Expira en (86400s) === (1d).
			maxAge: 86400, 
			// Disponible en todo el sitio.
			path: "/" 
		});

		return response;
	}
```

### ========================== ###
###### ===--- Sesion ---=== ######
### ========================== ###

```ts
	export function POST(request:NextRequest)
	{
		// Extraer datos enviados desde el Cliente.
		const body:IUser = await request.json();
		let { email, password } = body;

		// Extraer al usuario de la base de datos, coleccion (users).
		const user = await User.findOne({ email });

		// Comparar (cadena) con (cadena encriptada).
		let passIs:boolean = await bcrypt(password, user.password);

		/* Mismo sistema para que el usuario inicie sesion.
				--- Crear TOKEN.
				--- Crear Response.
				--- Crear Cookie. */
		LoginUsuario();
	}
```

```ts
	import { NextResponse } from 'next/server';

	export default async function logoutHandler(req, response) {

		// Ya no volvemos a crear token con jwt.
		// Ya no lo volvemos a crear NextResponse.json
		// Viene en los parametros de la respuesta.
		response;

		// Sin token.
		response.cookies.set('auth_cookie', "", {
			secure: process.env.NODE_ENV === "production", 
			sameSite: "strict", 
			// Expira inmediatamente.
			maxAge: 0, 
			// Se elimina de todo el sitio.
			path: "/" 
		});

		return NextResponse.json({ message: "Sesion cerrada" });
	}
```

### ========================== ###
###### ===--- Resend ---=== ######
### ========================== ###

<!-- ENVIAR CORREO para cambiar PASS -->

# NOTA: Quiza pida npm install encoding.

```ts
	import { Resend } from "resend"

	const body = await request.json(), 
		  { email } = body;

	const user = await User.findOne({ email }), 
	// Datos que contendra el token para poder cambiar el password.
		  dataToken = { 
		  	email: user.email, 
		  	tokenId: user._id
		  };

	const token = jwt.sign({data: dataToken}, process.env.NODE_WORD, { expiresIn: 86400 });

	// URL para cambiar.
	let path = "{url_de_tu_sitio}/cambiar-password?token=" + token;

	await resend.emails.send({
		// Correo que lo envia.
		from: "onboard@resend.dev", 
		// Correo que recibe el mensaje.
		to: email, 
		// Asunto y contenido.
		subject: "Cambio de password", 
		// NOTA: Se puede mandar un componente de React con el template.
		html: (`
			<div>
				<a href="${path}">Cambiar password</a>
			</div>
		`)
	});

	return NextResponse.json({
		// ...
	});
```

<!-- CAMBIAR PASS -->

```ts
	import headers from "next/headers";

	const { newPassword, confirmPassword } = body;

	// Obtener de los headers el token.
	const headersList = headers(), 
		  token = headersList.get("token");

	// Verificar que hayamos recibido un token.
	if(!token) return NextResponse.json({ /* ... */ });

	// Deserializar token.
	const isTokenValid = jwt.verify(token, process.env.NODE_WORD), 
		  { data } = isTokenValid, 
	// Buscar el (id) del usuario que guardamos.
		  user = await User.findById(data.tokenId);

	if(!user) return NextResponse.json({ /* ... */ });

	// Logica para calidar passwords ...

	// Actualizar password del usuario.
	user.password = await bcrypt.hash(newPassword, 10);
	user.save();
```

### ============================================== ###
###### ===--- Obtener todos los usuarios ---=== ######
### ============================================== ###

```ts
	const users = await User.find();

	return NextResponse.json({ users });
```

### ========================== ###
###### ===--- Mailer ---=== ######
### ========================== ###

```bat
	npm install nodemailer
```

# Haz los pasas de doble verificacion por Email.

```bat
	
```