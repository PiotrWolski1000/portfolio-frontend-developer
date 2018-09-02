import React from 'react'
import styled from 'styled-components'
// import Typed from 'typed.js'


const Wrapper = styled.div`
    width: 100%;
    min-height: 500px;
    /* height: auto; */
    min-height: 400px;
    /* media query with height on mobiles? ofc less than 500 px and more than 500 on large screens */
    position: relative;
    top: 75px;
`

const AddintionalWrapper = styled.div`
    /* width: 95%; */
    margin: 0 auto;
    /* height: 100%; */
    /* // border-top: #416B89 solid 2px; */
    /* // clear: both; */

`

const H1 = styled.div`
    color: white;
`

const MainComponent = ({MainComponentData}) => {
    console.log(MainComponentData)
    // const typed = new Typed('#typedText', {
    //     strings: ["First sentence.", "Second sentence."],
    //     typeSpeed: 30
    // });
    return(
        <Wrapper style={{
            backgroundImage: 'url(' + MainComponentData.mainpicture.url + ')', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
        }
        }>
            <AddintionalWrapper>
            

            <H1 id = "typedText">
                {/* {typed} */}
            </H1>


            </AddintionalWrapper>
        </Wrapper>   
    )
  }
  export default MainComponent;

