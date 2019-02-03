import React from 'react'
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

export default class Index extends React.Component {
  
  constructor(props) {
    super(props)
  }
  render(){

    return (
      <MainWrapper>
        <HeaderComponent/>
        <MainComponent id = "main" MainComponentData = {this.props.data.allDatoCmsMaincomponent.edges[0].node}/>
        <AboutComponent id="about" AboutComponentData = {this.props.data.allDatoCmsAboutcomponent.edges[0].node}/>
        <MySkillsComponent id = "skills" MySkillsComponent = {this.props.data.allDatoCmsMyskillscomponent.edges[0].node}/>
        <ProjectsComponent id = "projects" ProjectsComponent = {this.props.data. allDatoCmsProjectcontentcomponent.edges}/>
        <ContactComponent id="contact"/>
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

  allDatoCmsProjectcontentcomponent{
    edges{
  		node{
        id
        projecttitle
        projectdescription
        projectimage{
          url
        }
        githublink
        livelink
      }
    }
  }

}`
