import React from 'react'
import styled from 'styled-components'

import $ from "jquery";

const Wrapper = styled.div`
    background-color: #042740;
    width: 100%;
    height: auto;
    border-bottom: #416B89 solid 2px;
    position: fixed;
    top: 0px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 1;
`

const Menu = styled.div`
    .cross {
        text-align: center;
        width: 100%;
        height: auto;
        background: purple; 
    }
`
const MainNav = styled.nav`
    display: block;

    a {
        display: none;
        color: white;
        text-decoration: none;
        text-align: center;
    }

    #toggle {/* checkbox hidden, is a trigger for showing off the block of <a> elements */
        display: none;
    }

    ${Burger} svg {
        /* at this moment(big resolution) we do not want to show our hamburger icon */
        display: none;
    }

    @media (max-width: 500px) {
        display: flex;
        align-content: center;
        
        #toggle:checked + .menu {
            display: block;
        }
        
        ${Burger} {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            svg {
                display: flex;
                width: 50px;
                height: 100px;
                cursor: pointer;
                -webkit-transform: translate3d(0, 0, 0);
                -moz-transform: translate3d(0, 0, 0);
                -o-transform: translate3d(0, 0, 0);
                -ms-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
            }
            path {
                fill: none;
                -webkit-transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25), stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
                -moz-transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25), stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
                -o-transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25), stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
                -ms-transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25), stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
                transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25), stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
                stroke-width: 40px;
                stroke-linecap: round;
                stroke: #fff6e6;
                stroke-dashoffset: 0px;
            }
            
            path#top,
            path#bottom {
                stroke-dasharray: 240px 950px;
            }
            path#middle {
                stroke-dasharray: 240px 240px;
            }
            .cross path#top,
            .cross path#bottom {
                stroke-dashoffset: -650px;
                stroke-dashoffset: -650px;
            }
            .cross path#middle {
                stroke-dashoffset: -115px;
                stroke-dasharray: 1px 220px;
            }
        }

        .cross a {
            width: 100%;
            /* display: none; */
            display: block;
            /* background: grey; */
            padding-bottom: 5px;
            text-indent: 10px;
        }

        .cross a:hover {
            background: #042740;
            text-decoration: underline;
        }
    }

`

const Burger = styled.div`

`

const HeaderComponent = ({}) => {

    return(
        <Wrapper>
            
            <MainNav>
                <Burger onClick={()=> {
                          return $("div").toggleClass("cross");
                }}>

                    <svg htmlFor="toggle" viewBox="0 0 800 600">
                        <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                        <path d="M300,320 L540,320" id="middle"></path>
                        <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                    </svg>
                    <input type="checkbox" id="toggle"/>
                    
                    <Menu className = "menu">
                        <a href="#about">About</a> 
                        <a href="#contact">Contact</a> 
                        <a href="#skills">Skills</a> 
                        <a href="#projects">Projects</a>
                    </Menu>
                </Burger>
            </MainNav>
        </Wrapper>   
    )
  }
  export default HeaderComponent;