import { Container } from "./styles";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

// import Vector4 from "../../assets/Vector4.png"

export function Contact(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_33621pb', 'template_m9ooobm', form.current, 'pUfcvc_xgEeuJ8jVT')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <Container id="Contact">
            <div className="w-left">
                <div className="awesome">
                    <span>Entre em </span>
                    <span>Contato</span>
                    <div className="blur c-blur1" style={{background: "#abf1ff94"}}></div>  
                    {/* <img src={Vector4} alt="" /> */}
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Nome"/>
                    <input type="email" name="user_email" className="user" placeholder="E-mail"/>
                    <textarea name="message" className="user" placeholder="Mensagem"></textarea>
                    <input type="submit" value="Enviar" className="button" />
                    <div>
                        <div className="blur c-blur2" style={{ background: "rgb(238 210 255)" }}></div>
                    </div>
                </form>
            </div>
        </Container>
    )

}