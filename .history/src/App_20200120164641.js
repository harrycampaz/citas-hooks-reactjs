import React, { useState, useEffect, Fragment } from 'react';
import FormComponent from './components/FormComponent';
import Cita from './components/Cita';


function App() {

  let citasInin = JSON.parse(localStorage.getItem('citas'));

  if(!citasInin) {
    citasInin = [];
  }
  const [citas, setCitas] = useState(citasInin);

  const createCita = cita => {
    const nuevasCitas = [...citas, cita]
    console.log(nuevasCitas);

    setCitas(nuevasCitas);

  }


  const deleteCita = index => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);

    setCitas(nuevasCitas)
  }

  const titulo = Object.keys(citas).length === 0 ? "No hay citas" : "Administrar Citas";

  useEffect(()=> {

     let citasStore = JSON.parse(localStorage.getItem('citas'));

     if(citasStore){
       localStorage.setItem('citas', JSON.stringify(citas));
     }else {
       localStorage.setItem('citas', JSON.stringify([]));
     }
   

    
  })

  return (
    <Fragment>
      <h1>Administrador</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <FormComponent createCita={createCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita, index) => (
              <Cita
                key={index}
                index={index}
                cita={cita}
                deleteCita={deleteCita}
              />
            ))}
          </div>

        </div>
      </div>
    </Fragment>
  );
}

export default App;
