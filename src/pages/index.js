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
  {console.log('my data: ', data)}
    <div style={{backgroundColor: 'black'}}>
    {/* <Img fixed={data.logo.childImageSharp.fixed}/> */}

    </div>

    <SEO title="Piotr Wolski" keywords={[`javascript`, `developer`, `react`, 'Piotr', 'Wolski', 'Wrocław', 'Wroclaw']} />
    <MainImage></MainImage>
    <AboutMe></AboutMe>    
    <MySkills></MySkills>
    <MyProjects></MyProjects>
    <Contact></Contact>
{/* my logo here for a moment */}
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

  </Layout>
)

export default IndexPage


export const query = graphql`
{

  site{
    
    siteMetadata{
      title
      author
      description
    }
    children{
      id
    }
  }
  }`



// allDatoCmsMaincomponent {
//   edges{
//     node{
//       mainpicture{
//         url
//       }
//       maincomponenttext
//     }
//   }
// }
// allDatoCmsAboutcomponent {
//   edges{
//     node{
//       myphoto{
//         url
//         width
//         height
//       }
//       description
//     }
//   }
// }
// allDatoCmsMyskillscomponent{
//   edges{
//     node{
//       javascriptimage {
//         url
//       }
//       html5 {
//         url
//       }
//       css3 {
//         url
//       }
//       nodejs {
//         url
//       }
//       react {
//         url
//       }
//       npm {
//         url
//       }
//       photoshop {
//         url
//       }
//       ubuntuos {
//         url
//       }
//       windowsos {
//         url
//       }
//       github {
//         url
//       }
    
//     }
//   }
// }
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
