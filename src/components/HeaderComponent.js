import React, {Component} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: #042740;
    
    width: 100%;

    min-height: 75px;
    height: ${props => props.menuToggle?'220px':'75px'};
    transition: height 0.5s ease;


    border-bottom: #416B89 solid 2px;

    position: fixed;
    top: 0px;


    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    z-index: 1;
    .toggleOn {
        div{
            ${this}:nth-child(1) {
                transform: rotate(45deg) translateX(12px) translateY(9px);
            }
            ${this}:nth-child(2) {
                opacity: 0;
                transition: 0.2s opacity ease;
            }
            ${this}:nth-child(3) {
                transform: rotate(-45deg)  translateX(10px) translateY(-8px);
            }
            transition: all 0.5s ease;
        }
    }

    .toggleOff {
        div{
            ${this}:nth-child(1) {
                transform: rotate(0) translate(0px, 0px);
            }
            ${this}:nth-child(2) {
                opacity: 1;
                transition: 1s opacity ease;
            }
            ${this}:nth-child(3) {
                transform: rotate(0deg) translate(0px, 0px);
            }
            transition: all 0.5s ease;
        }
    }


`
const Burger = styled.div`
    display: flex;
    flex-direction: column;

    position: fixed;
    top: 1rem;
    right: 1rem;

    justify-content: center;
    align-items: center;

    ${this}:hover{
        cursor: pointer;
    }

    div {
        width: 40px;
        height: 4px;

        margin: 5px 0;
        border-radius: 5px;

        background-color: white;
    }

    


    @media(min-width: 600px){
        display: none;
    }
`

const HoverMenu = styled.ul`
    @media(max-width: 599px){

        display: block;
        height: 120px;


        margin-left: 0;
        padding-left: 0;
        list-style: none;

        height: ${props => props.menuToggle?'140px':'0px'};
        transition: height 0.2s ease;

        opacity: ${props => props.menuToggle?'1':'0'};
        transition: opacity 0.5s ease;
        
        transform: translateY(30px);
        transition: transform 1s ease;
        
        width: 100%;

        li {
            display: block;
            margin-top: 10px;
            text-align: center;
            width: 100%;
        }
        a {
            display: block; 
            width: 100%;
            color: white;
            text-decoration: none;
            
            ${this}:hover{
                background-color: #063E66;
            }
        }
    }


    @media(min-width: 600px){
        /* background-color: yellow; */
        display: flex;
        height: 75px;
        position: relative;
        top: 12px;
        list-style: none;
        li {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 0 0 5px;
            /* background-color: blue; */
        }
        a{
            padding: 25px 20px 25px 20px;
            /* background-color: red; */
            color: white;
            text-decoration: none;
        }
        a:hover{
            background-color: #416B89; 
        }
    }
`

class HeaderComponent extends Component {
    constructor(props){
        super(props)
     
        this.state = {
            menuToggle: false,
        }
    }

    burgerToggle = () => {
        
        console.log('hello from burger!', this.state.menuToggle)
        
        this.setState(
            prevState => ({menuToggle: !prevState.menuToggle})
        )
    
    }

    render() {
        return (
            <Wrapper menuToggle={this.state.menuToggle}>
                <Burger onClick={this.burgerToggle} className={this.state.menuToggle?'toggleOn':'toggleOff'}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Burger>
                <HoverMenu menuToggle={this.state.menuToggle}>
                    <li><a href="#">About me</a></li>
                    <li><a href="#">Stack</a></li>
                    <li><a href="#">My projects</a></li>
                    <li><a href="#">Contact</a></li>
                </HoverMenu>
            </Wrapper> 
        )
    }
}

export default HeaderComponent;