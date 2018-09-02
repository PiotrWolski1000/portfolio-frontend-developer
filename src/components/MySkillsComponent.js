import React from 'react'
import styled from 'styled-components'
import TextComponent from './TextComponent/TextComponent.js';


const Wrapper = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
    top: 75px;
`

const AddintionalWrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    height: 100%;
    border-top: #416B89 solid 2px;
    clear: both;
`


const MySkillsComponent = ({}) => {
    return(
        <Wrapper>
            <AddintionalWrapper>
                {/* MySkillsComponent */}
                <TextComponent>


                </TextComponent>
            
            </AddintionalWrapper>
        </Wrapper>   
    )
  }
  export default MySkillsComponent;