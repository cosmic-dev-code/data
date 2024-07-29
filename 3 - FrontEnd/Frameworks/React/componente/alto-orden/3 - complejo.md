### ======================================== ###
###### ===--- Ejemplo mas complejo ---=== ######
### ======================================== ###

###### --- --- --- --- --- --- {proyecto}/src/hoc/withFilter.jsx --- --- --- --- --- --- ######

```jsx
	import React, { useState } from "react";

	// Funcion de alto orden.
	function withFilter(WrappedComponent) {

		// Retorno del componente como tal.
	    return function WithFilter(props) {
	        const [searchText, setSearchText] = useState(""); // porpiedad.

	        // Hacer binding actualizando la propiedad (searchText) del componente.
	        function handleSearchInputChange(event){
	            setSearchText(event.target.value);
	        }

	        /* Renderiza el componente original (WrappedComponent) con una prop llamada "searchText" y una función 
	        llamada "onSearchInputChange" que puede usarse para actualizar el estado del 
	        componente de búsqueda. */
	        return (
	            <div>
	                <input
	                    type="text"
	                    value={searchText}
	                    onChange={handleSearchInputChange}
	                />
	                <WrappedComponent
	                    searchText={searchText}
	                    onSearchInputChange={handleSearchInputChange}
	                    // Pasamos las propiedades propias de este componente al otro componente.
	                    {...props}
	                />
	            </div>
	        );
	    };
	}

	export default withFilter;
```

###### --- --- --- --- --- --- {proyecto}/src/hoc/product-list.jsx --- --- --- --- --- --- ######

```jsx
	import React from "react";

	// Importamos el componente HOC.
	import withFilter from "./withFilter";

	function ProductList({ products, searchText, onSearchInputChange }) {

		// Filtrar productos que en su (name) incluya el (searchText).
	    const productosFiltrados = products.filter((product) =>
	        product.name.toLowerCase().includes(searchText.toLowerCase())
	    );

	    return (
	        <div>
	            <input type="text" value={searchText} onChange={onSearchInputChange}/>

	            <ul>
	            	{/* Imprimir cada producto. */}
	                {productosFiltrados.map((product) => (
	                    <li key={product.id}>{product.name}</li>
	                ))}
	            </ul>
	        </div>
	    );
	}

	export default withFilter(ProductList); // Componente WithFilter
```

###### --- --- --- --- --- --- {proyecto}/src/App.jsx --- --- --- --- --- --- ######

```jsx
	import React from "react";

	// Importamos la funcion.
	import withFilter from "./withFilter";
	// Importamos el componente.
	import ProductList from "./ProductList";

	// Pasamos el componente "ProductList" a la función "withFilter" y recibimos el componente mejorado.
	const ProductListWithFilter = withFilter(ProductList);

	function App() {
	    const products = [
	        { id: 1, name: "Product 1" },
	        { id: 2, name: "Product 2" },
	        { id: 3, name: "Product 3" },
	        { id: 4, name: "Product 4" },
	        { id: 5, name: "Product 5" },
	    ];

	    return (
	        <div>
	            <h1>Product List</h1>

	            {/* Usamos el componente mejorado "ProductListWithFilter" en lugar del componente original "ProductList" */}
	            <ProductListWithFilter products={products} />
	        </div>
	    );
	}

	export default App;
```