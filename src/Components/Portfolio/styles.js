import styled from "styled-components";

export const Container = styled.div`
    
    .portfolio{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 70vh;
    }

    /* heading */

    .portfolio span:nth-of-type(1){
        color: ${({theme}) => theme.COLORS.white};
        font-size: 2rem;
        font-weight: bold;
    }

    .portfolio span:nth-of-type(2){
        color: ${({theme}) => theme.COLORS.orange};
        font-size: 2.5rem;
        font-weight: bold;
    }
    
    /* slider */
    .portfolio .swiper{
        overflow: visible!important;;
    }

    .portfolio-slider{
       margin-top: 3rem;
       width: 100%;


    }

    .portfolio-slider .swiper-slide{
        width: 20rem;
    }

    .portfolio img{
        width: 19rem;
        filter: drop-shadow(-12px 15px 13px ${({theme}) => theme.COLORS.background_300});
        border-radius: 19px;
    }
    

`
