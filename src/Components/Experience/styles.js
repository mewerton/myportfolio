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
        height: 4rem;
        width: 4rem;
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
        top: -8px;
        left: -8px;
        bottom: -8px;
        right: -8px;
        position: absolute;
        z-index: -1;
        box-shadow: ${({theme}) => theme.COLORS.boxShadow};

    }

    .achievement span:nth-of-type(2){
        color: ${({theme}) => theme.COLORS.orange};
    }
    

`