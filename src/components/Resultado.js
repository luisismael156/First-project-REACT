import React from 'react';


const Resultado = ({total,plazo,cantidad}) => 
    (

        <div className="u-full-width resultado text-center">

            <h2>Resumen</h2>
            <p>La cantidad solicitada es ${total}</p>
        </div>


    );
 
export default Resultado;
