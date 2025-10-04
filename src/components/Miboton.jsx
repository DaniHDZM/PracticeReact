import { useState } from "react"


export default function MiBoton() {

    const [FormData, setFormData] = useState({
        userName: '',
        email: '',
        password: ''
    })

    const [FormErrors, setFormErrors] = useState({
        userName: '',
        email: '',
        password: ''
    })

    const procesarCambio = (evento) => {
        const { name, value } = evento.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]:value
        }))

        setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            [name]: '',
        }))
    }

    const procesarSubmit = (evento) => {
        evento.preventDefault();
        console.log(FormData)
        
        const newFormErrors = {}

        if (FormData.userName.trim() === ''){
            newFormErrors.userName = 'El usuario es requerido.';
        }
        
        if (FormData.email.trim() === '') {
            newFormErrors.email = 'El email es requerido.';
        }

        if (FormData.password.trim() === '') {
            newFormErrors.password = 'La contraseña es requerida.';
        }

        if (Object.keys(newFormErrors).length > 0) {
            setFormErrors(newFormErrors);
        } else {
            console.log('Formulario válido. Datos:', FormData);
        }
    }
    
    return(
        <section>
            <form autoComplete="off" onSubmit={procesarSubmit}>
                <label htmlFor="userName">Nombre:</label>
                <input 
                    type="text" 
                    name="userName" 
                    id="userName" 
                    value={FormData.userName} 
                    onChange={procesarCambio}
                />

                {FormErrors.userName && <span className="error">{FormErrors.userName}</span>}

                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={FormData.email} 
                    onChange={procesarCambio}
                />
                
                {FormErrors.email && <span className="error">{FormErrors.email}</span>}


                <label htmlFor="password">Contraseña:</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={FormData.contra} 
                    onChange={procesarCambio}
                />

                {FormErrors.password && <span className="error">{FormErrors.password}</span>}


                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}