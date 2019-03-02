//name: mainImage compnent styles 
import styled from 'styled-components'

export const Wrapper = styled.section`
    width: 100%;
    background-color: darkorange;

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
    }
`