import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import '../Estilos/SideBar.css'; 

export default function SideBar() {

    const history = useNavigate();



    const handleRedirect = (url) => {
        history(url);
    };

    return (
        <div className="contenedor-sidebar">
            <FontAwesomeIcon className="icono" icon={faGraduationCap} />
            <div className="titulo-sidebar">
                Sistema de refuerzo al aprendizaje
            </div>
            <hr />
            <div className="opciones" onClick={() => handleRedirect('/')}>
                <FontAwesomeIcon className="iconoOpcion" icon={faHouse} />
                <label> Vista general</label>
            </div>
        </div>
    );
};
