import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainImage from '../components/MainImage/'
import AboutMe from '../components/AboutMe'
import MySkills from '../components/MySkills'
import MyProjects from '../components/MyProjects'
import Contact from '../components/Contact'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Piotr Wolski" keywords={[`javascript`, `developer`, `react`, 'Piotr', 'Wolski', 'Wroclaw', 'student']} />
    <MainImage  source={data.allDatoCmsMaincomponent.edges[0].node.mainpicture.fluid}></MainImage>
    <section id = "about">
      <AboutMe sectionTitle = {data.allDatoCmsSectiontitle.edges[0].node.title} source={data.allDatoCmsAboutcomponent}></AboutMe>    
    </section>
    <section id ="skills">
      <MySkills sectionTitle = {data.allDatoCmsSectiontitle.edges[3].node.title} source={data.allDatoCmsMyskillscomponent.edges[0].node} text = {data.allDatoCmsDescriptioncardcomponent.edges}></MySkills>
    </section>

    <section id="projects">
      <MyProjects sectionTitle = {data.allDatoCmsSectiontitle.edges[1].node.title} source={data.allDatoCmsProjectcontentcomponent}></MyProjects>
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
          format
        }
        html5{
          url
          format
        }
        css3{
          url
          format
        }

        nodejs{
          url
          format
        }
        react{
          url
          format
        }
        npm{
          url
          format
        }
        photoshop{
          url
          format
        }
        ubuntuos{
          url
          format
        }

        windowsos{
          url
          format
        }

        github{
          url 
          format
       }   
       gatsbyjs{
         url
         format
       }    
       adobexd{
         url
         format
       }
        netlify{
          fixed(width: 100){
            srcSet
            src
            aspectRatio
            base64
            ...GatsbyDatoCmsFixed
          }
        }
        styledComponents{
          fixed(width: 100){
            srcSet
            src
            aspectRatio
            base64
            ...GatsbyDatoCmsFixed
          }
        }   

        datocms{
          fixed(width: 100){
            srcSet
            src
            aspectRatio
            base64
            ...GatsbyDatoCmsFixed
          }
        }

        contentful{
          fixed(width: 100){
            srcSet
            src
            aspectRatio
            base64
            ...GatsbyDatoCmsFixed
          }
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
  
  allDatoCmsProjectcontentcomponent{
    edges{
      node{
        projecttitle
        projectdescription
        projectimage{
          url
          width
          height
        }
        githublink
        livelink
      }
    }
  }
}`




