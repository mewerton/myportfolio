import styled from "styled-components";

export const Container = styled.div`

    .toggle{
        display: flex;
        justify-content: space-between;
        border: 3px solid ${({theme}) => theme.COLORS.orange};
        border-radius: 1rem;
        position: relative;
        padding: 2px;
        cursor: pointer;

    }

    .toggle>*{
        width: 1rem;
        height: 1rem;
        color: ${({theme}) => theme.COLORS.orange};
    }

    .t-button{
        border-radius: 100%;
        background: ${({theme}) => theme.COLORS.orange};
        position: absolute;
        
    }


`