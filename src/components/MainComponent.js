import React from 'react'
import styled from 'styled-components'
import Typed from 'typed.js'


const Wrapper = styled.div`
    width: 100%;
    min-height: 500px;
    min-height: 400px;
    position: relative;
    top: 75px;

    .text {
        display: flex;
        justify-content: flex-start;
        width: 50%;
        height: 100%;
        margin-left: 20px;
        position: relative;
        top: 200px;
        color: white;
        font-size: 1.5rem;
        line-height: 1.5rem;

        font-family: Helvetica, sans-serif;
        word-spacing: 100%;
        font-weight: bold;
        @media (min-width: 720px) {
            font-size: 2rem;
            line-height: 2rem;            

        }
        @media (min-width: 1080px) {
            font-size: 3rem;
            line-height: 3rem;
        }
        
    }

    .typed-cursor {
        display: none;
    }
`

const AddintionalWrapper = styled.div`
    margin: 0 auto;
`

class MainComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        // www.mattboldt.com
        const typedEl = new Typed(".text", {
            strings: ["Hi, my name is Piotr Wolski.", "And I'm a frontend developer. ", "Welcome on my website :)"],
            typeSpeed: 100,
            backSpeed: 30,
            loop: true,
        })
    }

    render()
    {
        return(
            <Wrapper style={
                {
                    backgroundImage: 'url(' + this.props.MainComponentData.mainpicture.url + ')', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat'
            }}>
                <AddintionalWrapper>
                
                    <div className = "text"></div>

                </AddintionalWrapper>
            </Wrapper>   
        )
    }
  }
  export default MainComponent;

  true