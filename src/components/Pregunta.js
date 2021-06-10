import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

const Pregunta = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {

    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    const guardarCantidad = e => {
        setCantidad(parseFloat(e.target.value), 10)
    }

    const guardarPresupuesto = e => {
        e.preventDefault();

        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true)
            return
        } else
            setError(false)

        //definir variables
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setMostrarPregunta(false)

    }

    return (
        <>
            <h2>Coloca tu presupuesto</h2>
            { error ? <Error msg="El presupuesto es incorrecto" /> : null}
            <form
                onSubmit={guardarPresupuesto}
            >
                <input
                    className="u-full-width"
                    type="number"
                    step="any"
                    name="presupuesto"
                    placeholder="Escribe tu presupuesto"
                    onChange={guardarCantidad}
                    value={cantidad}
                />
                <button
                    type="submit"
                    className="button-primary u-full-width"
                >Definir presupuesto</button>
            </form>
        </>
    )
}

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrarPregunta: PropTypes.func
}


export default Pregunta
