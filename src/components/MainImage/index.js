import React, { Component } from 'react';
import * as Tag from './style'

import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'


  const index = (source) => {
    return (
      <Tag.Wrapper>
        <Img fluid={source.source} />
        <p>
          {/* {source.source.maincomponenttext.text} */}
        </p>
      </Tag.Wrapper>
    )
}  


export default index;


