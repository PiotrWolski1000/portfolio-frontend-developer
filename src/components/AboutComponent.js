import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
// bg-color: red;
width: 100%;
height: 400px;
`
const AddintionalWrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    height: 100%;
    border-top: #416B89 solid 2px;
    clear: both;
`

const AboutComponent = ({heroCardData}) => {
    return(
        <Wrapper>
            <AddintionalWrapper>
                AboutComponent
            </AddintionalWrapper>
        </Wrapper>   
    )
  }
  export default AboutComponent;