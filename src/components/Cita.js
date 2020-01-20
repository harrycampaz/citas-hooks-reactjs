import React, { Fragment } from 'react';

function Cita({ cita, index , deleteCita}) {
    return (
        <Fragment>
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>dueno: <span>{cita.propietario}</span></p>
            <p>fecha: <span>{cita.fecha}</span></p>
            <p>sintomas: <span>{cita.sintomas}</span></p>
            <button 
            onClick={() => deleteCita(index)}
            type="button" className="button eliminar u-full-width">Eliminar</button>
        </div>
        <br/>
        </Fragment>
    );
}

export default Cita;