import React from "react"
import ListComponent2 from './ListComponent2'

const Listado = () => {

    const productos = [
        { id: '1', nombre: 'Camiseta', precio: 10 },
        { id: '2', nombre: 'Pantalon', precio: 20 },
        { id: '3', nombre: 'Calcetin', precio: 5 },
        { id: '4', nombre: 'Short', precio: 15 }
    ]

    return(
            <section>
                <h2>Catálogo</h2>

                {productos.length === 0 ? (
                    <p>No hay productos en este momento.</p>
                ) : (
                    <ul>
                        {productos.map(
                            (producto) => (
                                <ListComponent2 key={producto.id} producto={producto}/>
                            )
                        )}
                    </ul>
                )}

                
            </section>
    )
}

export default Listado;