import { useNavigate } from "react-router-dom";
import '../Estilos/CardUnidad.css'

export default function CardUnidad({id, unidad}) {

    const history = useNavigate();

    const handleRedirect = (url) => {
        history(url);
    };

    function comprobarUnidad(id) {
        handleRedirect("/programacion/" + id)
    }

    return (
        <div className="contenedor-card-unidad" onClick={() => { comprobarUnidad(id) }}>
            <div className="numero-unidad"> {id}
            </div>
            
            <div className="titulo-unidad-info">
                {unidad}
            </div>
        </div>
    );
}