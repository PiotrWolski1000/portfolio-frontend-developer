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
z-index: 1;


`
const MainNav = styled.nav`
    /* color: white; */
    a {
        color: white;
        text-decoration: none;
    }
`




const HeaderComponent = ({}) => {
    return(
        <Wrapper>
            
            {/* </PiotrWolski> */}
            <MainNav>
                <a href="#about">About me</a> |
                <a href="#contact">Contact</a> |
                <a href="#skills">My skills</a> |
                <a href="#projects">Projects</a>
            </MainNav>
        </Wrapper>   
    )
  }
  export default HeaderComponent;