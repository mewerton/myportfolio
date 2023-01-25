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

        
    }

    .information{
        width: 80vh;
        top: 0;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
        margin-top: -10rem;
        margin-left: -13rem;
        background: ${({theme}) => theme.COLORS.background_yellow};
        box-shadow: 0px 20px 24px 3px ${({theme}) => theme.COLORS.background_orange};

        border-radius: 1rem;
        padding: 1rem;
        
        >h1{
            margin-bottom: 1rem;
        }

        >p{
            margin-bottom: 1rem;
            font-size: 14px;
        }

        >button{
            border: none;
            background: transparent;
            cursor: pointer;
            color: ${({theme}) => theme.COLORS.black};
        }


        
    }

    .read-more{

        
        >button{
            border: none;
            background: transparent;
            cursor: pointer;

        }
    }




    @media screen and (max-width: 480px){
        width: 100%;

        .information{

        width: 48vh;
        top: -3rem;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
        margin-top: -13rem;
        margin-left: -6.8rem;
        background: ${({theme}) => theme.COLORS.background_yellow};
        box-shadow: 0px 20px 24px 3px ${({theme}) => theme.COLORS.background_orange};

        border-radius: 1rem;
        padding: 1rem;

        >p{
            margin-bottom: 1rem;
            font-size: 16px;
        }
            
        }

    }

`