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
  

  background-color: #fff6e6;
`


const Index = ({data}) => {
// console.log(data.allDatoCmsMaincomponent)
  // console.log(data.allDatoCmsMaincomponent.edges[0].node)
  // console.log(data.allDatoCmsMyskillscomponent)
  // console.log(data.allDatoCmsFootercomponent.edges[0].node)
  return (
    <MainWrapper>
      <HeaderComponent/>
      <MainComponent MainComponentData = {data.allDatoCmsMaincomponent.edges[0].node}/>
      <AboutComponent AboutComponentData = {data.allDatoCmsAboutcomponent.edges[0].node}/>
      <MySkillsComponent MySkillsComponent = {data.allDatoCmsMyskillscomponent.edges[0].node}/>
      <ProjectsComponent/>
      <ContactComponent/>
      <FooterComponent FooterComponent = {data.allDatoCmsFootercomponent.edges[0].node}/>

    </MainWrapper>
  )
}

export default Index;


export const query = graphql`
query onepage {
  allDatoCmsMaincomponent {
    edges{
      node{
        mainpicture{
          url
          width
          height
        }
        maincomponenttext
      }
    }
  }

  allDatoCmsAboutcomponent {
  	edges{
      node{
      	myphoto{
          url
          width
          height
        }
        description
      }
    }
  }

  allDatoCmsMyskillscomponent{
    edges{
      node{
        javascriptimage {
          url
        }
        html5 {
          url
        }
        css3 {
          url
        }
        nodejs {
          url
        }
        react {
          url
        }
        npm {
          url
        }
        photoshop {
          url
        }
        ubuntuos {
          url
        }
        windowsos {
          url
        }
        github {
          url
        }
      
      }
    }
  }
  allDatoCmsFootercomponent{
    edges{
      node{
        phoneimage{
          url
        }
        facebookimage{
          url
        }
        linkedinimage{
          url
        }
        instagramimage{
          url
        }
        githubimage{
          url
        }
        atimage{
          url
        }
        twitterimage{
          url
        }
        twitterlink
        email
        githublink
        instagramtext
        facebooktext
        phonenumber
        linkedintext
      }
    }
  }

}`
