import styled from "styled-components";

export const Container = styled.div`

    padding: 0.5rem 3.5rem;
    overflow: hidden;
    color: ${({theme}) => theme.COLORS.black};

    @media screen and (max-width: 480px){
    
        padding: 0.5rem 1rem;
    }


`