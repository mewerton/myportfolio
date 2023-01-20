import styled from "styled-components";

export const Container = styled.div`

    padding: 0.5rem 3.5rem;
    overflow: hidden;
    color: ${({theme}) => theme.COLORS.black};

    /* BACKGROUND */
    
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;


    @media screen and (max-width: 480px){
    
        padding: 0.5rem 1rem;
    }

    @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

`