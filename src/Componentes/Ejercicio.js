import { renderizarContenido } from '../Utils/Utils';
import '../Estilos/Ejercicios.css';
import React, { useState } from 'react';

export default function Ejercicio({ ejercicio }) {
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState('');
    const [retroalimentacion, setRetroalimentacion] = useState('')

    const manejarSeleccion = e => {
        setRespuestaSeleccionada(e.target.value);
    };

    const manejarSubmit = e => {
        e.preventDefault();

        if (respuestaSeleccionada != "") {
            if (ejercicio.respuestas[respuestaSeleccionada].estado == "true") {
                setRetroalimentacion(ejercicio.respuestas[respuestaSeleccionada].retroalimentacion)
            } else {
                setRetroalimentacion(ejercicio.respuestas[respuestaSeleccionada].retroalimentacion)
            }
        }



    };

    return (
        <div className="contenedor-card-ejercicio">
            <div className="contenedor-card-ejercicio-pregunta">
                {ejercicio.imagen && (
                    <img
                        src={ejercicio.imagen}
                        className="imagen-card-ejercicio"
                        alt="Imagen del ejercicio"
                    />
                )}
                <div className="pregunta-card-ejercicio">
                    {renderizarContenido(ejercicio.pregunta)}
                </div>
            </div>
            <form onSubmit={manejarSubmit}>
                {Object.keys(ejercicio.respuestas).map(key => (
                    <div key={key} className='respuesta-ejercicio'>
                        <input
                            type='radio'
                            name='respuesta'
                            id={ejercicio.id}
                            value={key}
                            onChange={manejarSeleccion}
                            checked={respuestaSeleccionada === key}
                        />
                        <label htmlFor={ejercicio.id}> <strong> {`${key}) `} </strong> {`${ejercicio.respuestas[key].contenido}`}</label>
                    </div>
                ))}
                <button type='submit' className='boton-ejercicio'>Seleccionar</button>
                {retroalimentacion && (
                    <div className="retroalimentacion-card-ejercicio">
                        <p className='titulo-retroalimentacion'><strong>Retroalimentación</strong></p>
                        {retroalimentacion}
                    </div>
                )}
            </form>
        </div>
    );
}
