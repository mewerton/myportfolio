import styled from "styled-components";

export const Container =  styled.div`

padding: 0 3rem 0 3rem;
display: flex;
height: 90vh;
margin-top: 10rem;
margin-bottom: 13rem ;

/* INICIO DO QUE PODE EXCLUIR POR JÁ ESTAR NO GLOBAL */
.awesome{
    display: flex;
    flex-direction: column;
    position: relative;
}

.awesome > :nth-child(1){
    color: ${({theme}) => theme.COLORS.white};
    font-size: 2.5rem;
    font-weight: bold;

}

.awesome > :nth-child(2){
    color: ${({theme}) => theme.COLORS.orange};
    font-size: 2.5rem;
    font-weight: bold;
}

.awesome > :nth-child(3){
    color: ${({theme}) => theme.COLORS.white};
    font-size: 14px;
    margin-top: 1rem;
}
.awesome >img{
    scale: calc(0.4);
    margin-left: -23rem;
    margin-top: 10rem;
    flex:1;
    position: absolute;

}

.s-button{
    width: 8rem;
    height: 2rem;
    margin-top: 1rem;
}
/* FIM */
.cards{
    position: relative;
}

.cards>*{
    position: absolute;
}

.cards > :nth-child(1){
    margin-top: 1rem;

}
.cards > :nth-child(2){
    
}
.cards > :nth-child(3){
    
}

/* INICIO */
.blur{
    position: absolute;
    width: 22rem;
    height: 14rem;
    border-radius:  50%;
    background: ${({theme}) => theme.COLORS.background_100};
    z-index: -9;
    top: -18%;
    left: 56%;
    filter: blur(72px);
}
/* FIM */
.s-blur1{
    left: -17rem;
    top: 13rem;
}

.s-blur2{
    top: 10rem;
    left: 10rem;
}

@media screen and (max-width: 480px){
    margin-top: 0;
    flex-direction: column;
    gap: 5rem;
    height: 66rem;
    padding: 0;
    margin-bottom: 15rem ;

    .cards{
        display: flex;
        flex-direction: column;
        gap: 17rem;

    }
    .cards>*{
        position: static;
    }

    .awesome >img{
    display: none;

}
}

`