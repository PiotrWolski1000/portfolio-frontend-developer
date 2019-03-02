import React, { Component } from 'react';
import * as Tag from './style'

class index extends Component {
    render() {
        const data = [{
            img: this.props.data.phoneimage,
            span: this.props.data.phonenumber,
  
        },{
            img: this.props.data.atimage,
            span: this.props.data.email,

        },{
            img: this.props.data.linkedinimage,
            span: this.props.data.linkedintext,
            aText: 'LinkedIn profile'
        },{
            img: this.props.data.facebookimage,
            span: this.props.data.facebooktext,
            aText: 'Facebook profile'
        },
        {
            img: this.props.data.instagramimage,
            span: this.props.data.instagramtext,
            aText: 'Instagram profile'            
        },
        {
            img: this.props.data.twitterimage,
            span: this.props.data.twitterlink,
            aText: 'Twitter profile'
        }]
        
        return (
            <Tag.MainWrapper>

                    <Tag.MiniTitle>
                        Social media and useful links           
                    </Tag.MiniTitle>

                    <Tag.Wrapper>
                        {data.map((item, i) => (
                            <div className="footerItem" key={`footer_item_${i}`}>
                                <img src={item.img.url} alt={item.img.alt} key={`img_footer_item${i}`}></img>
                                <span key={`footer_span_${i}`}>
                                    {item.span[0] === '+' || item.span === 'p.wolski1000@gmail.com' ?(
                                        item.span
                                    ):(
                                        <a key = {`footer_link_${i}`} href={item.span}>{item.aText}</a>
                                    )}
                                </span>  
                            </div>
                        ))}
                    </Tag.Wrapper>

                    <Tag.BottomFooter>
                    
                        © {new Date().getFullYear()} {` `}
                    
                    </Tag.BottomFooter>   
                </Tag.MainWrapper>
        )
    }
}
export default index;
