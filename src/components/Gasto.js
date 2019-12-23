import React from 'react';

const Gasto = ({gasto}) => {

  /* const eliminarGasto = id => {
    console.log("TCL: Gasto -> id", id)
  } */
  return (
    <li className="gastos">
      <p>
          {gasto.nombreGasto}
          <span className="gasto"> $ {gasto.cantidad}</span>
          {/* <button type="button" onClick={() => eliminarGasto(gasto.id)}></button> */}
      </p>
    </li>
  )

}
 
export default Gasto;