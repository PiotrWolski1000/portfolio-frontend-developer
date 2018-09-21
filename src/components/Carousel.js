import React from 'react';
import Carousel from 'nuka-carousel';
import styled from 'styled-components'  

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
    opacity: 0.7;
    text-transform: lowercase;

} 

  &:hover {
    display: flex;
    width: 100%;
    align-items: flex-end;
    ${DescriptionContainer}{
      display: flex;
      flex-direction: column;
      align-items: space-between;
      font-family: Arial, Helvetica, sans-serif;
      color: white;
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
  padding-left: 20px;
  text-transform: capitalize;
`

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.0rem;
  line-height: 1.5rem;
  text-indent: 20px;
  word-wrap: wrap;
  padding-left: 20px;
   padding-right: 20px;

  a {
    color: white;
    text-decoration: none;
    padding-top:10px;
  
  } 
  a:hover{
    text-decoration: underline;
  }
  @media(max-width: 600px){
    font-size: 0.8rem;
    line-height: 1.3rem;
  }
  text-transform: none;
`

export default class extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    // console.log(this.props.data)
    // console.log(this.props.data[0].node.id)
    // const iterator = 5;
    // const data = ['slide1','slide2','slide3','slide4','slide5']
    return (
        <Carousel>
            
              {
                  this.props.data.map((point)=>{return(
                  <Item 
                    key={point.node.id} 
                    // src={point.node.projectimage.url}
                    style={
                        {
                            // marginLeft: '0px',
                            // paddingLeft: '0px',
                            // margin: "auto 0px",
                            backgroundImage: 'url(' + point.node.projectimage.url + ')', 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat'
                    }}>
                  

                    <DescriptionContainer>
                      <ItemTitle>
                        {point.node.projecttitle}
                      </ItemTitle>
                      <Description>
                        {point.node.projectdescription} 
                        {/* if({point.node.githubLink}){
                          () => {
                            return( */}
                              <a href = {point.node.githublink}>Project's Github repositorium</a>
                            {/* )
                          }
                        } */}

                        {/* if({point.node.livelink}){
                          ()=>{
                            return( */}
                              <a href= {point.node.livelink}>Demo</a>                    
                            {/* )
                          }

                        
                        } */}
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