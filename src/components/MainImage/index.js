import React, { Component } from 'react';
import * as Tag from './style'

import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const index = () => {
    return (
        <StaticQuery
        query={mainImageQuery}
        render={data => {
            return (
            <Tag.Wrapper>
              <Img fluid={data.logo.childImageSharp.fluid}/>
            </Tag.Wrapper>
          )
        }}
        />
    )
  }
  


export default index;


const mainImageQuery = graphql`
  query mainImageQuery {
    logo: file(relativePath: { eq: "bg_laptop_coffee.jpg" }) {
      childImageSharp{
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    } 
}
`

