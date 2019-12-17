import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = (props) => {

  const { guardarGasto } = props;
  // state
  const [nombreGasto, guardarNombreGasto] = useState('');
  const [cantidadGasto, guardarCantidadGasto]= useState(0);
  const [error, guardarError] = useState(false);

  const agregarGasto = e => {
    e.preventDefault()

    // validar
    if(cantidadGasto <= 0 || isNaN(cantidadGasto) || nombreGasto === '') {
      guardarError(true);
      return;
    }

    
    // construir objeto de gasto
    const gasto = {
      nombreGasto,
      cantidadGasto,
      id: shortid.generate()
    }

    // pasar el gasto al componente principal
    guardarGasto(gasto);
    // Eliminar alerta
    guardarError(false);
    // resetear el form
    guardarNombreGasto('');
    guardarCantidadGasto('');

  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agreaga tus gastos aquí</h2>

      {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto"/> : null}

      <div className="campo">
        <label htmlFor="">nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange={e => guardarNombreGasto(e.target.value)}
          value={nombreGasto}
        />
      </div>
      <div className="campo">
        <label htmlFor="">Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
          value={cantidadGasto}
        />
      </div>

      <input type="submit" className="button-primary u-full-width" value="Agreagar gasto" />
    </form>
  );
}
 
export default Formulario;