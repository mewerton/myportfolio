import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: -0.5rem -3.5rem;
    position: relative;
    margin-top: -7rem;

    a{
        cursor: pointer;
       
    }

    .f-content{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        margin-top: -6rem;
        gap: 1rem;
        color: ${({theme}) => theme.COLORS.white};
    }

    .f-icons{
        display: flex;
        gap: 2rem;

    }

    .dlass{
        width: 100%;
        max-width: 1200px;
    }
    #Intro{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        margin-bottom: 3rem;
    }

    @media screen and (max-width: 480px){
        margin-bottom: 1rem;
        
        .f-content{
            transform: scale(1.2);
            gap: 1rem;
            margin-top: -6rem;

            >span{
                
            }
        }

        .dlass{
            width: 58%;
            height: 10vh;
            
            
        }
       

    }

`