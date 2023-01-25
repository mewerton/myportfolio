import { Container } from "./styles";

import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin"
import Github from "@iconscout/react-unicons/icons/uil-github"
import Instagram from "@iconscout/react-unicons/icons/uil-instagram"
import Back from "@iconscout/react-unicons/icons/uil-angle-double-up"

import Wave from "../../assets/wave.png"

export function Footer(){

    return(
        <Container>
            <img src={Wave} alt="" style={{width: "100%"}} />
                <div className="f-back">
                  
                </div>
            <div className="f-content">
                <div className="dlass">
                    <div className="f-icons" id="Intro">
                        <a href="#">
                            <Back color="white" size="5rem"/>
                        </a>
                    </div>
                </div>
                <span>mewerton@gmail.com</span>
                <div className="f-icons">
                    <a href="https://www.linkedin.com/in/mewerton/">
                        <Linkedin color="white" size="3rem"/>
                    </a>
                    <a href="https://github.com/mewerton">
                        <Github color="white" size="3rem"/>
                    </a>
                    <a href="https://www.instagram.com/mewerton/">
                        <Instagram color="white" size="3rem"/>
                    </a>
                </div>
            </div>
        </Container>
    )
}