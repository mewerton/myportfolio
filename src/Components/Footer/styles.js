import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: -0.5rem -3.5rem;
    position: relative;
    margin-top: -7rem;

    .f-content{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        margin-top: 4rem;
        gap: 4rem;
        color: ${({theme}) => theme.COLORS.white};
    }

    .f-icons{
        display: flex;
        gap: 2rem;

    }

`