import React, { Component } from 'react';
import * as Tag from './style'
import Img from 'gatsby-image'

class index extends Component {
    constructor(props){
        super(props)

    }
    render() {
        const data = [
            {
                link: this.props.source.javascriptimage,
                description: this.props.text[8].node.text
            },
            {
                link: this.props.source.html5,
                description: this.props.text[7].node.text                
            },
            {
                link: this.props.source.css3,
                description: this.props.text[6].node.text                
            },
            {
                link: this.props.source.nodejs,
                description: this.props.text[5].node.text                                                
            },
            {
                link: this.props.source.react,
                description: this.props.text[4].node.text                                                
            },
            {
                link: this.props.source.npm,
                description: this.props.text[3].node.text                                                
            },
            {
                link: this.props.source.photoshop,
                description: this.props.text[2].node.text
            },
            {
                link: this.props.source.ubuntuos,
                description: this.props.text[1].node.text                                                
            },
            {
                link: this.props.source.windowsos,
                description: this.props.text[0].node.text                                                
            },
            {
                link: this.props.source.github,
                description: this.props.text[9].node.text                                                
            },
            {
                link: this.props.source.gatsbyjs,
                description: this.props.text[10].node.text                                                
            },
            {
                link: this.props.source.adobexd,
                description: this.props.text[11].node.text                                                
            },
            {
                link: this.props.source.netlify,
                description: this.props.text[12].node.text                                                
            },
            {
                link: this.props.source.styledComponents,
                description: this.props.text[13].node.text                                                
            },
            {
                link: this.props.source.contentful,
                description: this.props.text[14].node.text                                                
            },
            {
                link: this.props.source.datocms,
                description: this.props.text[15].node.text                                                
            }
        ]
     
        return (
            <Tag.Wrapper>
                <h1 style={{textAlign: 'center'}}>
                    {this.props.sectionTitle}
                </h1>

               <Tag.AddintionalWrapper>
                    {data.map((item, i) => {
                        return(
                            <div className='flip3D' key={`description_card_flip3d_${i}`}>
                                <div className='front' key={`description_card_div_front_${i}`}>
                                    {item.link.format === 'svg'?(
                                        <img style={{width: '100px', height: '100px'}} src={item.link.url} key={`skill_img_${i}`}/>                                        
                                    ):(
                                        <Img fixed = {item.link.fixed}/> /* alt={item.link.alt} */
                                    )}
                                </div>
                                <div key={`description_card_div_back_${i}`} className='back'>
                                    <p key={`description_card_${i}`}> {item.description} </p>
                                </div>
                            </div>)
                    })}
                </Tag.AddintionalWrapper>
           </Tag.Wrapper>
        )
    }
}

export default index;