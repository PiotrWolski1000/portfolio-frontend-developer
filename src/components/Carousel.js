import React from 'react';
import Carousel from 'nuka-carousel';
import styled from 'styled-components'  
import $ from 'jquery';

const DescriptionContainer = styled.div`
  
`

const Item = styled.div`
  width: 100%;
  min-height: 500px;
  background: white;

  ${DescriptionContainer} {
    display: none;
    width: 100%;
    height: 250px;
    background: black;
    opacity: 0.5;

} 

  &:hover {
    display: flex;
    width: 100%;
    align-items: flex-end;
    ${DescriptionContainer}{
      display: flex;
      flex-direction: column;
      align-items: space-around;
      font-family: Arial, Helvetica, sans-serif;
      color: white;
      text-transform: uppercase;
    }
  }
`
const ItemTitle = styled.div`
  width:100%;
  color: white;
  font-size: 1.4rem;
  line-height: 1.4rem;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 20px;
  
`

const Description = styled.div`
  width: 100%;
  /* min-height: 200px; */
  /* height: auto; */
  font-size: 1rem;
  line-height: 1.5rem;
  text-indent: 20px;
  word-wrap: wrap;
  /* margin-left: 20px; */
  /* padding: 0px 20px 0px 20px; */
  padding-left: 20px;
  padding-right: 20px;
  @media(max-width: 600px){
    font-size: 0.8rem;
    line-height: 1.3rem;
  }
`

export default class extends React.Component {
  render() {
    const iterator = 5;
    const data = ['slide1','slide2','slide3','slide4','slide5']
    return (
        <Carousel>
            
              {
                data.map((point)=>{return(
                  <Item>
                    <DescriptionContainer>
                      <ItemTitle>
                        {point}
                      </ItemTitle>
                      <Description>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. 
                        Cras consequat, dolor sit amet
                        luctus convallis, libero eros
                        porttitor arcu, nec ultricies 
                        est odio eget massa. Fusce aliquet
                        gravida sem, sit amet tincidunt 
                        arcu aliquam vitae. Integer
                        erat urna, pretium dignissim 
                        
                      </Description>
                    </DescriptionContainer>
                  </Item>
                )})
              }



            
            {/* <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" /> */}
        </Carousel>
    );
  }
}