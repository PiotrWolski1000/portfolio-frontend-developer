import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../components/Header"
import "./layout.css"

import Footer from '../components/Footer'


const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
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

      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        
          <main>
            {children}
          </main>

          <Footer data={data.allDatoCmsFootercomponent.edges[0].node}></Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
