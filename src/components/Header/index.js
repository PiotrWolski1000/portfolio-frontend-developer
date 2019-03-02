import { Link } from "gatsby"
import * as Tag from './style'
import React, { Component } from 'react';
import { StaticQuery, graphql } from "gatsby"
const navigation = [
  {
    name: 'About',
    path: '#about'
  },
  {
    name: 'Skills',
    path: '#skills'
  },
  {
    name: 'Projects',
    path: '#projects'
  },
  {
    name: 'Contact',
    path: '#contact'
  }]

class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      hide: false,
      collapsed: false,
      path: '/'
    }    
  }
  handleCollapseMenuForLink = () => this.setState({collapsed: false})
  handleCollapseMenu = () => this.setState(prevState => ({collapsed: !prevState.collapsed}))

  componentDidMount = () => {
    this.setState({collapsed: false})
  }

  render() {
    return (
      <StaticQuery
      query={headerQuery}
      render={data => {
      const { collapsed } = this.state
      return (
        <Tag.MainWrapper className={this.state.hide?"showMenu":"hideMenu"}>
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
                {navigation.map((item, i) => {
                  return(
                    <li key={`horizontal_li${i}`}>
                      <a key = {`menu_desktop_link${i}`} onClick={this.handleCollapseMenuForLink} href={item.path}> 
                        {item.name}    
                      </a>
                    </li>)
                })}
                
              </Tag.HorizontalMenu>
            </Tag.Wrapper>

              <Tag.Menu  style={{visibility: 'hidden'}}isVisible={collapsed}>
                {navigation.map((item, i) => {  
                    return (
                      <a key = {`menu_link${i}`} onClick={this.handleCollapseMenuForLink} href={item.path}> 
                        
                        {item.name}
                      
                      </a>)
                  }
                )}
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


