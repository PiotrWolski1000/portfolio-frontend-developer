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
    <SEO title="Piotr Wolski" description = "Piotr Wolski, JavaScript, react frontend developer from Wroclaw." keywords={[`javascript`, `developer`, `react`, 'Piotr', 'Wolski', 'Wroclaw', 'student']} />
    <MainImage  source={data.allDatoCmsMaincomponent.edges[0].node.mainpicture}></MainImage>
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
          
          alt
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
          alt
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
          alt
          format
        }
        html5{
          url
          alt
          format
        }
        css3{
          url
          alt
          format
        }

        nodejs{
          url
          alt
          format
        }
        react{
          url
          alt
          format
        }
        npm{
          url
          alt
          format
        }
        photoshop{
          url
          alt
          format
        }
        ubuntuos{
          url
          alt
          format
        }

        windowsos{
          url
          alt
          format
        }

        github{
          url
          alt
          format
       }   
       gatsbyjs{
         url
         alt
         format
       }    
       adobexd{
         url
         alt
         format
       }
        netlify{
          alt
          fixed(width: 100){
            srcSet
            src
            aspectRatio
            base64
            ...GatsbyDatoCmsFixed
          }
        }
        styledComponents{
          alt
          fixed(width: 100){
            srcSet
            src
            aspectRatio
            base64
            ...GatsbyDatoCmsFixed
          }
        }   

        datocms{
          alt
          fixed(width: 100){
            srcSet
            src
            aspectRatio
            base64
            ...GatsbyDatoCmsFixed
          }
        }

        contentful{
          alt
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
          alt
          width
          height
        }
        githublink
        livelink
      }
    }
  }
}`




