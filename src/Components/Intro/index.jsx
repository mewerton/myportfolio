import { Container } from "./styles";

import Github from "../../assets/github.png"
import Linkedin from "../../assets/linkedin.png"
import Instagram from "../../assets/instagram.png"


export function Intro(){

    return(
        <Container>
            <div className="i-left">
                <div className="i-name">
                    <span>Olá! Eu sou</span>
                    <span>Mewerton Melo</span>
                    <span>Desenvolvedor Front-End e Bacharel em Sistemas
                    de Informações pela Universidade Estácio de Sá</span>
                </div>
                <button className="button i-button">Contrate-me</button>
                <div className="i-icons">
                    <a href="https://github.com/mewerton" target="_blank">
                    <img src={Github} alt="imagem do Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/mewerton/" target="_blank">
                    <img src={Linkedin} alt="imagem do Linkedin" />
                    </a>
                    <a href="https://www.instagram.com/mewerton/" target="_blank">
                    <img src={Instagram} alt="imagem do Instagram" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                i am right side
            </div>
        </Container>
    )
}