import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useEffect, useState } from 'react';
import '../Estilos/Snipet.css'; 

export default function Snipet({ archivo, lenguaje }) {
    const [codigo, setCodigo] = useState("");
    const [copy, setCopy] = useState(false);

    function leerArchivo() {
        fetch(archivo)
            .then(res => res.text())
            .then(content => {
                setCodigo(content);
            });
    }

    useEffect(() => {
        leerArchivo();
    }, [archivo]);

    return (
        <div className="contenedor-snipet">
            <div className="contenedor-barra">
                <div className="barra-titulo">Ejemplo</div>
                {copy ? (
                    <div className="barra-copiar">✔ Copiado</div>
                ) : (
                    <div className="barra-copiar" onClick={() => {
                        navigator.clipboard.writeText(codigo);
                        setCopy(true);
                        setTimeout(() => {
                            setCopy(false);
                        }, 3000);
                    }}>📋 Copiar</div>
                )}
            </div>
            <SyntaxHighlighter language={lenguaje} style={atelierForestDark} className="codigo">
                {codigo}
            </SyntaxHighlighter>
        </div>
    );
};
