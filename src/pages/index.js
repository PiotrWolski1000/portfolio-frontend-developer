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


// const Index = ({data}) => {
export default class Index extends React.Component {
  
  constructor(props) {
    super(props)
  }
  render(){

    return (
      <MainWrapper>
        <HeaderComponent/>
        <section id="main">
          <MainComponent MainComponentData = {this.props.data.allDatoCmsMaincomponent.edges[0].node}/>
        </section>
        <section id="about">
          <AboutComponent AboutComponentData = {this.props.data.allDatoCmsAboutcomponent.edges[0].node}/>
        </section>
        <section id = "skills"> 
          <MySkillsComponent MySkillsComponent = {this.props.data.allDatoCmsMyskillscomponent.edges[0].node}/>
        </section>
        <section id = "projects">
          <ProjectsComponent/>
        </section>
      
        <section id="contact">
          <ContactComponent />
        </section>
        
        
        <FooterComponent FooterComponent = {this.props.data.allDatoCmsFootercomponent.edges[0].node}/>

      </MainWrapper>
    )
  }
}

// export default Index;


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
