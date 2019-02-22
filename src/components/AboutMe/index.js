import React, { Component } from 'react';
import * as Tag from './style'
import Img from 'gatsby-image'


class index extends Component {
    render() {
        
        // let language = this.props.source.edges.map((item)=>{(item.node.locale === "en")?(item):(null)})
        // console.log('language: ', language)
        // console.log(this.props.source)
        return (
            <Tag.Wrapper>

                <Tag.TopLeft>
                    <Img fixed = {this.props.source.edges[0].node.myphoto.fixed} style={{borderRadius: '300px'}}/>
                </Tag.TopLeft>
                <Tag.BottomRight>
                    <p>
                        {this.props.source.edges[0].node.description}
                    </p>
                </Tag.BottomRight>
            </Tag.Wrapper>
        );
    }
}

export default index;