//name: header compnent styles
import styled from 'styled-components'
import Link from 'gatsby-link'
export const Wrapper = styled.div`
    background: white;
    width: 100%;
    height: 150px;
    font-family: 'Orbitron';
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99999;
`

export const Logo = styled.svg`
     height: 200px; 
     min-width: 300px; 
     pointer-events: none;
     font-size: 2rem;
`

export const HamburgerMenu = styled.div`
    position: absolute;
    top: 67px;
    right: 2rem;

  & > div {
    width: 30px;
    height: 5px;
    border-radius: 5px;
    transition: 0.4s;
    background-color: black;
    &:first-child,
    &:last-child {
      margin: 4px 0;
    }
  }
  &.isOpen {
    div:nth-child(2) {
      margin-top: -9px;
      transform: rotate(135deg);
    }
    div:first-child {
      transform: rotate(45deg);
    }
    div:last-child {
      display: none;
    }
  }
  @media (min-width: 769px) {
    display: none;
  }
`

export const HorizontalMenu = styled.ul`
    position: relative;
    top: 25px;
    list-style: none;
    li {
        &:hover{
            background-color: black;
            a {
                color: white;
            }
        }
    }
    a{
        text-decoration: none;
        &:link{
            color: black;
        }
        &:visited{
            color: black;
        }
        position: relative;
        top: 2px;
        padding: 24px 10px 20px 10px;
    }
    @media(max-width: 768px){
        display:none;
    }
    @media(min-width: 769px){
        display: flex;
        justify-content: center;
        margin-right: 50px;
        color: #707070;
        
    }
`
export const Menu = styled.div`
  width: 100%;
  display: flex;
  opacity: ${props => props.isVisible ? '1'  : '0'};
  flex-direction: column;
  visibility: ${props => props.isVisible ? 'visible'  : 'hidden'};
  height: ${props => props.isVisible ? '180px'  : '0px'};
  transition: height 0.5s ease, visibility 0s;
  ul {
    list-style: none;
  }

  ${Link} {
    font-family: 'Orbitron';
    a{
      text-decoration: none;
      padding: 10px 0 10px 25px;
      &:link {
        color: black;
      }
      &:visited {
        color: black;
      }
      &:hover{
        background: black;
        color: white;
      }
       
    }
  }
`

export const MainWrapper = styled.header`
  height: auto;
`