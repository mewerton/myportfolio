import styled from "styled-components";

export const Container = styled.div`

height: 10vh;
display: flex;
justify-content: space-between;

max-width: 1480px;

.n-left{
    flex: 1;
    align-items: center;
    display: flex;
    gap: 2rem;

}

.n-name{
    font-size: 1.3rem;
    font-weight: bold;
    margin-right: 1rem;

    color: ${({theme}) =>theme.COLORS.white};

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
    cursor: pointer;
    color: ${({theme}) =>theme.COLORS.white};

    li:hover{
        color: ${({theme}) =>theme.COLORS.orange};
        transition: 0.2s;
    }
}

.n-list> ul >li:hover{
    cursor: pointer;
    color: ${({theme}) =>theme.COLORS.orange};
}

.n-button{
    flex: 2;
}


@media screen and (max-width: 480px){
    
    .n-list{
        display: none;
    }

    .n-button{
        display: none;
    }
    
}



`