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
                A busca por novos desafios é um ponto marcante na minha carreira,
                    <br />
                    os 16 anos no mercado de trabalho já me proporcionaram experiencias incríveis,
                    <br />
                    fui de professor de informática a desenvolvedor de robôs para o mercado financeiro, 
                    <br />
                    mas no último ano tenho dedicado o meu tempo apenas ao desenvolvimento web,
                    <br />
                    essa é a minha principal área de interesse.
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
                    detail = {"Figma, Photoshop"}
                    cardTitle = {"Design"}
                    cardText = {" Ainda na Universidade fiz um curso de web designer, e esse conhecimento foi muito útil em todos os trabalhos que já fiz na vida, sempre acabei fazendo material publicitário por todas empresas que passei, o Photoshop me ajudou bastante nisso, e agora tenho conhecido o Figma para desenvolver projetos. "}                    
                    
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
                    cardTitle = {"Desenvolvedor"}
                    cardText = {"Meu foco está voltado ao desenvolvimento web, a cada dia tenho me desafiado e buscado desenvolver cada vez mais projetos para adquirir o máximo de conhecimento, as bibliotecas do React são cada vez interessantes, e o estudo precisa ser contínuo para manter-se atualizado."} 
                    
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
                    heading={"Vendas On-line"}
                    detail={"Crio conteúdo para redes sociais, seja vendendo ou apenas educando"}
                    cardTitle = {"Instrutor"}
                    cardText = {"Trabalhei com vendas por toda a minha vida, seja de um produto físico ou digital, em várias situações utilizei essa desenvoltura para criar conteúdo digital, seja gravando vídeos de propaganda ou material educativo, como por exemplo vídeos explicando o manuseio de um determinado sistema, sua instalação, atualização de versão, tudo que necessitava ser explicado ao usuário. Em todas essas situações eu mesmo criava o roteiro e o conteúdo, como também já fui professor, tenho uma certa facilidade em transmitir meus conhecimentos."} 

                />
            </motion.div>
             {/* blur divs */}
             <div className="blur s-blur2" style={{background: "rgb(238 210 255)"}}></div>
               

                
            </div>
        </Container>
    )
}