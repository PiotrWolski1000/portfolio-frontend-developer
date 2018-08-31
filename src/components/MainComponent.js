import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    /* background-image: url(./../img/bg_laptop_coffee.jpg) no-repeat center center fixed;  */
    width: 100%;
    min-height: 500px;
    position: relative;
    top: 75px;
`

const AddintionalWrapper = styled.div`
    /* width: 95%; */
    margin: 0 auto;
    height: 100%;
    /* // border-top: #416B89 solid 2px; */
    /* // clear: both; */

`

const H1 = styled.div`
    color: white;
`

const MainComponent = ({MainComponentData}) => {
    console.log(MainComponentData)
    return(
        <Wrapper style={{
            backgroundImage: 'url(' + MainComponentData.mainpicture.url + ')', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
        }
        }>
            <AddintionalWrapper>

            <H1>{MainComponentData.maincomponenttext}</H1>

            </AddintionalWrapper>
        </Wrapper>   
    )
  }
  export default MainComponent;

