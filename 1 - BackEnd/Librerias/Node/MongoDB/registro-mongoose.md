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