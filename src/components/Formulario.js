import React, {useState} from 'react';

const Formulario = (props) => {
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

    // pasar el gasto al componente principal
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agreaga tus gastos aquí</h2>
      <div className="campo">
        <label htmlFor="">nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange={e => guardarNombreGasto(e.target.value)}
        />
      </div>
      <div className="campo">
        <label htmlFor="">Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
        />
      </div>

      <input type="submit" className="button-primary u-full-width" value="Agreagar gasto" />
    </form>
  );
}
 
export default Formulario;