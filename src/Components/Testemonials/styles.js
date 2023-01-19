import styled from "styled-components";

export const Container = styled.div`

.t-wrapper{
    padding: 0 3rem 0 3rem;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 7rem;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
}

.t-heading{
    align-self: start;
}

.t-heading>*{
    font-size: 2rem;
    font-weight: bold;
}

.t-heading span:nth-of-type(2){
    color: ${({theme}) => theme.COLORS.orange};
}

.t-blur1{
    left: 0rem;
    top: 9rem;
}

.t-blur2{
    left: 38rem;
    top: 16rem;
}

.testimonial{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 2rem;
    width: 30rem;
    height: 12rem;

    background: ${({theme}) => theme.COLORS.background_200};
    border: 7px solid ${({theme}) => theme.COLORS.blueCard};
    box-shadow: ${({theme}) => theme.COLORS.boxShadow};
    border-radius: 20px;

}


.testimonial>img{
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
}

.testimonial>span{
    color: ${({theme}) => theme.COLORS.gray};
}

/* slider */

.t-wrapper .swiper{
    width: 100%;
    height: 70%;
}



.t-wrapper .swiper-pagination-bullet-active{
    background: ${({theme}) => theme.COLORS.orange};
}

`