import React, {useState, Fragment} from 'react';
import FormComponent from './components/FormComponent';


function App() {

  const [citas, setCitas]= useState([]);

  const createCita = cliente => {
    const nuevasCitas = [...citas, cliente]
    console.log(nuevasCitas);
    
  }

  console.log(citas);
  

  return (
    <Fragment>
    <h1>Administrador</h1>
    <div className="container">
      <div className="row">
        <FormComponent createCita={createCita} />
      </div> 
    </div>
    </Fragment>
  );
}

export default App;
