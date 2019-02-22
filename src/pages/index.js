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
    {console.log(' allDatoCmsProjectcontentcomponent: ', data.allDatoCmsProjectcontentcomponent)}
  {/* {console.log('allDatoCmsMainComponent ', data)} */}
    {/* {console.log('allDatoCmsAboutComponent: ', data.allDatoCmsAboutcomponent)} */}
    {/* {console.log('allDatoCmsMySkillsComponent: ', data.allDatoCmsMyskillscomponent)} */}
    {/* {console.log('description cards', data.allDatoCmsDescriptioncardcomponent)} */}
    {/* seo as well from datocms  */}
    <SEO title="Piotr Wolski" keywords={[`javascript`, `developer`, `react`, 'Piotr', 'Wolski', 'Wrocław', 'Wroclaw']} />
    <MainImage source={data.allDatoCmsMaincomponent.edges[0].node.mainpicture.fluid}></MainImage>
    <AboutMe source={data.allDatoCmsAboutcomponent}></AboutMe>    
    <MySkills source={data.allDatoCmsMyskillscomponent.edges[0].node} text = {data.allDatoCmsDescriptioncardcomponent.edges}></MySkills>
    <MyProjects source={data.allDatoCmsProjectcontentcomponent}></MyProjects>
    <Contact></Contact>
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
  allDatoCmsProjectcontentcomponent{
    edges{
      node{
        # locale
         projecttitle
        projectdescription
        projectimage{
          fluid(maxWidth: 1000){
            srcSet
            aspectRatio
            sizes
            base64
            ...GatsbyDatoCmsFluid
          }
          
        }
        githublink
        livelink
      }
    }
  }

}`


// allDatoCmsFootercomponent{
//   edges{
//     node{
//       phoneimage{
//         url
//       }
//       facebookimage{
//         url
//       }
//       linkedinimage{
//         url
//       }
//       instagramimage{
//         url
//       }
//       githubimage{
//         url
//       }
//       atimage{
//         url
//       }
//       twitterimage{
//         url
//       }
//       twitterlink
//       email
//       githublink
//       instagramtext
//       facebooktext
//       phonenumber
//       linkedintext
//     }
//   }
// }
// allDatoCmsProjectcontentcomponent{
//   edges{
//     node{
//       id
//       projecttitle
//       projectdescription
//       projectimage{
//         url
//       }
//       githublink
//       livelink
//     }
//   }
// }
