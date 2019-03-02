import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Wrapper = styled.div`

    font-family: 'Roboto';
    font-size: 1.5rem;
    line-height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: left;

    @media(max-width: 1024px){
        flex-direction: column;
    }

    .wrapperImage{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    }
    img{
    display: block;
    }
    article{
        @media(max-width: 1024){
            width: 100%;
        }
        @media(max-width: 1024){
            width: 50%;
        }
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:space-around;
        padding: 1rem;
    }
    .description{
        text-indent: 2rem;
    }
`
const Links = styled.div`
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    a{
        margin-top: 1rem;
        &:link{
            color: black;
        }
        &:visited{
            color: black;
        }
        &:active{
            color: red;
        }
        &:hover{
            color: red;
        }
    }

`

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 7000,
            arrows: false,
            autoplay: true,
        };
                      
        return (
            <Slider {...settings}>
                {this.props.data.edges.map((item, i) => (
                    
                    <div key={`div_slider_${i}`}>
                        <Wrapper>
                            <div className="wrapperImage">
                                <img src={item.node.projectimage.url} width={item.node.projecttitle==='Chat with socket.io'?'300px':'170px'} height='300px' alt="Project image"/>
                            </div>
                            <article>
                                <h2>
                                    {item.node.projecttitle}
                                </h2>
                                <div className="description">
                                    {item.node.projectdescription}
                                </div>

                                <Links>
                                    {item.node.githublink?(
                                      <a href = {item.node.githublink}>Project's Github repositorium</a>
                                    ):(null)}

                                    {item.node.livelink?(
                                        <a href = {item.node.livelink}>Demo</a>                                        
                                    ):(null)}

                                </Links>
                            </article>
                        </Wrapper>
                    </div>
                ))}
        </Slider>
        )
  }
}