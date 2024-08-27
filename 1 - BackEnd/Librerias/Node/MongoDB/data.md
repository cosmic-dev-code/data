### ======================= ###
###### ===--- Get ---=== ######
### ======================= ###

```jsx

	const Blog = ({ misDatos }) => {

		return (
			<Layout>
				{/* ... */}
			</Layout>
		);
	}
	
	// (getServerSideProps)
	// 	--- Construye el contenido en cada peticion.

	// (getStaticProps)
	// 	--- Utiliza el archivo HTML estatico construido en [run build].
	//	--- Ha la peticion todo el tiempo al mismo lugar y ahorra recursos.
	export async function getServerSideProps(){
		const result = await fetch("http://localhost:1337/blogs"), 
			  response = await result.json();

		return {
			// Propiedades de la pagina.
			props: {
				misDatos: response;
			}
		}
	}

```