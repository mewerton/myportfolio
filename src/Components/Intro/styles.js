import styled from "styled-components";

export const Container = styled.div`

display: flex;
height: 77vh;
margin-top: 6rem;

.i-left{
    display: flex;
    position: relative;
    flex: 1;
    flex-direction: column;
    gap: 2rem;

}

.i-name{
    display: flex;
    flex-direction: column;
}

.i-name>:nth-child(1){
    color: ${({theme}) => theme.COLORS.white};
    font-weight: bold;
    font-size: 3rem;
}

.i-name>:nth-child(2){
    color: ${({theme}) => theme.COLORS.orange};
    font-weight: bold;
    font-size: 3rem;
}

.i-name>:nth-child(3){
    font-weight:100;
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.white};
    margin-top: 10px;
}

.i-button{
    width: 8rem;
    height: 2rem;
    cursor: auto;
    
   
}

.i-icons{
    margin-top: 3rem;
    display: flex;
    gap: 0rem;
}

.i-icons>*{
    transform: scale(0.5);
}

.i-icons>*:hover{
    cursor: pointer;
}



.i-right{
    flex:1;
    position: relative;
}

.i-right>*{
    position: absolute;
    z-index: 1;
}

.i-right>:nth-child(1){
    transform: scale(0.82);
    left: -15%;
    top: 8%;
    display: none;
}

.i-right>:nth-child(2){
    top: -13.6%;
    transform: scale(0.77);
    left: -2rem;
    display: none;
}

.i-right>:nth-child(3){
    transform: scale(0.65);
    left: -30%;
    top: -35.6%;
}

.i-right>:nth-child(4){
    transform: scale(0.11);
    
    border-radius: 50%;
    padding: 0;
    margin-top: -25rem;
    margin-left: -15rem;
    display: none;

}

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

@media screen and (max-width: 480px){
    flex-direction: column;
    height: 64rem;
    gap: 7rem;

    .i-right{
        transform: scale(0.8);
        left: -3rem;
    }

    .i-right .blur{
        display: none;
    }

    .floating-div:nth-of-type(1){
        top: -7rem !important

    }

    .i-right>:nth-child(3){
    transform: scale(0.8);
    left: -58%;
}

}

/* background */


`