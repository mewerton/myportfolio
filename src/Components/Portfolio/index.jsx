import { Container } from "./styles";
import {Swiper, SwiperSlide} from "swiper/react"

import Sidebar from "../../assets/sidebar.png"
import Ecommerce from "../../assets/ecommerce.png"
import HOC from "../../assets/hoc.png"
import MusicApp from "../../assets/musicapp.png"
import 'swiper/css'



export function Portfolio(){

    return(
        <Container id="Portfolio">
            <div className="portfolio">

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
                        <img src={Sidebar} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Ecommerce} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={MusicApp} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={HOC} alt="" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </Container>
    )
}