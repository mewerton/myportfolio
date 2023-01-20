import { Container } from "./styles";

import HeratEmoji from "../../assets/heartemoji.png"
import Glasses from "../../assets/glasses.png"
import Humble from "../../assets/humble.png"
import Vector3 from "../../assets/Vector3.png"

import { Card } from "../Card";
import CV from "./CV_Mewerton_Melo.pdf"

import { motion } from "framer-motion";

export function Services(){
   
    const transition = {duration : 2, type: "spring"}

    return(
        <Container id="Services">
            {/* left side */}
            <div className="awesome">
                <span>Minhas áreas</span>
                <span>de trabalho</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste, distinctio rem
                    <br />
                    ispum is simples dummy text of printing
                </span>
                <a href={CV} download>
                <button className="button s-button">Download CV</button>
                </a>
                {/* blur divs */}
                <div className="blur s-blur1" style={{background:"#abf1ff94"}}></div>
                <img src={Vector3} alt="" />
            </div>

            {/* right side */}
            <div className="cards">
                <motion.div 
                    whileInView={{ left: "14rem"}}
                    initial={{left: "20rem"}}
                    transition={transition}

                    style={{left:"74rem"}}>

                    <Card
                    emoji = {HeratEmoji}
                    heading = {"Design"}
                    detail = {"Figma, stretck, Photoshop"}
                    />
                </motion.div>
            {/* second card */}
            <motion.div 
                whileInView={{ left: "-4rem"}}
                initial={{left: "10rem"}}
                transition={transition}
                
                style={{top: "12rem", left:"-4rem"}}>
                <Card
                    emoji={Glasses}
                    heading={"Desenvolvedor"}
                    detail={"Html, Css, JavaScript, React"}
                />
            </motion.div>
            {/* 3° card */}
            <motion.div 
                whileInView={{ left: "12rem"}}
                initial={{left: "25rem"}}
                transition={transition}

                style={{top: "17rem", left:"12rem"}}>
                <Card
                    emoji={Humble}
                    heading={"Instrutor"}
                    detail={"Facilidade para gravar vídeos explicativos sobre sistemas desenvolvidos"}
                />
            </motion.div>
             {/* blur divs */}
             <div className="blur s-blur2" style={{background: "rgb(238 210 255)"}}></div>
               

                
            </div>
        </Container>
    )
}