import { Container } from "./styles";
import {Swiper, SwiperSlide} from "swiper/react"

import Sidebar from "../../assets/sidebar.png"
import Ecommerce from "../../assets/ecommerce.png"
import HOC from "../../assets/hoc.png"
import MusicApp from "../../assets/musicapp.png"
import 'swiper/css'

import IconLink from "@iconscout/react-unicons/icons/uil-external-link-alt"



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
                        <img src={Sidebar} alt="" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://github.com/mewerton/ImportantNotes_FrontEnd" target="_blank">
                        <img src={Ecommerce} alt="" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://github.com/mewerton/myportfolio" target="_blank">
                        <img src={MusicApp} alt="" />
                        </a>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <a href="">
                        <img src={HOC} alt="" />
                        </a>
                    </SwiperSlide> */}

                </Swiper>
            </div>
        </Container>
    )
}