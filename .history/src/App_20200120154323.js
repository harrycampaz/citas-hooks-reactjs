import React, {useState, Fragment} from 'react';
import FormComponent from './components/FormComponent';
import Cita from './components/Cita';


function App() {

  const [citas, setCitas]= useState([]);

  const createCita = cita => {
    const nuevasCitas = [...citas, cita]
    console.log(nuevasCitas);
    
  }

  console.log(citas);
  

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
            />
          ))}
        </div>
       
      </div> 
    </div>
    </Fragment>
  );
}

export default App;
