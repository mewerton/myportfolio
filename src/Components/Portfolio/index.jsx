import { Container } from "./styles";
import {Swiper, SwiperSlide} from "swiper/react"

import FoodExplorer from "../../assets/foodexplorer.png"
import ImportantNotes from "../../assets/importantnotes.png"
import MyPortfolio from "../../assets/myportfolio.png"
import 'swiper/css'


export function Portfolio(){

    return(
        <Container >
            <div className="portfolio" id="Portfolio">

                {/* heading */}
                <span>Projetos recentes</span>
                <span>Portfólio</span>
                

                {/* slider */}
                <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
                >
                    <SwiperSlide>
                        <a href="https://github.com/mewerton/FoodExplorer_FrontEnd" target="_blank">
                        <img src={FoodExplorer} alt="" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://github.com/mewerton/ImportantNotes_FrontEnd" target="_blank">
                        <img src={ImportantNotes} alt="" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://github.com/mewerton/myportfolio" target="_blank">
                        <img src={MyPortfolio} alt="" />
                        </a>
                    </SwiperSlide>
                 
                </Swiper>
            </div>
        </Container>
    )
}