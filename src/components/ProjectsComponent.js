import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    // background-color: red;
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

const ProjectsComponent = ({}) => {
    return(
        <Wrapper>
            <AddintionalWrapper>
                ProjectsComponent
            </AddintionalWrapper>
        </Wrapper>   
    )
  }
  export default ProjectsComponent;