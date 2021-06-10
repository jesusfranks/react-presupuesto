import { useEffect, useState } from "react";
import ListaGastos from "./components/ListaGastos";
import FormGastos from "./components/FormGastos";
import Pregunta from "./components/Pregunta";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {

    const [presupuesto, setPresupuesto] = useState(0)
    const [restante, setRestante] = useState(0)
    const [mostarPregunta, setMostrarPregunta] = useState(true)
    const [gastos, setGastos] = useState([])
    const [gasto, setGasto] = useState({})
    const [crearNuevoGasto, setCrearNuevoGasto] = useState(false)

    //useEffect que actualiza el gasto
    useEffect(() => {
        if (crearNuevoGasto) {
            setGastos([
                ...gastos,
                gasto
            ])
            // Resta del presupuesto el gasto actual
            const resta = restante - gasto.cantidad
            setRestante(resta)
            //resetar estado de crearnuevogasto
            setCrearNuevoGasto(false)
        }
    }, [gasto, crearNuevoGasto, gastos, restante]);

    return (
        <div className="container">
            <header>
                <h1>Gasto semanal</h1>
            </header>
            <div className="contenido-principal contenido">
                {
                    mostarPregunta ? (
                        <Pregunta
                            setPresupuesto={setPresupuesto}
                            setRestante={setRestante}
                            setMostrarPregunta={setMostrarPregunta}
                        />
                    ) : (
                        <div className="row">
                            <div className="one-half column">
                                <FormGastos
                                    setGasto={setGasto}
                                    setCrearNuevoGasto={setCrearNuevoGasto}
                                />
                            </div>
                            <div className="one-half column">
                                <ControlPresupuesto
                                    presupuesto={presupuesto}
                                    restante={restante}
                                />
                                <ListaGastos
                                    gastos={gastos}
                                />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default App;
