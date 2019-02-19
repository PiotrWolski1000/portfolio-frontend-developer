import React, { Component } from 'react';
import * as Tag from './style'

class index extends Component {
    render() {
    return (
            <Tag.Wrapper>
                © {new Date().getFullYear()}, Built with
                {` `}
            </Tag.Wrapper>
        );
    }
}
export default index;