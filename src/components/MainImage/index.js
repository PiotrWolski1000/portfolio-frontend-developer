import React, { Component } from 'react';
import * as Tag from './style'
import Typed from 'typed.js'
import Img from 'gatsby-image'


class index extends Component {
  componentDidMount = () => {
    //Thanks to www.mattboldt.com.
    new Typed(".element", {
        strings: ["Hi, my name is Piotr Wolski.", "And I'm a frontend developer. ", "Welcome on my website"],
        cursorChar: '_',
        showCursor: false,
        typeSpeed: 0,
        backSpeed: 0,
        smartBackspace: true, 
        loop: true,
        });
  }
  render() {
    return (
      <Tag.Wrapper>
        <Img width="200px" height="200px" fluid={this.props.source} />
        <h1 className="element"></h1>
      </Tag.Wrapper>
    );
  }
}
export default index;


// const index = (source) => {

//     return (
//     <Tag.Wrapper>
//       <Img fluid={source.source} />
//       <div className="element" style={{zIndex: 11111111}}>
        
//       </div>
//     </Tag.Wrapper>
//   )
// }  

