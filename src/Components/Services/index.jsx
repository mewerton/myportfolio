import { Container } from "./styles";

import HeratEmoji from "../../assets/heartemoji.png"
import Glasses from "../../assets/glasses.png"
import Humble from "../../assets/humble.png"
import { Card } from "../Card";
import CV from "./CV_Mewerton_Melo.pdf"

export function Services(){

    return(
        <Container>
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
            </div>

            {/* right side */}
            <div className="cards">
                <div style={{left:"14rem"}}>
                    <Card
                    emoji = {HeratEmoji}
                    heading = {"Design"}
                    detail = {"Figma, stretck, Photoshop"}
                    />
                </div>
            {/* second card */}
            <div style={{top: "12rem", left:"-4rem"}}>
                <Card
                    emoji={Glasses}
                    heading={"Desenvolvedor"}
                    detail={"Html, Css, JavaScript, React"}
                />
            </div>
            {/* 3° card */}
            <div style={{top: "19rem", left:"12rem"}}>
                <Card
                    emoji={Humble}
                    heading={"Instrutor"}
                    detail={"Facilidade para gravar vídeos explicativos sobre sistemas desenvolvidos"}
                />
            </div>
             {/* blur divs */}
             <div className="blur s-blur2" style={{background: "rgb(238 210 255)"}}></div>
               

                
            </div>
        </Container>
    )
}