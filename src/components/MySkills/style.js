import styled from 'styled-components'

export const Wrapper = styled.section`
    width: 100%;
    height: auto;
    position: relative;
    .flip3D{ 
        width:100px; 
        height:150px; 
        margin: 25px auto;	
    }
    .flip3D > .front{
        -webkit-transform:rotateY(0deg);
        position:absolute;
        transform: perspective( 600px ) rotateY( 0deg );
        border-radius: 7px;
        backface-visibility: hidden;
        transition: transform .5s linear 0s;
    }
    .flip3D > .back{
        position:relative;
        left: -20px;
        transform: perspective( 600px ) rotateY( 180deg );
        width:150px; 
        height:150px;
        border-radius: 7px;
        backface-visibility: hidden;
        transition: transform .5s linear 0s;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: grey;
        font-family: 'Roboto';
    }
    .flip3D:hover > .front{
        transform: perspective( 600px ) rotateY( -180deg );
    }
    .flip3D:hover > .back{
        transform: perspective( 600px ) rotateY( 0deg );
    }
`

export const AddintionalWrapper = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(5, 1fr);
    @media(max-width: 720px){
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width: 600px) {
        grid-template-rows: repeat(5, 1fr);
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 400px) {
        grid-template-rows: repeat(10, 1fr);
        grid-template-columns: repeat(1, 1fr);
    }
`