import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MainImage from '../components/MainImage/'
import AboutMe from '../components/AboutMe'
import MySkills from '../components/MySkills'
import MyProjects from '../components/MyProjects'
import Contact from '../components/Contact'
// import {graphql} from 'gatsby'
import Img from 'gatsby-image'

const IndexPage = ({data}) => (
  <Layout>
    {/* {console.log('titles: ', data.allDatoCmsSectiontitle)} */}
    <SEO title="Piotr Wolski" keywords={[`javascript`, `developer`, `react`, 'Piotr', 'Wolski', 'Wroclaw']} />
    <MainImage  source={data.allDatoCmsMaincomponent.edges[0].node.mainpicture.fluid}></MainImage>
    <section id = "about">
      <AboutMe sectionTitle = {data.allDatoCmsSectiontitle.edges[0].node.title} source={data.allDatoCmsAboutcomponent}></AboutMe>    
    </section>
    <section id ="skills">
      <MySkills sectionTitle = {data.allDatoCmsSectiontitle.edges[3].node.title} source={data.allDatoCmsMyskillscomponent.edges[0].node} text = {data.allDatoCmsDescriptioncardcomponent.edges}></MySkills>
    </section>

    <section id="projects">
      <MyProjects id = 'projects' sectionTitle = {data.allDatoCmsSectiontitle.edges[1].node.title} source={data.allDatoCmsProjectcontentcomponent}></MyProjects>
    </section>
    <section>
      <Contact sectionTitle = {data.allDatoCmsSectiontitle.edges[2].node.title}></Contact>
    </section>

  </Layout>
)

export default IndexPage


export const query = graphql`{
  allDatoCmsMaincomponent{
    edges{
      node{
        locale
        mainpicture{
          
          fluid(maxWidth: 1920){
            srcSet
            aspectRatio
            sizes
            base64
            ...GatsbyDatoCmsFluid
          }
        }
        
        maincomponenttext
      }
    }
  }

  allDatoCmsAboutcomponent{
    edges{
      node{
      	locale
      	myphoto{
          fixed(width: 250){
            srcSet
            src
            aspectRatio
            base64
            ...GatsbyDatoCmsFixed
          }
        }
        description
      }   
    }
  }

  allDatoCmsMyskillscomponent{
    edges{
      node{
      	javascriptimage{
          url
        }
        html5{
          url
        }
        css3{
          url
        }

        nodejs{
          url
        }
        react{
          url
        }
        npm{
          url
        }
        photoshop{
          url
        }
        ubuntuos{
          url
        }

        windowsos{
          url
        }

        github{
          url 
       }        
      }   
    }
  }
  allDatoCmsDescriptioncardcomponent{
    edges{
      node{
        locale
        text
      }
    }
  }
  
  allDatoCmsSectiontitle{
    edges{
      node{
        title
      }
    }
  }	
  
}`




