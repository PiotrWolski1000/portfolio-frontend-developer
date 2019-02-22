import React, { Component } from 'react';
import * as Tag from './style'
import Img from 'gatsby-image'

class index extends Component {
    constructor(props){
        super(props)

    }
    render() {

        // console.log('props image skill: ', this.props.source.html5)
        // console.log('props description card: ', this.props.text[0].node.text)
        // console.log('props description card: ', this.props.text[1].node.text)
        // console.log('props description card: ', this.props.text[2].node.text)
        // console.log('props description card: ', )
        // console.log('props description card: ', )
        // console.log('props description card: ', )
        // console.log('props description card: ', )
        // console.log('props description card: ', 
        // console.log('props description card: ', )
        const data = [
            {
                link: this.props.source.javascriptimage.url,
                description: this.props.text[8].node.text
            },
            {
                link: this.props.source.html5.url,
                description: this.props.text[7].node.text                
            },
            {
                link: this.props.source.css3.url,
                description: this.props.text[6].node.text                
            },
            {
                link: this.props.source.nodejs.url,
                description: this.props.text[5].node.text                                                
            },
            {
                link: this.props.source.react.url,
                description: this.props.text[4].node.text                                                
            },
            {
                link: this.props.source.npm.url,
                description: this.props.text[3].node.text                                                
            },
            {
                link: this.props.source.photoshop.url,
                description: this.props.text[2].node.text
            },
            {
                link: this.props.source.ubuntuos.url,
                description: this.props.text[1].node.text                                                
            },
            {
                link: this.props.source.windowsos.url,
                description: this.props.text[0].node.text                                                
            },
            {
                link: this.props.source.github.url,
                description: this.props.text[9].node.text                                                
            }
        ]
        // data.map((item, i) => {item.description = this.props.text[i]})
            // console.log('data: ',data)        
        return (
            <Tag.Wrapper>
                <Tag.AddintionalWrapper>
                    {data.map((item, i) => {
                        return(
                            <div className='flip3D' key={`description_card_flip3d_${i}`}>
                                <div className='front' key={`description_card_div_front_${i}`}>
                                    <img style={{width: '100px', height: '100px'}} src={item.link} key={`skill_img_${i}`}/>
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