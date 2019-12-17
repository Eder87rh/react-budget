import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';

function App() {

  // state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);
  const [creargasto, guardarCrearGasto] = useState(false);
  const [gasto, guardarGasto] = useState({});
  const [gastos, guardarGastos] = useState([]);

  useEffect(() => {
    if(creargasto) {
      const listadoGastos = [...gastos, gasto];
      guardarGastos(listadoGastos);

      // una vez que se agrega lo ponemos como false
      guardarCrearGasto(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [creargasto])

  return (
    <div className="App container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {(preguntaPresupuesto)
            ?
              <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
              />
            :
              (
                <div className="row">
                  <div className="one-half column">
                    <Formulario 
                      guardarGasto={guardarGasto}
                      guardarCrearGasto={guardarCrearGasto}
                      />
                  </div>
                  <div className="one-half column">
                    <Listado
                      gastos={gastos}
                    />
                  </div>
                </div>
              )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
