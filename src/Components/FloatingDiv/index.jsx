import { Container } from "./styles";

export function FloatingDiv({image, txt1, txt2}){

    return(
        <Container>
            <img src={image} alt="" />
            <span> 
                {txt1}
                <br />
                {txt2}
            </span>
        </Container>
    )
}