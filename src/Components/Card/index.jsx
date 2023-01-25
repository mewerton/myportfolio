import { useState } from "react";
import { Modal } from "../Modal";
import { Container } from "./styles";

export function Card({emoji, heading, detail, cardTitle, cardText }){

    const INSTRUTOR = "Instrutor para qualquer coisa"

    const [modalOpen, setModalOpen] = useState(false)



    return(
        <Container>
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">
                <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
                    <div className="information">
                        <h1>{cardTitle}</h1>
                        <p>{cardText}</p>
                        <button type="button" onClick={() => setModalOpen(false)}>Fechar</button>
                    </div>
                </Modal>
                <div className="read-more">
                    <button id="read-moreb" onClick={() => {
                        setModalOpen(true)
                    }}>
                       LEIA MAIS 
                    </button>
                </div>
            </button>

        </Container>
    )

}