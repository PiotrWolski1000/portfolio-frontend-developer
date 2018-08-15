import React from 'react'
// import Link from 'gatsby-link'
import styled from 'styled-components';
import HeaderComponent from '../components/HeaderComponent';
import MainComponent from '../components/MainComponent';
import AboutComponent from '../components/AboutComponent';
import MySkillsComponent from '../components/MySkillsComponent';
import FooterComponent from '../components/FooterComponent';
import ContactComponent from '../components/ContactComponent';
import ProjectsComponent from '../components/ProjectsComponent'
const MainWrapper = styled.div`
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // background-color: #265170;
  background-color: #fff6e6;
`


const Index = () => {
  console.log('hello world')
  return (
    <MainWrapper>
      <HeaderComponent/>
      <MainComponent/>
      <AboutComponent/>
      <MySkillsComponent/>
      <ProjectsComponent/>
      <ContactComponent/>
      <FooterComponent/>

    </MainWrapper>
  )
}

export default Index;


// export const query = graphql`
//   query section1{
    
//   }
// `