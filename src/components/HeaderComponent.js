import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
background-color: #042740;
width: 100%;
height: 75px;
border-bottom: #416B89 solid 2px;
position: fixed;
top: 0px;

display: flex;
align-items: center;
justify-content: flex-end;
padding-right: 50px;
`



const HeaderComponent = ({}) => {
    return(
        <Wrapper>
            
            {/* </PiotrWolski> */}
            <nav>
                <a href="#about">About me</a> |
                <a href="#contact">Contact</a> |
                <a href="#skills">My skills</a> |
                <a href="#projects">Projects</a>
            </nav>
        </Wrapper>   
    )
  }
  export default HeaderComponent;