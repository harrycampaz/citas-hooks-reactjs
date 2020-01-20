import React from 'react';

function Cita({cita}) {
    return (
        <div className="cita">
<p>Mascota: <span>{cita.mascota}</span></p>
<p>dueno: <span>{cita.propietario}</span></p>
<p>fecha: <span>{cita.fecha}</span></p>
<p>sintomas: <span>{cita.sintomas}</span></p>
        </div>
    );
}

export default Cita;