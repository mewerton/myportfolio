import styled from "styled-components";

export const Container = styled.div`

height: 10vh;
display: flex;
justify-content: space-between;

.n-left{
    flex: 1;
    align-items: center;
    display: flex;
    gap: 2rem;

}

.n-name{
    font-size: 1.3rem;
    font-weight: bold;

}
.n-right{
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-weight: 400;
}

.n-list{
    flex: 10;

}

.n-list>ul{
    display: flex;
    gap: 2rem;
    margin-right: 4rem;
}

.n-list> ul >li:hover{
    cursor: pointer;
    color: ${({theme}) =>theme.COLORS.orange};
}

.n-button{
    flex: 2;
}



`