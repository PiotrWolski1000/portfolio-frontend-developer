import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img from 'gatsby-image'


const Wrapper = styled.div`

    font-family: 'Roboto';
  font-size: 1.5rem;
  line-height: 1.5rem;
  display: flex;
  
  @media(max-width: 400px){
      flex-direction: column;
  }

  align-items: center;


  &:focus{
    outline: none !important;
  }
  .wrapperImage{
      display: block;
      width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* @media(max-width: 400px){
        background: rgba(23, 23, 23, 0.5);
    } */
  }
  img{
      /* @media(min-width: 400px){
      } */
    padding: 0 0.5rem;
  }
  article{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items:space-around;
      padding: 1rem;
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
    }
`

export default class SimpleSlider extends Component {
    constructor(props){
        super(props)
    }
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
                title: this.props.data.edges[0].node.projecttitle, 
                description: this.props.data.edges[0].node.projectdescription,
                image: this.props.data.edges[0].node.projectimage,
                github: this.props.data.edges[0].node.githublink, 
                livelink: this.props.data.edges[0].node.livelink, 
        },
        {
                title: this.props.data.edges[1].node.projecttitle,
                description: this.props.data.edges[1].node.projectdescription,
                image: this.props.data.edges[1].node.projectimage,
                github: this.props.data.edges[1].node.githublink, 
                livelink: this.props.data.edges[1].node.livelink,
        },
        {
            title: this.props.data.edges[2].node.projecttitle,
            description: this.props.data.edges[2].node.projectdescription,
            image: this.props.data.edges[2].node.projectimage,
            github: this.props.data.edges[2].node.githublink, 
            livelink: this.props.data.edges[2].node.livelink,
        }
        ]
                              
        return (
            <Slider {...settings}>
                {Description.map((item, i) => (
                    <div key={`div_slider_${i}`}>
                        <Wrapper>
                            <div className="wrapperImage">
                                <img src={item.image.url} width='200px' height='300px' alt="Project image"/>
                            </div>
                            <article>
                                <h2>
                                    {item.title}
                                </h2>
                                <div>
                                    {item.description}
                                </div>

                                <Links>
                                    {item.github?(
                                      <a href = {item.github}>Project's Github repositorium</a>
                                    ):(null)}

                                    {item.livelink?(
                                        <a href = {item.livelink}>Demo</a>                                        
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