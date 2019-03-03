import styled from 'styled-components'

export const Wrapper = styled.section`
    width: 100%;

    -moz-box-shadow:0 3px 3px rgba(182, 182, 182, 1.0);
    -webkit-box-shadow: 0 3px 3px rgba(182, 182, 182, 1.0);
    box-shadow: 0 3px 3px rgba(182, 182, 182, 1.0);


    .element{
        position: absolute;
        transform: translateY(-50px);
        margin-left: 1rem;
        font-family: 'Orbitron';
    
        text-align: center;
        float: left;
        font-size: 1rem;
        z-index: 1;
        color: white;
        
        @media(min-width: 500px){
            font-size: 1.5rem !important;
            transform: translateY(-50px);        
        }
        @media(min-width: 1024px){
            font-size: 2rem !important;
            transform: translateY(-100px);        
        }
        @media(min-width: 1440px){
            font-size: 3rem !important;
            transform: translateY(-100px);        
        }
    }
`