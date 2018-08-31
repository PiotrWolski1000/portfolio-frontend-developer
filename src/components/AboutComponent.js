import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    width: 100%;
    /* height: 400px; */
    height: auto;
`
const AddintionalWrapper = styled.div`
    border-top: #416B89 solid 2px;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`
const Avatar = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    margin-top: 100px;
`
const Description = styled.div`
    margin: 50px 0px;
    font-style: italic; 
    width: 80%;
    color: grey;  
    text-indent: 50px;
`

const SectionTitle = styled.div`
    /* text-align: center; */
`

const AboutComponent = ({AboutComponentData}) => {
    return(
        <Wrapper>
            <AddintionalWrapper>
                text
                asd
                asda
                <SectionTitle>About me</SectionTitle>
                <Avatar style={
                    {//inline style, otherwise, how would I import data from a cms inside styled component?
                        backgroundImage: 'url(' + AboutComponentData.myphoto.url + ')', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat'
                    }
                }
                />
                <Description>{AboutComponentData.description}</Description>
            </AddintionalWrapper>
        </Wrapper>   
    )
  }
  export default AboutComponent;