import './Navegacao.css'
import { Link } from 'react-router-dom';


function Navegacao() {

    return (
        <div className="barra-navegacao">
            <div className="logo-zoo">
                <h1>ZOOLÓGICO</h1>
            </div>

            <div className='navbar-opcoes'>
                <ul>

                    <li>

                        
                        <Link style={{color: "A7A000"}} to="/">INICIO</Link>
                    </li>
                    <li>
                        <Link style={{color: "A7A000"}} to="/animais">OS ANIMAIS</Link>                                                                                                                                                                                 
                    </li>
                    <li>
                        <Link style={{color: "A7A000"}} to="/fotos">FOTOS</Link>
                    </li>
                    <li>
                        <Link style={{color: "A7A000"}} to="/depoimentos">DEPOIMENTOS</Link>
                    </li>
                    <li>
                        <Link style={{color: "A7A000"}} to="/login">LOGIN</Link>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Navegacao
