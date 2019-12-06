import React, { Fragment, useState } from "react";
import "./normalize.css";
import "./skeleton.css";
import Header from "./components/Header";
import Form from "./components/Form"

function App() {

  const [cantidad,guardarCantidad]= useState(0);
  const [plazo,guardarPlazo]= useState('');

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
        />
        </div>
    </Fragment>
  );
}

export default App;
