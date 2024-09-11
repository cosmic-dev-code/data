### ===================================== ###
###### ===--- Uso de nodemailer ---=== ######
### ===================================== ###

# -------------------------------------- #
# ------ Configurar Transportador ------ #
# -------------------------------------- #

```js
	const nodemailer = require("nodemailer");

	/**
	 * Configuramos el transporte de Gmail.
	 */
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com", 
        port: 465, 
        secure: true, 
        auth: {
        	// Tu correo de Gmail.
            user: "brandonanthonyolivaresamador@gmail.com", 
            // Pass de aplicacion de tu cuenta de Gmail.
            pass: "etvz ukgb qide wfri"
        }
    });

	transport.verify()
		.then(() => {
			// La configuracion ha sido exitosa.

		}).catch(error => {
			// La configuracion fallo.
		});

```

# --------------------------- #
# ------ Enviar correo ------ #
# --------------------------- #

```js
    /**
     * Definir el correo a enviar
     */
	let mailOptions = {
		// Dirección del remitente
		from: 'tu_email@gmail.com', 
		// Destinatario
		to: 'destinatario@ejemplo.com', 
		// Asunto del correo.
		subject: 'Asunto del correo', 

		// Opción de enviar (Texto Plano)
		text: 'Contenido del correo en texto plano', 
		// Opción de enviar (HTML)
		html: '<b>Contenido del correo en HTML</b>' 
	};

	// Enviar el correo
	transporter.sendMail(mailOptions, function (error, info) {
		if(error){
			// Hubo un error al enviar el correo.

			return;
		}

		// El correo se ha enviado.
		// Objeto con informacion del envio.
		info;
	});
```

# ----------------------- #
# ------ Respuesta ------ #
# ----------------------- #

<!-- El objeto (info) contiene informacion del envio. -->

```json
	{
		"accepted": ["brandonolivares.developer@gmail.com"],
		"rejected": [],
		"ehlo":[
			"SIZE 35882577",
			"8BITMIME",
			"AUTH LOGIN PLAIN XOAUTH2 PLAIN-CLIENTTOKEN OAUTHBEARER XOAUTH",
			"ENHANCEDSTATUSCODES",
			"PIPELINING",
			"CHUNKING",
			"SMTPUTF8"
		],
		"envelopeTime": 193,
		"messageTime": 502,
		"messageSize": 687,
		"response": "250 2.0.0 OK 1725842199 d2e1a72fcca58-718e5982ec5sm2493870b3a.169 - gsmtp",
		"envelope": {
			"from":"brandonanthonyolivaresamador@gmail.com",
			"to":["brandonolivares.developer@gmail.com"]
		},
		"messageId":""
	}
```

### ============================= ###
###### ===--- Asincrono ---=== ######
### ============================= ###

<!-- Podemos crear una funcion asincrona para enviar el correo. -->

```js
	const nodemailer = require("nodemailer");

	// Los errores son atrapados por (reject) hasta enviar el correo.
	// Si nada salio mal hacemos un (resolve).
	function sendEmail(){
	    return new Promise(async (resolve, reject) => {
	        try{
	        	// Configurar transportador.
	            const transport = nodemailer.createTransport({
	                host: "smtp.gmail.com", 
	                port: 465, 
	                secure: true, 
	                auth: {
	                    user: "brandonanthonyolivaresamador@gmail.com", 
	                    pass: "etvz ukgb qide wfri"
	                }
	            });
	    
	    		// Verificamos el transportador.
	    		// Cualquier error es atrapado por el (catch).
	            await transport.verify();
	    
	    		// Opciones del correo.
	            const mailOptions = {
	                from: "brandonanthonyolivaresamador@gmail.com", 
	                to: "brandonolivares.developer@gmail.com", 
	                subject: "Correo de prueba", 
	                text: "Este es un correo de prueba enviado con Nodemailer", 
	            };

	            // Enviar correo.
	            transport.sendMail(mailOptions, (error, info) => {
	                if(error) reject(error);

	                resolve(info);
	            });
	        }catch(error){
	            reject(error);
	        }
	    });
	}

	// Mandar a llamar.

	async function main(){
		try{

			// Enviamos el correo.
			let info = await sendMail();

			// Recibimos el obtto con la informacion del envio del correo.
			info;

		}catch(error){
			console.error("Error al enviar el correo => ", error);
		}
	}
```