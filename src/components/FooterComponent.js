import React from 'react'
import styled from 'styled-components'


const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #011727;
    color: white;
    width: 100%;
    height: auto;
    border-top: #416B89 solid 2px;
    padding-top:50px;
    padding-bottom: 50px;

    position: relative;
    top: 100px;

`

const BottomFooter = styled.div`
    padding-top: 50px;
    color: white;
    @media(max-width: 600px){
        font-size: 1.3rem;
        
    }
`
const Wrapper = styled.div`

    display: grid;


    grid-template-columns: repeat(2 ,1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 50px;

    @media (max-width: 600px){    
        grid-template-columns: repeat(1 ,1fr);
        grid-template-rows: repeat(4, 1fr);
    }
    @media(min-width: 1080px){
        grid-template-columns: repeat(3 ,1fr);
        grid-template-rows: repeat(2, 1fr);    
    }
    .footerItem {
        padding-left: 50px;
        border-left: 2px solid #416B89;


            @media (max-width: 600px){
                font-size: 1.2rem;
                line-height: 1.2rem;
            }
        
        img {
            width: 50px;
            height: 50px;
        }
        span{
        /* margin-right: 50pax; */
        display: flex;
        align-items: center;
        justify-content: center;

            a {
                color: white;
                text-decoration: none; 
                text-align: center;
            }
            a:hover {
                text-decoration: underline;
            }
        }
    }
`

const MiniTitle = styled.h2`
    margin: 0px 0px 100px 0px;
    text-align: center;
    /* text-indent: 50px; */
    @media(max-width: 600px){
        /* left: 0px; */
    }
`


const FooterComponent = ({FooterComponent}) => {
    console.log(FooterComponent.phoneimage.url)
    return(
        <MainWrapper>
            <MiniTitle>
                Social media and useful links           
            </MiniTitle>
            <Wrapper>
                
                    <div className="footerItem">
                        <img src={FooterComponent.phoneimage.url} ></img>
                        <span>
                            {FooterComponent.phonenumber} 
                        </span>
                    </div>

                    {/* <div className="footerItem">
                        <img src={FooterComponent.githubimage.url} ></img>
                        <span>
                            <a href={FooterComponent.githublink}>Github profile</a>
                        </span>
                    </div> */}

                    <div className="footerItem">
                        <img src={FooterComponent.atimage.url} ></img>
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



                
            </Wrapper>

            <BottomFooter>
                © 2018
            </BottomFooter>   
        </MainWrapper>
    )
  }
  export default FooterComponent;