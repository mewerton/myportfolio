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

.button:hover{
    background: ${({theme}) => theme.COLORS.white};
    color: ${({theme}) => theme.COLORS.orange};
    border: 1px solid ${({theme}) => theme.COLORS.orange};

}
`