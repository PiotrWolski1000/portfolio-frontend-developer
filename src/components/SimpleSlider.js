import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img from 'gatsby-image'


const Wrapper = styled.div`
  font-size: 1.5rem;
  line-height: 1.5rem;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus{
    outline: none !important;
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
            autoplaySpeed: 4000,
            arrows: false,
            autoplay: true,
        };

        const Description = [
            {
                title: this.props.data.edges[0].projecttitle, 
                description: this.props.data.edges[0].projectdescription,
                image: this.props.data.edges[0].node.projectimage.fluid
            },
            {
                title: this.props.data.edges[1].projecttitle,
                description: this.props.data.edges[1].projectdescription,
                image: this.props.data.edges[1].node.projectimage.fluid

            },
            {
                title: this.props.data.edges[2].projecttitle,
                description: this.props.data.edges[2].projectdescription,
                image: this.props.data.edges[2].node.projectimage.fluid
                
            }
        ]

        console.log('slider data: ', this.props.data.edges[0])
        console.log('slider image data: ', this.props.data.edges[0].node.projectimage)
        
        return (
            <Slider {...settings}>
                {/* <Img style={{width: '500px'}} fluid={Description[0].image}/> */}

                {Description.map((item, i) => (
                    <div key={`div_slider_${i}`}>
                        <Wrapper>
                            <Img style={{height: '100%', width: '100%'}} fluid={item.image}/>
                        </Wrapper>
                    </div>
                ))}
          </Slider>
        )
  }
}