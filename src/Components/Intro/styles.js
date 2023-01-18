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
    color: ${({theme}) => theme.COLORS.black};
}



.i-right{
    flex:1;
}

`