import styled from "styled-components";

export const Container = styled.div`

display: flex;
height: 77vh;
margin-top: 6rem;

.i-left{
    display: flex;
    position: relative;
    flex: 1;
    flex-direction: column;
    gap: 2rem;

}
.i-name{
    display: flex;
    flex-direction: column;
}

.i-name>:nth-child(1){
    color: ${({theme}) => theme.COLORS.black};
    font-weight: bold;
    font-size: 3rem;
}

.i-name>:nth-child(2){
    color: ${({theme}) => theme.COLORS.orange};
    font-weight: bold;
    font-size: 3rem;
}

.i-name>:nth-child(3){
    font-weight:100;
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.gray};
    margin-top: 10px;
}

.i-button{
    width: 8rem;
    height: 2rem;
}

.i-icons{
    margin-top: 3rem;
    display: flex;
    gap: 0rem;
}

.i-icons>*{
    transform: scale(0.5);
}

.i-icons>*:hover{
    cursor: pointer;
}



.i-right{
    flex:1;
    position: relative;
}

.i-right>*{
    position: absolute;
    z-index: 1;
}

.i-right>:nth-child(1){
    transform: scale(0.69);
    left: -15%;
    top: -9%;
}

.i-right>:nth-child(2){
    top: -4.6%;
    transform: scale(0.67);
    left: -3rem;
}

.i-right>:nth-child(3){
    transform: scale(1.4);
    left: 28%;
}

.i-right>:nth-child(4){
    transform: scale(0.11);
    top: -95%;
    left: -70%;
    border-radius: 40%;
    padding: 0;

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

`