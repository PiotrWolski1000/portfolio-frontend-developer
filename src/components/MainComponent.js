import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
background: url(/../img/bg_laptop_coffee.jpg) no-repeat center center fixed; 
width: 100%;
height: 800px;
position: relative;
top: 75px;
`

const AddintionalWrapper = styled.div`
    // width: 95%;
    margin: 0 auto;
    height: 100%;
    // border-top: #416B89 solid 2px;
    // clear: both;
    

`

const MainComponent = ({}) => {
    return(
        <Wrapper>
            <AddintionalWrapper>
                MainComponent
            </AddintionalWrapper>
        </Wrapper>   
    )
  }
  export default MainComponent;