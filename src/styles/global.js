import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${({theme}) => theme.COLORS.smboxShadow};
}

a{
    text-decoration: none;
}

.button{

    border-radius: 34px;
    border: none;
    color: ${({theme}) => theme.COLORS.white};
    font-size: 16px;
    padding: 11px 26px 11px 26px;
    background: ${({theme}) => theme.COLORS.background_yellow};
    box-shadow: 0px 20px 24px 3px ${({theme}) => theme.COLORS.background_orange};


    cursor: pointer;
    transition: filter 0.2s;
}

.s-button{
    width: 8rem;
    height: 2rem;
    margin-top: 1rem;
}

.button:hover{
    background: ${({theme}) => theme.COLORS.white};
    color: ${({theme}) => theme.COLORS.orange};
    border: 1px solid ${({theme}) => theme.COLORS.orange};

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

.awesome{
    display: flex;
    flex-direction: column;
    position: relative;
}

.awesome > :nth-child(1){
    color: ${({theme}) => theme.COLORS.black};
    font-size: 2.5rem;
    font-weight: bold;

}

.awesome > :nth-child(2){
    color: ${({theme}) => theme.COLORS.orange};
    font-size: 2.5rem;
    font-weight: bold;
}

.awesome > :nth-child(3){
    color: ${({theme}) => theme.COLORS.gray};
    font-size: 14px;
    margin-top: 1rem;
}
`