import React, {useState, Fragment} from 'react';
import FormComponent from './components/FormComponent';


function App() {

  const [citas, setCita]= useState([]);

  console.log(citas);
  

  return (
    <Fragment>
    <h1>Administrador</h1>
    <div className="container">
      <div className="row">
        <FormComponent/>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
