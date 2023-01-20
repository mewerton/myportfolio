import styled from "styled-components";

export const Container = styled.div`

    padding: 0 3rem 0 3rem;
    display: flex;
    height: 80vh;
    margin-top: 6rem;

.awesome span:nth-of-type(1){
    color: ${({theme}) => theme.COLORS.white};
}

.c-right{
    display: flex;
    justify-content: center;
    position: relative;
    flex: 1;
}

.c-right>form{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
}

.c-right .user{
    width: 20rem;
    height: 2rem;
    padding: 0.3rem;
    outline: none;
    border: 2px solid ${({theme}) => theme.COLORS.orange};
    border-radius: 8px;
    font-size: 16px;
}

textarea{
    height: 4rem!important;
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

.c-blur1{
    left: -17rem;
    top: 13rem;
}

.c-blur2{
    top: 1rem;
    left: 8rem;
}

.awesome >img{
    scale: calc(1);
    margin-left:-4rem;
    margin-top: 6rem;
    flex:1;
    position: absolute;
    

}

@media screen and (max-width: 480px){
        padding: 0;
        flex-direction: column;
        gap: 5rem;
        height: 40rem;

        .c-right .user{
        width: 16rem;
        }
        .awesome >img{
            display: none;
        }
}


`