import { Container } from "./styles";

import Html5 from "../../assets/html5.png"
import Css3 from "../../assets/css3.png"
import React from "../../assets/react.png"
import JS from "../../assets/js.png"
import Ps from "../../assets/ps.png"

import { motion } from "framer-motion";


export function Works(){

    return(
        <Container id="Works">
             <div className="awesome">
                <span>Tecnologias modernas</span>
                <span>para aplicações</span>
                <span>
                    Como Desenvolvedor web front-end tenho buscado conhecimento diário em várias
                    <br />
                    tecnologias, mas principalmente o React e JavaScript para front-end, e por já ter
                    <br />
                    experiencia com o Photoshop, tenho como próximo objetivo aprofundar os meus 
                    <br />
                    conhecimentos em mais ferramentas de design como Figma, Sketch, Adobe XD, 
                    <br />
                    buscando assim tornar-me um Desenvolvedor Web e UX/UI Designer.

                </span>
                
                {/* <button className="button s-button">Vamos fazer um projeto?</button> */}
                
                {/* blur divs */}
                <div className="blur s-blur1" style={{background:"#abf1ff94"}}></div>
            </div>
            {/* right site */}
            <div className="w-right">
                <motion.div 
                    initial={{ rotate:45}}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 4.5, type: "spring" }}
                    
                    className="w-mainCircle">
                    
                    <div className="w-secCircle">
                        <img src={Html5} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Css3} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={React} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={JS} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Ps} alt="" />
                    </div>
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </Container>
    )
}