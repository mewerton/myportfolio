import { Container } from "./styles";

export function Modal({ children ,isOpen, setIsOpen, id="modal", closeButton = true, blackdropClose = false}){
    if (!isOpen) return null;

    // const handleBackDropClick = (e) =>{
    //     if (e) e.preventDefault()
    //     if(e.target.id !== id) return
    //     setIsOpen(false)
    // }

    return(
        <Container>
            <div className="backdrop" >
                <div className="modal">
                    {children}
                </div>
            </div>
        </Container>
    )
}

