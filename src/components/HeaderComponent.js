import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  background-color: red;
  width: 100%;
  height: 400px;
`

const HeaderComponent = ({}) => {
    return(
        <Wrapper>
            Hello World
        </Wrapper>   
    )
  }
  export default HeaderComponent;