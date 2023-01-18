import { Container } from "./styles";

export function Navbar(){

    return(
        <Container>
            <div className="n-left">
                <div className="n-name">Mewerton</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:"none"}}>
                        <li>Inicio</li>
                        <li>Serviços</li>
                        <li>Experiência</li>
                        <li>Portfolio</li>
                        <li>Testemunhas</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contato
                </button>
            </div>
        </Container>
    )
}