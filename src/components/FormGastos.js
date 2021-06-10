import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error';
import shortid from 'shortid';
import { CapitalizeFirst } from '../helpers'

const FormGastos = ({ setGasto, setCrearNuevoGasto }) => {

    const [valoresGasto, setValoresGasto] = useState({
        nombreGasto: '',
        cantidad: 0
    });
    const [error, setError] = useState(false)
    const { nombreGasto, cantidad } = valoresGasto;

    const guardarCantidad = e => {
        setValoresGasto({
            ...valoresGasto,
            cantidad: parseFloat(e.target.value)
        })
    }
    const guardarNombreGasto = e => {
        setValoresGasto({
            ...valoresGasto,
            nombreGasto: e.target.value
        })
    }

    const guardarGasto = e => {
        e.preventDefault()
        //validar
        if (cantidad < 0 || isNaN(cantidad) || nombreGasto.trim() === '') {
            setError(true)
            return
        } else
            setError(false)
        //crear objeto
        const gasto = {
            nombre: nombreGasto,
            cantidad,
            id: shortid.generate()
        }
        //enviar al padre
        setCrearNuevoGasto(true)
        setGasto(gasto)
        //reset form
        setValoresGasto({
            nombreGasto: '',
            cantidad: 0
        })
    }

    return (
        <>
            <h2>Ingresa tus gastos aquí</h2>
            {
                error ? <Error msg="Falta nombre o valor invalido" /> : null
            }
            <form
                onSubmit={guardarGasto}
            >
                <label>Nombre del Gasto</label>
                <input
                    className="u-full-width"
                    type="text"
                    name="nombreGasto"
                    placeholder="¿En qué gastaste?"
                    onChange={guardarNombreGasto}
                    value={CapitalizeFirst(nombreGasto)}
                />
                <label>Cantidad $</label>
                <input
                    className="u-full-width"
                    type="number"
                    step="any"
                    name="cantidad"
                    placeholder="$$$$"
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

FormGastos.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearNuevoGasto: PropTypes.func.isRequired
}

export default FormGastos
