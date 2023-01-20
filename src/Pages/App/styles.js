import styled from "styled-components";

export const Container = styled.div`

    padding: 0.5rem 3.5rem;
    overflow: hidden;
    color: ${({theme}) => theme.COLORS.black};
    
    @media screen and (max-width: 480px){
    
        padding: 0.5rem 1rem;
    }
    /* BACKGROUND */
    
    /* background: linear-gradient(-25deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
    background: radial-gradient(circle at 107.92% 90.56%, #ffffff 0, #b5c9f2 50%, #62605a 100%);

    background-size: 400% 400%;


 
`