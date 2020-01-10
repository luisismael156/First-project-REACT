import React, { Fragment, useState } from "react";
import "./normalize.css";
import "./skeleton.css";
import Header from "./components/Header";
import Form from "./components/Form"
import Mensaje from "./components/Mensaje"
import Resultado from "./components/Resultado"


function App() {

  const [cantidad,guardarCantidad]= useState(0);
  const [plazo,guardarPlazo]= useState('');
  const [total,guardarTotal]= useState(0);
  

  let componente;
  if(total === 0 ){
    componente = <Mensaje/>

  }else{

    componente = <Resultado
            total ={total}
            plazo = {plazo}
            cantidad={cantidad}
    />
  }

  return (
    <Fragment>
        <Header
          title="Cotizador de prestamos"
          description="Este es un cotizador de prestamos"
        
        
        />
        <div className="container">
        <Form
        cantidad={cantidad}
        guardarCantidad={guardarCantidad}
        plazo={plazo}
        guardarPlazo={guardarPlazo}
        total={total}
        guardarTotal={guardarTotal}
        />
      <div class="">
        {componente}
        </div>
        </div>
    </Fragment>
    
  );
}

export default App;
