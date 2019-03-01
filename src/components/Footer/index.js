import React, { Component } from 'react';
import * as Tag from './style'

class index extends Component {
    render() {
    const FooterComponent = this.props.data
    return (
        <Tag.MainWrapper>
                <Tag.MiniTitle>
                    Social media and useful links           
                </Tag.MiniTitle>
                <Tag.Wrapper>
                    
                        <div className="footerItem">
                            <img src={FooterComponent.phoneimage.url} ></img>
                            <span>
                                {FooterComponent.phonenumber} 
                            </span>
                        </div>
                        <div className="footerItem">
                            <img style={{fill: 'blue!important'}} src={FooterComponent.atimage.url} ></img>
                            <span>
                                {FooterComponent.email}
                            </span>
                        </div>
                    
                        <div className="footerItem">
                            <img src={FooterComponent.linkedinimage.url} ></img>
                            <span>
                                <a href={FooterComponent.linkedintext}>LinkedIn profile</a>
                            </span>
                        </div>
                    
                        <div className="footerItem">
                            <img src={FooterComponent.facebookimage.url} ></img>
                            <span>
                                <a href={FooterComponent.facebooktext}>Facebook profile</a>
                            </span>
                        </div>
                        <div className="footerItem">
                            <img src={FooterComponent.instagramimage.url} ></img>
                            <span>
                                <a href={FooterComponent.instagramtext}>Instagram profile</a>
                            </span>
                        </div>
        
                        <div className="footerItem">
                            <img src={FooterComponent.twitterimage.url} ></img>
                            <span>
                                <a href={FooterComponent.twitterlink}>Twitter profile</a>
                            </span>
                        </div>
        
        
        
                    
                    </Tag.Wrapper>
                        
                    <Tag.BottomFooter>
                    
                        © {new Date().getFullYear()} {` `}
                    
                    </Tag.BottomFooter>   
            </Tag.MainWrapper>
    )
        
    }
}
export default index;
