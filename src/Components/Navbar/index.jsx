import { Container } from "./styles";
// import { Toggle } from "../Toggle";

import { Link } from "react-scroll"


export function Navbar(){

    return(
        <Container>
            <div className="n-left">
                <div className="n-name">Mewerton</div>
                {/* <Toggle/> */}
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:"none"}}>
                        <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
                        <li>Início</li>
                        </Link>
                        <Link spy={true} to="Services" smooth={true}>
                        <li>Serviços</li>
                        </Link>
                        <Link spy={true} to="Experience" smooth={true}>
                        <li>Experiência</li>
                        </Link>
                        <Link spy={true} to="Portfolio" smooth={true}>
                        <li>Portfólio</li>
                        </Link>
                        {/* <li>Testemunhas</li> */}
                    </ul>
                </div>
                <Link spy={true} to="Contact" smooth={true}>
                <button className="button n-button">    
                    Contato
                </button>
                </Link>
            </div>
        </Container>
    )
}