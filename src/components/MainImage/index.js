import React, { Component } from 'react';
import * as Tag from './style'
import Typed from 'typed.js'
import Img from 'gatsby-image'


class index extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount = () => {
    //Thanks to www.mattboldt.com.
    new Typed(".element", {
        strings: ["Hi, my name is Piotr Wolski.", "And I'm a frontend developer. ", "Welcome on my website"],
        // strings: ['My strings are: <i>strings</i> with', 'My strings are: <strong>HTML</strong>', 'My strings are: Chars &times; &copy;'],
        cursorChar: '_',
        showCursor: false,
        typeSpeed: 0,
        backSpeed: 0,
        smartBackspace: true, // this is a default
        loop: true
        });
  }
  render() {
    return (
      <Tag.Wrapper>
        <Img fluid={this.props.source} />
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

