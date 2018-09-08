import React from 'react'
import styled from 'styled-components'
import TextComponent from './TextComponent/TextComponent.js';


const Wrapper = styled.div`
    width: 100%;
    /* height: 00px; */
    height: auto;
    position: relative;
    top: 75px;

    .flip3D{ 
	width:100px; 
	height:100px; 
	margin: 50px auto;	
	/* margin-left: 50px; */
	/* margin-right: 50px; */
    }
    .flip3D > .front{
        -webkit-transform:rotateY(0deg);
        position:absolute;
        transform: perspective( 600px ) rotateY( 0deg );
        border-radius: 7px;
        backface-visibility: hidden;
        transition: transform .5s linear 0s;
        /* background-color: green; */
    }
    .flip3D > .back{
        /* background-color: red; */
        position:absolute;
        transform: perspective( 600px ) rotateY( 180deg );
        width:100px; 
        height:100px;
        border-radius: 7px;
        backface-visibility: hidden;
        transition: transform .5s linear 0s;
        text-align: center;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 0.8rem;
    }

    .flip3D:hover > .front{
        transform: perspective( 600px ) rotateY( -180deg );
    }
    .flip3D:hover > .back{
        transform: perspective( 600px ) rotateY( 0deg );
    }

`

const AddintionalWrapper = styled.div`
    /* margin: 0 auto; */

    img {
        margin: 0 auto;
        height: 100px;
        width: 100px;
        padding: 20px;
    }


    display: grid;
    /* grid-gap: 10px; */
    align-items: center;
    justify-content: center;

    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(5, 1fr);



    @media(max-width: 720px){
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width: 600px) {
        /* align-items: center; */
        grid-template-rows: repeat(10, 1fr);
        grid-template-columns: repeat(1, 1fr);
    }
    @media(max-width: 400px) {
        grid-template-rows: repeat(10, 1fr);
        grid-template-columns: repeat(1, 1fr);
    }

`
const SectionTitle = styled.h1`
    padding-top: 50px;
    padding-bottom: 25px;
    text-align: center;
    width: 100%;
    width : 95%;
    margin: 0 auto;
    border-top: #416B89 solid 2px;
`

const MySkillsList = styled.div`
    /* display: flex; */
    /* flex-direction: column; */

    /* align-items: center; */
    /* justify-content: center; */

`

const MySkillsComponent = ({MySkillsComponent}) => {
    // console.log("to: "+ MySkillsComponent)
    let listImages = [MySkillsComponent.html5, 
        MySkillsComponent.javascript,
        MySkillsComponent.css3,
        MySkillsComponent.nodejs,
        MySkillsComponent.react,
        MySkillsComponent.npm,
        MySkillsComponent.photoshop,
        MySkillsComponent.ubuntuos,
        MySkillsComponent.windowsos,
        MySkillsComponent.github,
    ]
    return(
        <Wrapper>

            <SectionTitle>My skills</SectionTitle>
            <AddintionalWrapper>
            
            {/* <MySkillsList> */}
                {/* {listImages.map((card)=>{return(<img src = {card}></img>)})} */}
                <div className='flip3D'>
                    <div className='front'>
                        <img src = {MySkillsComponent.html5.url}></img>
                    </div>
                    <div className='back'>
                        <p> HTML5 </p>
                    </div>
                </div>    

                <div className='flip3D'>
                    <div className='front'>
                        <img src = {MySkillsComponent.javascriptimage.url}></img>
                    </div>
                    <div className='back'>
                        <p> JavaScript </p>
                    </div>
                </div>    

                <div className='flip3D'>
                    <div className='front'>
                        <img src = {MySkillsComponent.css3.url}></img>
                    </div>
                    <div className='back'>
                        <p> CSS3 </p>
                    </div>
                </div>    

                <div className='flip3D'>
                    <div className='front'>
                        <img src = {MySkillsComponent.nodejs.url}></img>
                    </div>
                    <div className='back'>
                        <p> NodeJS </p>
                    </div>
                </div>    

                <div className='flip3D'>
                    <div className='front'>
                        <img src = {MySkillsComponent.react.url}></img>
                    </div>
                    <div className='back'>
                        <p> React </p>
                    </div>
                </div>    

                <div className='flip3D'>
                    <div className='front'>
                        <img src = {MySkillsComponent.npm.url}></img>
                    </div>
                    <div className='back'>
                        <p> NPM </p>
                    </div>
                </div>    

                <div className='flip3D'>
                    <div className='front'>
                        <img src = {MySkillsComponent.photoshop.url}></img>
                    </div>
                    <div className='back'>
                        <p> Photoshop </p>
                    </div>
                </div>    

                <div className='flip3D'>
                    <div className='front'>
                        <img src = {MySkillsComponent.ubuntuos.url}></img>
                    </div>
                    <div className='back'>
                        <p> Linux Ubuntu </p>
                    </div>
                </div>    


                <div className='flip3D'>
                    <div className='front'>
                        <img src = {MySkillsComponent.windowsos.url}></img>
                    </div>
                    <div className='back'>
                        <p> Windows 10 </p>
                    </div>
                </div>    

                <div className='flip3D'>
                    <div className='front'>
                        <img src = {MySkillsComponent.github.url}></img>
                    </div>
                    <div className='back'>
                        <p> Github </p>
                    </div>
                </div>    
            {/* </MySkillsList> */}





            
            </AddintionalWrapper>
        </Wrapper>   
    )
  }
  export default MySkillsComponent;