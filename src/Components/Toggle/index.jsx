import { Container } from "./styles";

import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from "@iconscout/react-unicons/icons/uil-moon"

export function Toggle(){
    return(
        <Container>
            <div className="toggle">
                <Moon/>
                <Sun/>
                <div className="t-button">
                    
                </div>

            </div>
        </Container>
    )
}