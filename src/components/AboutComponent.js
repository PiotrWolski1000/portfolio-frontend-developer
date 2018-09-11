import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    top: 75px;
`
const AddintionalWrapper = styled.div`
    flex-direction: row;

    width: 80%;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
        width: 100%;
        padding: 0px;
        flex-direction: column;

        justify-content: center;
        align-items: center;
    }
`
const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 100px;
`
const Description = styled.div`
    margin-left: 50px;
    font-style: italic; 
    width: 80%;
    display: flex;
    align-items: center;
    color: grey;  
    text-indent: 50px;
    
    @media (max-width: 600px){
        margin: 50px 0px;
    }
`

const SectionTitle = styled.h1`
    padding-top: 50px;
    text-align: center;
`

const AboutComponent = ({AboutComponentData}) => {
    return(
        <Wrapper>
            
            <SectionTitle>About me</SectionTitle>
            
            <AddintionalWrapper>
                <Avatar src={AboutComponentData.myphoto.url}/>
                <Description>{AboutComponentData.description}</Description>
            </AddintionalWrapper>
        </Wrapper>   
    )
  }
  export default AboutComponent;