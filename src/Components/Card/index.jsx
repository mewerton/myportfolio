import { Container } from "./styles";

export function Card({emoji, heading, detail }){

    return(
        <Container>
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">LEIA MAIS</button>

        </Container>
    )

}