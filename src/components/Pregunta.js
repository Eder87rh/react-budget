import React, {Fragment, useState} from 'react';
import Error from './Error';

const Pregunta = (props) => {
  const {guardarPresupuesto, guardarPreguntaPresupuesto} = props;

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
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarPreguntaPresupuesto(false);
  }

  return (
    <Fragment>
      <h2>Coloca tu Presupuesto</h2>

      {error ? <Error mensaje="El presupuesto es incorrecto"/> : null}
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