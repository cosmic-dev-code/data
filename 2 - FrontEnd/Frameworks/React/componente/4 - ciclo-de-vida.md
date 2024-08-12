### ================================= ###
###### ===--- Ciclo de vida ---=== ######
### ================================= ###

###### --- --- --- --- --- --- {proyecto}/src/components/ejemplo.jsx --- --- --- --- --- --- ######

<!-- Los componentes que podemos crear, constan de algunos eventos que manejan su ciclo de vida. -->

```jsx
    import React, { Component } from "react";

    class Ejemplo extends Component {

        /**
         * Se ejecuta cuando se (crea una instancia del componente).
         */
        constructor(props) {
            // Aquí se pueden inicializar los estados y las props del componente.
            super(props);
            this.state = {
                count: 0,
            };
        }

        /**
         * Se ejecuta (después de que) el componente (haya sido montado en el DOM).
         */
        componentDidMount() {
            // Normalmente aqui se hace (cambios) o (peticiones) para el componente.
        }

        /**
         * Se ejecuta cada vez que se (actualiza el estado o las props del componente).
         */
        componentDidUpdate(prevProps, prevState, snapshot) {
            // ...
        }

        /**
         * Guarda los valores justo (despues de efectuar el cambio) para que sirvan de 
         * referencia al metodo (componentDidUpdate).
         */
        getSnapshotBeforeUpdate(prevProps, prevState){
            // ...
        }

        /**
         * Se ejecuta (antes de que) el componente (sea eliminado del DOM).
         */
        componentWillUnmount() {
            // ...
        }

        /**
         * Se ejecuta cuando se (produce un error durante el renderizado) del componente.
         */
        componentDidCatch(error, info) {
            console.log("Error durante el renderizado del componente: ", error);
        }

        /**
         * Se ejecuta cada (vez que se renderiza el componente).
         */
        render() {
            return (
                <div>
                    <p>Count: {this.state.count}</p>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                        Increase count
                    </button>
                </div>
            );
        }
    }

    export default Ejemplo;
```