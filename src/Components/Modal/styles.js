import styled from "styled-components";

export const Container = styled.div`

    .backdrop .modal {
        width: 1.25rem;
        height: 1.25rem;
       
        border: none;
        color: ${({theme}) => theme.COLORS.black};

        position: absolute;
        
        >button{
            border: none;
            background: transparent;
            
        }
    }
`