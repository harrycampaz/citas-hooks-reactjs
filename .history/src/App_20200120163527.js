import React, {useState, Fragment} from 'react';
import FormComponent from './components/FormComponent';
import Cita from './components/Cita';


function App() {

  const [citas, setCitas]= useState([]);

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
  

  return (
    <Fragment>
    <h1>Administrador</h1>
    <div className="container">
      <div className="row">
        <div className="onne-half column">
          <FormComponent createCita={createCita} />
        </div>
        <div className="onne-half column">
          {citas.map((cita, index) => (
            <Cita 
            key = {index}
            index= {index}
            cita= {cita}
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
