import React, { Component } from 'react';
import * as Tag from './style'
import SimpleSlider from '../SimpleSlider'

class index extends Component {
    render() {
        return (
            <Tag.Wrapper>
                <SimpleSlider data={this.props.source}/>
            </Tag.Wrapper>
        );
    }
}

export default index;