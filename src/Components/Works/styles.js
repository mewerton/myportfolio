import styled from "styled-components";

export const Container = styled.div`

    padding: 0 3 rem;
    display: flex;
    height: 90vh;
    margin-top: 4rem;

/* right site */

.w-right{
    position: relative;
}

.w-mainCircle{
    left: 9rem;
    position: relative;
    width: 18rem;
    height: 18rem;
    border-radius: 100%;
    box-shadow: ${({theme}) => theme.COLORS.smboxShadow};
    top: 2rem;
    background: ${({theme}) => theme.COLORS.white};
}

.w-mainCircle>*{
    position: absolute;
}

.w-mainCircle > :nth-child(1){
    top:-3rem;
    left: 6rem;
}

.w-mainCircle > :nth-child(2){
    top: 5rem;
    left: -3rem;
}

.w-mainCircle > :nth-child(3){
    top: 5rem;
    left: 6rem;
}

.w-mainCircle > :nth-child(4){
    top: 5rem;
    left: 15rem;
}

.w-mainCircle > :nth-child(5){
    top: 13rem;
    left: 6rem;
}

.w-secCircle{
    width: 6rem;
    height: 6rem;
    position: absolute;
    border-radius: 100%;
    border: 5px solid ${({theme}) => theme.COLORS.background_050};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${({theme}) => theme.COLORS.smboxShadow};
    background: ${({theme}) => theme.COLORS.white};
}

.w-secCircle > img {
    transform: scale(0.6);
}

.w-backCircle{
    position: absolute;
    height: 13rem;
    width: 13rem;
    border-radius: 100%;
    z-index: -1;
}

.blueCircle{
    background: ${({theme}) => theme.COLORS.blueCircle};
    left: 18rem;
    top: 0rem;
}

.yellowCircle{
    background: ${({theme}) => theme.COLORS.yellowCircle};
    left: 18rem;
    top: 8rem;
}

@media screen and (max-width: 480px){
    flex-direction: column;
    height: 55rem;
    padding: 0;
    gap: 5rem;

    .w-right{
        display: flex;
        align-items: flex-start;
        justify-content: start;
        transform: scale(0.7);
    }

    .w-mainCircle{
        position: static;
    }

    .w-backCircle{
        left: 8rem !important;
    }

}



`