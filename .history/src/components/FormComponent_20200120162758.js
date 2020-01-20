import React, { Fragment, useState } from 'react';

function FormComponent(props) {

    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora:'',
        sintomas:''
    });

    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const handleSend = e => {
        e.preventDefault();

        props.createCita(cita)

        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora:'',
            sintomas:''
        })

    }

    console.log(cita);
    

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            <form onSubmit = {handleSend}>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange ={handleChange}
                    value ={cita.mascota}
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange ={handleChange}
                    value ={cita.propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    className="u-full-width"
                    name="fecha"
                    onChange ={handleChange}
                    value ={cita.fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    className="u-full-width"
                    name="hora"
                    onChange ={handleChange}
                    value ={cita.hora}
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange ={handleChange}
                    value ={cita.sintomas}
                ></textarea>

                <button type="submit" className="button-primary u-full-width">Agregar</button>
            </form>
        </Fragment>
    );
}

export default FormComponent;