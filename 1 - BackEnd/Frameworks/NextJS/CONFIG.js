/* ##########==============================########## */
/* ######===--- Archivo de Configuracion ---===###### */
/* ##########==============================########## */

// Next tiene este archivo donde puedes configurar como funciona tu sitio.

/** @type {import('next').NextConfig} */

import path from "path";
import { fileURLToPath } from "url";

// Para encontrar ubicaciones dentro del proyecto.
const __filename = fileURLToPath(import.meta.url), 
      __dirname = path.dirname(__filename);

/* --------------------------- */
/* ------ Configuracion ------ */
/* --------------------------- */

const nextConfig = {

    /**
    * Imagenes de otros dominios.
    * 
    * Si necesitas utilizar imagenes de dominios diferentes en el componente <Image/>
    */

    images: {
        domains: ['images.unsplash.com', 'i.ibb.co']
    }, 
    staticPageGenerationTimeout: 300, 

    /**
    * Rutas absolutas.
    * 
    * Para tus importaciones en los archivos, puedes declarar turas absolutas.
    */

    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            //    --- @components/navigation/header
            //    --- @components/navigation/aside
            '@components': path.resolve(__dirname, 'src/app/components'),

            // Puedes tener tantas rutas como quieras.
            '@animations': path.resolve(__dirname, 'src/app/components/animations'),
            '@routes': path.resolve(__dirname, 'src/app'),
            '@assets': path.resolve(__dirname, 'src/app/assets'),
            '@icons': path.resolve(__dirname, 'src/app/assets/icons'),
            '@forms': path.resolve(__dirname, 'src/app/components/forms'), 

            // Rutas a la carpeta de (api).
            '@api': path.resolve(__dirname, 'src/app/api')
        };
        return config;
    }, 

    /**
    * Redirecciones.
    * 
    * Reedireccionar cuando se visita un enlace especifico en el sitio.
    */

    async redirects(){
        return [
            {
                // Enlace a visitar.
                source: '/es-mx/',
                // Enlace de destino.
                destination: '/',
                // Indica si esta reedireccion sera (permanente) o (temporal).
                permanent: true
            }, 
            {
                // (:path), indica todo lo que siga despues de (/dental-clinic/), (no incluye /dental-clinic/).
                source: "/dental-clinic/:path",
                destination: '/servicios#dental',
                permanent: true
            }, 
        ];
    }, 

    /**
    * Cache.
    * 
    * El servidor puede guardar la cache de los archivos fisicos.
    */

    async headers(){
        return [
            {
                // Todos los archivos del sitio web se gurdaran en cache.
                source: '/(.*)', 
                headers: [
                    {
                        // Encabezado de la solicitud.
                        key: 'Cache-Control',
                        // Periodo en el que se guardara la cache.
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    }
}

export default nextConfig;