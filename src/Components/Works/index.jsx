import { Container } from "./styles";

import Upwork from "../../assets/Upwork.png"
import Fiverr from "../../assets/fiverr.png"
import Amazon from "../../assets/amazon.png"
import Shopify from "../../assets/Shopify.png"
import Facebook from "../../assets/Facebook.png"

import { motion } from "framer-motion";


export function Works(){

    return(
        <Container id="Works">
             <div className="awesome">
                <span>Funciona para todas essas</span>
                <span>Marcas & Serviços</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste, distinctio rem
                    <br />
                    ispum is simples dummy text of printing
                    <br />
                    dolor sit amet consectetur adipisicing elit. printing text of printing
                    <br />
                    adipisicing elit. Quae iste, distinctio of printing simples dummy text
                </span>
                
                <button className="button s-button">Contrate-me</button>
                
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
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </Container>
    )
}