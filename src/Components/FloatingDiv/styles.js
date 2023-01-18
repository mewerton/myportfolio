import styled from "styled-components";

export const Container = styled.div`
justify-content: space-around;
display: flex;
background: ${({theme}) => theme.COLORS.white};
box-shadow: ${({theme}) => theme.COLORS.boxShadow};
border-radius: 17px;
align-items: center;
padding: 0px 20px 0px 0px;
height: 4.0rem;

img{
    transform: scale(0.4);
}

span{
    font-family:  sans-serif;
    font-size: 16px;

}
` 