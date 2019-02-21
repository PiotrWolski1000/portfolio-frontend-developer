import { Link } from "gatsby"
import * as Tag from './style'
import React, { Component } from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
const navigation = [
  {
    name: 'About',
    path: '/'
  },
  {
    name: 'Skills',
    path: '#uber-uns'
  },
  {
    name: 'Projects',
    path: '#leistungen'
  },
  {
    name: 'Contact',
    path: '#kontakt'
  }
]
class index extends Component {

  state = {
    collapsed: false,
    path: '/'
  }

  handleCollapseMenu = () => this.setState(prevState => ({collapsed: !prevState.collapsed}))


  render() {
    return (
      <StaticQuery
    query={headerQuery}
    render={data => {
      const { collapsed } = this.state
      return (
        <Tag.MainWrapper>
          <Tag.Wrapper>
              <Link to='/'>
                <Tag.Logo>
                  <text 
                    x="25"
                    y="120" 
                    fill="black" 
                    fontFamily='Orbitron'
                    >
                    PiotrWolski
                  </text>
                </Tag.Logo>
              </Link>          

              <Tag.HamburgerMenu
                className={collapsed ? 'isOpen' : ''}
                onClick={this.handleCollapseMenu}
              >
                <div />
                <div />
                <div />
              </Tag.HamburgerMenu>
                  

              <Tag.HorizontalMenu>
                {
                  navigation.map((item, i) => {
                    return (
                      <li key={`horizontal_li${i}`}>
                        <Link activeStyle={{}} key = {`menu_desktop_link${i}`} to={item.path}> 
                          {item.name}    
                        </Link>
                      </li>)
                    })
                }
                
              </Tag.HorizontalMenu>
            </Tag.Wrapper>

              <Tag.Menu  isVisible={collapsed}>
                    {
                      navigation.map((item, i) => {  
                        return (
                          <Link  activeStyle = {{}} key = {`menu_link${i}`} to={item.path}> 
                            
                            {item.name}
                          
                          </Link>)
                      }
                  )
                    }
              </Tag.Menu>
          </Tag.MainWrapper>
        
        )
      }}
      />
    );
  }
}

export default index;


const headerQuery = graphql`
  query headerQuery {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp{
        fixed(width: 500, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    } 
}
`


