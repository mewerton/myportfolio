import { Container } from "./styles";

import Github from "../../assets/github.png"
import Linkedin from "../../assets/linkedin.png"
import Instagram from "../../assets/instagram.png"
import Vector1 from "../../assets/Vector1.png"
import Vector2 from "../../assets/Vector2.png"
import boy from "../../assets/boy.png"
import thumbup from "../../assets/thumbup.png"
import Crown from "../../assets/crown.png"
import developer from "../../assets/EmojiDeveloper.png"
import { FloatingDiv } from "../FloatingDiv"
import { motion } from "framer-motion"




export function Intro(){

    const transition = {duration : 2, type: "spring"}

    return(
        <Container>
            <div className="i-left">
                <div className="i-name">
                    <span>Olá! Sou</span>
                    <span>Mewerton Melo</span>
                    <span>Desenvolvedor Front-End e Bacharel em Sistemas
                    de Informações pela Universidade Estácio de Sá</span>
                </div>
                <button className="button i-button">Contrate-me</button>
                <div className="i-icons">
                    <a href="https://github.com/mewerton" target="_blank">
                    <img src={Github} alt="imagem do Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/mewerton/" target="_blank">
                    <img src={Linkedin} alt="imagem do Linkedin" />
                    </a>
                    <a href="https://www.instagram.com/mewerton/" target="_blank">
                    <img src={Instagram} alt="imagem do Instagram" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{left:"-36%"}}
                    whileInView={{ left: "-24%"}}
                    transition={transition}
                    src={developer}  alt="" 
                />
                <motion.div 
                    initial={{top: "-4%", left: "74%"}}
                    whileInView={{ left: "68%"}}
                    transition={transition}

                    style={{top: "-4%", left:"68%"}}
                    className="floating-div"
                    >
                    <FloatingDiv image={Crown} txt1="Desenvolvedor" txt2="Web"/>
                </motion.div>
                <motion.div 
                    initial={{top: "18rem", left: "9rem"}}
                    whileInView={{ left: "0rem"}}
                    transition={transition}

                    style={{top:"18rem", left:"0rem"}}
                    className="floating-div"
                    >
                    <FloatingDiv image={thumbup} txt1="Experiencia com" txt2="Web Designer"/>
                </motion.div>
                {/* blur divs */}
                <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
                <div className="blur" style={{
                    background:"#c1f5ff",
                    top:"17rem",
                    width:"21rem",
                    height:"11rem",
                    left:"-9rem"
                    }}>

                </div>
           </div>            
        </Container>
    )
}