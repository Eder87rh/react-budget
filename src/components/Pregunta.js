import React, {Fragment, useState} from 'react';

const Pregunta = () => {

  // Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // validar el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    // validar
    if(cantidad <= 0 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    // Si se pasa la validación
    
  }

  return (
    <Fragment>
      <h2>Coloca tu Presupuesto</h2>
      <form onSubmit={agregarPresupuesto}>
        <input type="number"
          className="u-full-width"
          placeholder="Agreaga tu presupuesto"
          onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        />
        <input type="submit" className="button-primary u-full-width" value ="Definir Presupuesto"/>
      </form>
    </Fragment>
  );
}
 
export default Pregunta;