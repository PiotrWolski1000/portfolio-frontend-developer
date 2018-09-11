import React from 'react'
import styled from 'styled-components'
import Carousel from './Carousel';

const Wrapper = styled.div`
    width: 100%;
    /* min-height: 500px; */
    height: auto;
    position: relative;
    margin-bottom: 50px;
    top: 75px;
`


const AddintionalWrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    height: 100%;
    border-top: #416B89 solid 2px;
    clear: both;
`
const SectionTitle = styled.h1`
    padding-top: 50px;
    text-align: center;
`


const ProjectsComponent = ({}) => {
    return(
        <Wrapper>
            <AddintionalWrapper>
                <SectionTitle>
                    My projects
                </SectionTitle>

                <Carousel>

                </Carousel>

            </AddintionalWrapper>
        </Wrapper>   
    )
  }
  export default ProjectsComponent;