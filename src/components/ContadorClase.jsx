import React, {useState} from "react";

const ContadorClase = () => {

    const [conteo, setConteo] = useState(0);

    const incrementar = () => {
        setConteo((prevConteo) => prevConteo + 1);
    }

    const reducir = () => {
        setConteo((prevConteo) => prevConteo -1);
    }
    
    return (
        <section>
            <h1>Contador</h1>
            <p>Conteo: {conteo} </p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={reducir}>Reducir</button>
        </section>
    );
}

export default ContadorClase;