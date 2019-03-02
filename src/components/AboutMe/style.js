import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 500px;
    display: flex;

    justify-content: center;
    align-items: center;
    @media(max-width: 768px){
        flex-direction: column;
    }
`

export const TopLeft = styled.div`
    @media(max-width: 768px){
        margin: 50px 0;
    }

    width: 100%;
    height: 50%;
    display: flex;
    
    justify-content: center;
    align-items: center;
`

export const BottomRight = styled.div`
    width: 100%;
    height: 50%;
    p{
        font-family: 'Roboto';
        text-indent: 1rem;
        padding: 1rem;
    }
`
