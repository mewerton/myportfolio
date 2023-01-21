import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    height: 30vh;
    margin-bottom: 8rem;

    .achievement{
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .circle{
        height: 5rem;
        width: 5rem;
        background: ${({theme}) => theme.COLORS.white};
        border-radius: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:  1.5rem;
        font-weight: bold;
        margin-bottom: 2rem;
        
    }
    .circle::before{
        border-radius: 100%;
        content: '';
        background-image: linear-gradient(to bottom, #87e6fb 0%, #ffc05c 100%);
        top: -9px;
        left: -9px;
        bottom: -9px;
        right: -9px;
        position: absolute;
        z-index: -1;
        box-shadow: ${({theme}) => theme.COLORS.boxShadow};

    }
   
    .achievement span:nth-of-type(1){
        color: ${({theme}) => theme.COLORS.white};
    }

    .achievement span:nth-of-type(2){
        color: ${({theme}) => theme.COLORS.orange};
    }

    @media screen and (max-width: 480px){
        flex-direction: column;
        gap: 3rem;
        margin-bottom: 12rem;
        height: 50vh;
        
        
        .circle::before{

        top: -3px;
        left: -3px;
        bottom: -3px;
        right: -3px;
        }

        .circle{
            margin-top: -1rem;
            margin-bottom: 1rem;
        }
       

    }
    

`