import React from 'react'
import styled from 'styled-components'
import SendButtonComponent from './SendButtonComponent.js'

const Wrapper = styled.div`
    width: 100%;
    height: 800px;

    position: relative;/*because of fixed header*/
    top: 75px;


`

const AddintionalWrapper = styled.div`
    margin: 0 auto;
    height: 100%;
    clear: both;
`
const SectionTitle = styled.h1`
    padding-top: 50px;
    padding-bottom: 25px;
    text-align: center;
    width: 100%;
    border-top: #416B89 solid 2px;
    width : 95%;
    margin: 0 auto;
`
const ContactForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input, textarea {
        display: block;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px 0px;

        border-radius: 10px;
    }
`


const HintDiv = styled.div`
    position: relative;
    top: -50px;
    text-align: center;
    font-style: italic;
    color: grey;
`
const ContactComponent = ({}) => {
    return(
        <Wrapper>
            <SectionTitle>Contact</SectionTitle>
            <AddintionalWrapper>

                <ContactForm>
                    <form name="contact" netlify>
                        <input name="name" type='text' placeholder="Name, Company name"/>
                        <input name="email" type="email" placeholder="Email address"/>
                        <input name="phone" type="number" placeholder="Phone number"/>
                        <input name="mail_subject" type="text" placeholder="Subject/Title"/>
                        <textarea name="message" type="text" rows="4" cols="50" placeholder="Message"></textarea>
                        <SendButtonComponent type={'submit'}>
                        </SendButtonComponent>
                    </form>

                </ContactForm>

                    <HintDiv>
                        Click the circle to send me a message!
                    </HintDiv>

            </AddintionalWrapper>
        </Wrapper>   
    )
  }
  export default ContactComponent;