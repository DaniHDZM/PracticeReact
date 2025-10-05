import React from "react";

const ListComponent = ({producto}) => {
    return(
        <article>
            <h2>{producto.nombre}</h2>
            <p>
                <strong>Precio: </strong>
                {producto.precio}
            </p>
            <button>Comprar</button>
            
            
        </article>
        
    )
};

export default ListComponent;