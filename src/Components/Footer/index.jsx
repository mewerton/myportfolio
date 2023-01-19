import { Container } from "./styles";

import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin"
import Github from "@iconscout/react-unicons/icons/uil-github"
import Instagram from "@iconscout/react-unicons/icons/uil-instagram"

import Wave from "../../assets/wave.png"

export function Footer(){

    return(
        <Container>
            <img src={Wave} alt="" style={{width: "100%"}} />
            <div className="f-content">
                <span>mewerton@gmail.com</span>
                <div className="f-icons">
                    <Linkedin color="white" size="3rem"/>
                    <Github color="white" size="3rem"/>
                    <Instagram color="white" size="3rem"/>
                </div>
            </div>
        </Container>
    )
}