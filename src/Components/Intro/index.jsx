import { Container } from "./styles";

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
            </div>
            <div className="i-right">
                i am right side
            </div>
        </Container>
    )
}