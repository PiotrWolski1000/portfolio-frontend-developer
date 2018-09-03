import React from 'react'
import styled from 'styled-components'
import TextComponent from './TextComponent/TextComponent.js';


const Wrapper = styled.div`
    width: 100%;
    /* height: 00px; */
    height: auto;
    position: relative;
    top: 75px;

`

const AddintionalWrapper = styled.div`
    /* margin: 0 auto; */

    img {
        margin: 0 auto;
        height: 100px;
        width: 100px;
        padding: 20px;
    }


    display: grid;
    /* grid-gap: 10px; */
    align-items: center;
    justify-content: center;

    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(5, 1fr);



    @media(max-width: 720px){
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width: 600px) {
        /* align-items: center; */
        grid-template-rows: repeat(5, 1fr);
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 400px) {
        grid-template-rows: repeat(10, 1fr);
        grid-template-columns: repeat(1, 1fr);
    }

`
const SectionTitle = styled.h1`
    padding-top: 50px;
    padding-bottom: 25px;
    text-align: center;
    width: 100%;
    width : 95%;
    margin: 0 auto;
    border-top: #416B89 solid 2px;
`

const MySkillsComponent = ({MySkillsComponent}) => {
    console.log(MySkillsComponent)
    return(
        <Wrapper>

            <SectionTitle>My skills</SectionTitle>
            <AddintionalWrapper>
                <img src = {MySkillsComponent.javascript.url}></img>
                <img src = {MySkillsComponent.html5.url}></img>
                <img src = {MySkillsComponent.css3.url}></img>
                <img src = {MySkillsComponent.nodejs.url}></img>
                <img src = {MySkillsComponent.react.url}></img>
                <img src = {MySkillsComponent.npm.url}></img>
                <img src = {MySkillsComponent.photoshop.url}></img>
                <img src = {MySkillsComponent.ubuntuos.url}></img>
                <img src = {MySkillsComponent.windowsos.url}></img>
                <img src = {MySkillsComponent.github.url}></img>




                {/* <TextComponent>
                </TextComponent> */}
            
            </AddintionalWrapper>
        </Wrapper>   
    )
  }
  export default MySkillsComponent;