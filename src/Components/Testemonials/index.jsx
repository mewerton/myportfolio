import { Container } from "./styles";

import { Swiper, SwiperSlide} from "swiper/react"
import { Pagination } from "swiper";
import "swiper/css/pagination"
import "swiper/css"

import profilePic1 from "../../assets/profile1.jpg"
import profilePic2 from "../../assets/profile2.jpg"
import profilePic3 from "../../assets/profile3.jpg"
import profilePic4 from "../../assets/profile4.jpg"


export function Testemonials(){

    const clients =[
        {
            img: profilePic1,
            review:
             "LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sapiente ipsum doloremque nihil expedita maxime exercitationem totam id laborum, animi eum ullam optio quaerat facilis a? Illum sed tempora corporis?"

        },
        {
            img: profilePic2,
            review:
             "LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sapiente ipsum doloremque nihil expedita maxime exercitationem totam id laborum, animi eum ullam optio quaerat facilis a? Illum sed tempora corporis?"

        },
        {
            img: profilePic3,
            review:
             "LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sapiente ipsum doloremque nihil expedita maxime exercitationem totam id laborum, animi eum ullam optio quaerat facilis a? Illum sed tempora corporis?"

        },
        {
            img: profilePic4,
            review:
             "LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sapiente ipsum doloremque nihil expedita maxime exercitationem totam id laborum, animi eum ullam optio quaerat facilis a? Illum sed tempora corporis?"

        }
    ]

    return(
        <Container>
        <div className="t-wrapper">

            <div className="t-heading">
                <span>Os clientes sempre recebem </span>
                <span>um trabalho excepcional </span>
                <span>de mim...</span>

                <div className="blur t-blur1" style={{background:"#abf1ff94"}}></div>
                <div className="blur t-blur2" style={{backgroung: "skyblue"}}></div>
            </div>
            {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}

            >
                {clients.map((client, index) => {
                    return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}


            </Swiper>

        </div>
        </Container>
    )
}