import Snipet from "./Snipet";
import { useState } from 'react';
import '../Estilos/CodigoSeleccion.css'; 

export default function CodigoSeleccion({ jav, py }) {
    const [lenguaje, setLenguaje] = useState("java");

    return (
        <div className="contenedor-codigo-seleccion">
            <button className={lenguaje === "java" ? "botonSelect" : "boton"} onClick={() => setLenguaje("java")}>Java</button>
            <button className={lenguaje === "python" ? "botonSelect" : "boton"} onClick={() => setLenguaje("python")}>Python</button>
            <Snipet archivo={lenguaje === "java" ? jav : py} lenguaje={lenguaje} />
        </div>
    );
}
