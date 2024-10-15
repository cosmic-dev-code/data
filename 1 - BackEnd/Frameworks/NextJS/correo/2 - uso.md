### =================================== ###
###### ===--- Crear plantilla ---=== ######
### =================================== ###

<!-- Creamos una carpeta llamada (templates) donde estaran nuestras plantillas -->

<!-- Dentro creamos (email-template.html), la plantilla que manderemos por correo. -->

###### --- --- --- --- --- --- {proyecto}/src/app/templates/email-template.html --- --- --- --- --- --- ######

```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email</title>
    </head>
    <body>
        
        <!-- Varibles que recibimos para imprimir. -->
        <h1>{{ title }}!</h1>
        <p>{{ message }}</p>

    </body>
    </html>
```

###### --- --- --- --- --- --- {proyecto}/src/app/api/route.js --- --- --- --- --- --- ######

<!-- Obtener Template. -->

```js
    import handlebars from "handlebars";
    
    function templatesEmail(){
        // Obtener la plantilla.
        const getTemplate = () => {
            // Path donde se ubica.
            const filePath = path.join(process.cwd(), "src/app", "templates", "email-template.html");

            // Extraer como (string).
            return fs.readFileSync(filePath, "utf-8");
        };
        
        // Cargar y compilar la plantilla HTML con Handlebars
        const templateSource = getTemplate();
        const template = handlebars.compile(templateSource);
        
        // Datos para pasar a la plantilla
        const templateData = {
            name: "Brandon Olivares",
            message: "Este es un correo de prueba con plantillas",
        };
        
        // Genera el HTML a partir de la plantilla y los datos
        return template(templateData);
    }
```

<!-- Enviar correo. -->

```js
    import nodemailer from "nodemailer";

    function sendEmail(){
        return new Promise(async (resolve, reject) => {
            try{
                const transport = nodemailer.createTransport({
                    host: "smtp.gmail.com", 
                    port: 465, 
                    secure: true, 
                    auth: {
                        user: "brandonanthonyolivaresamador@gmail.com", 
                        pass: "fyhj awfg ruip ewkl"
                    }
                });
        
                await transport.verify();
        
                const mailOptions = {
                    from: "brandonanthonyolivaresamador@gmail.com", 
                    to: "brandonolivares.developer@gmail.com", 
                    subject: "Correo de prueba", 
                    // Enviamos como (HTML) la plantilla que creamos y extraemos
                    html: templatesEmail()
                };

                transport.sendMail(mailOptions, (error, info) => {
                    if(error) reject(error);

                    resolve(info);
                });
            }catch(error){
                reject(error);
            }
        });
    }
```

<!-- Ruta de la API -->

```js
    export async function GET(){
        try{
            // Enviamos el correo.
            let result = await sendEmail();

            return new Response(JSON.stringify(result), {
                status: 200, 
                headers: { "Content-Type": "text/html; charset=UTF-8" }
            });

        }catch(error){
            console.log("Error al crear transport => ", err);
            return new Response("Error al enviar correo", {
                status: 500, 
                headers: { "Content-Type": "text/html; charset=UTF-8" }
            });
        }
    }
```