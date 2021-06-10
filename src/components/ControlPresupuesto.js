import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { colorAlert } from '../helpers'

const ControlPresupuesto = ({ presupuesto, restante }) => {

    const [validar, setValidar] = useState(true)

    useEffect(() => {
        if (restante < 0) {
            setValidar(false)
        } else {
            setValidar(true)
        }
    }, [setValidar, restante])

    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: {presupuesto}
            </div>
            <div className={colorAlert(presupuesto, restante)}>
                Restante: {restante}
            </div>
            {
                validar ? null :
                    <div className="alert alert-danger">
                        <p className="text-center">Has rebasado tu presupuesto!!!</p>
                    </div>
            }
        </>
    )
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default ControlPresupuesto
