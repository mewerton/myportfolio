import styled from "styled-components";

export const Container = styled.div`
    width: 12rem;
    height: 14rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    text-align: center;
    background: ${({theme}) => theme.COLORS.background_200};
    border: 7px solid ${({theme}) => theme.COLORS.orangeCard};
    box-shadow: ${({theme}) => theme.COLORS.boxShadow};
    border-radius: 20px;
    padding:  0px 26px 2rem 26px;

    span:nth-of-type(2){
        color: ${({theme}) => theme.COLORS.white};
        font-size: 16px;
    }

    img{
        transform: scale(0.6);
        margin-bottom: -2rem;
    }

    .c-button{
        background: ${({theme}) => theme.COLORS.white};
        box-shadow: 0px 19px 60px rgba(0, 0, 0, 0.08);
        border-radius: 7px;
        border: none;
        padding: 10px;
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.blueText};

        cursor: pointer;
    }

    @media screen and (max-width: 480px){
        width: 100%;
    }

`