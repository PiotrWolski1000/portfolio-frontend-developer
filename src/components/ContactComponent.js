import React, {Component} from 'react'
import styled from 'styled-components'
import SendButtonComponent from './SendButtonComponent.js'

const Wrapper = styled.section`
    width: 100%;
    height: 800px;
    position: relative;
    top: 75px;
    z-index: 0;
`

const AddintionalWrapper = styled.div`
    /* height: auto; */
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 0;
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
const Form = styled.form`
    display: flex;
    flex-direction: column;
    @media(min-width: 320px){
      width: 300px;
    }
    @media(min-width: 500px){
      width: 400px;
    }
    @media(min-width: 768px){
      width: 500px;
    }
    textarea {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        /* position: absolute;
        z-index: 1000; */
    }
    textarea, input {
        border: 1px solid grey !important;
    }
    textarea[type="text"]:focus::-webkit-input-placeholder,input[type="text"]:focus::-webkit-input-placeholder,input[type="email"]:focus::-webkit-input-placeholder{
        opacity: 0;
        transition: opacity 0.5s 0.5s ease;        
    }
    textarea[type="text"]:not(:focus)::-webkit-input-placeholder,input[type="text"]:not(:focus)::-webkit-input-placeholder, input[type="email"]:focus::-webkit-input-placeholder{
      opacity: 1;
      transition: opacity 0.5s 0.5s ease; 
    }
    textarea[type='text'], input[type='text'],input[type='password'],input[type='email'],input[type='number'] {
        all: initial;
        background-color: white;
        padding: 0.3rem 0.2rem;
        border-radius: 3px;
        z-index: 2;
        outline: none;
        border-bottom: 2px solid #ffe600;
        &::-webkit-input-placeholder {
            color: grey;
        }
    }
    label {
        z-index: 1;
        display: inline-block;
        display: block;
        position:relative;
        left: 2px;
        bottom: -29px;
        transition: all 150ms ease-in;
          /* color: #737373; */
          color: #000000;
        cursor: default;
    }
    label.field-active {
        transform: translateY(-30px);
        font-size: .8rem;
    }
    .floating-label {
        -webkit-appearance: none !important;
    }
    textarea[type="text"]:focus::-webkit-input-placeholder, input[type="text"]:focus::-webkit-input-placeholder{
        opacity: 0;
        transition: opacity 0.5s ease; 
    }
    textarea[type="text"]:not(:focus)::-webkit-input-placeholder, input[type="text"]:not(:focus)::-webkit-input-placeholder{
        opacity: 1;
        transition: opacity 0.5s ease; 
    }
 
    button{
        display: block;
        -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
        -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
        box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
        margin-top: 25px;
        cursor: pointer;
        outline: none;
        padding: 13px 29px;
        line-height: 17px;
        font-size: 14px;
        border: none;
        background: #ffe600;
        border-radius: 20px;

        /* max-width: 200px; */
        /* width: 300px; */
        margin: 0 auto;
        margin-top: 50px;
        
        ${this}:active{
            background-color: #C6B305;
            color: white;
            transition: all 0.25s ease;
        }
        ${this}:hover{
            cursor: pointer;
        }
    }
`

export default class ContactComponent extends React.Component  {

    constructor(props){
        super(props)
        this.state = {
            nameFieldActive: false,
            emailFieldActive: false,
            phoneFieldActive: false,
            mailSubjectFieldActive: false,
            messageFieldActive: false,
            name: '',
            email: '',
            phone: '',
            mailSubject: '',
            message: '',
        }
    }

    activateField = e => {
        if(e.target.name === 'name'){
          this.setState({
            nameFieldActive: true
          })
        }else if(e.target.name === 'email'){
          this.setState({
              emailFieldActive: true
          })
        }else if(e.target.name === 'phone'){
          this.setState({
              phoneFieldActive: true
          })
        }else if(e.target.name === 'mail_subject'){
          this.setState({
              mailSubjectFieldActive: true
          })
        }else if(e.target.name === 'message'){
            this.setState({
                messageFieldActive: true
            })
        }
    }
      
    disableFocus = e => {
        if(e.target.name === 'name'){
          if (e.target.value === '') {
            this.setState({
                nameFieldActive: false
            })
          }
        }else if(e.target.name === 'email'){
          if (e.target.value === '') {
            this.setState({
                emailFieldActive: false
            })
          }
        }else if(e.target.name === 'phone'){
          if (e.target.value === '') {
            this.setState({
                phoneFieldActive: false
            })
          }
        }else if(e.target.name === 'mail_subject'){
          if (e.target.value === '') {
            this.setState({
                mailSubjectFieldActive: false
            })
          }
        }
        else if(e.target.name === 'message'){
            if (e.target.value === '') {
              this.setState({
                  messageFieldActive: false
              })
            }
        }      
    }

    onChangeInput = e => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState(prevState => ({ ...prevState, [name]: value }))
    
        this.activateField(e)
    }

    render(){

        return(
            <Wrapper>
                <SectionTitle>Contact</SectionTitle>
                <AddintionalWrapper>
                    <Form 
                        name="contact"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        <label 
                            htmlFor='name'
                            className={this.state.nameFieldActive ? "field-active" : ""}
                        >
                            Name: 
                        </label>
                        <input 
                            name="name" 
                            type='text' 
                            placeholder="Name, Company name"
                            onChange={this.onChangeInput}
                            onFocus={this.activateField}
                            onBlur={this.disableFocus} 
                        />
                        
                        <label 
                            htmlFor='email'
                            className={this.state.emailFieldActive ? "field-active" : ""}
                        >
                            Email: 
                        </label>
                        <input 
                            name="email" 
                            type="email" 
                            placeholder="Email address"
                            onChange={this.onChangeInput}
                            onFocus={this.activateField}
                            onBlur={this.disableFocus}  
                        />
                        
                        <label 
                            htmlFor='phone'
                            name='phone'
                            className={this.state.phoneFieldActive ? "field-active" : ""}
                        >
                            Phone: 
                        </label>                        
                        <input 
                            name="phone" 
                            type="number" 
                            placeholder="Phone number"
                            onChange={this.onChangeInput}
                            onFocus={this.activateField}
                            onBlur={this.disableFocus} 
                        />
                        
                        <label 
                            htmlFor='mail_subject'
                            className={this.state.mailSubjectFieldActive ? "field-active" : ""}
                        >
                            Mail subject: 
                        </label>                        
                        <input 
                            name="mail_subject" 
                            type="text" 
                            placeholder="Mail subject"
                            onChange={this.onChangeInput}
                            onFocus={this.activateField}
                            onBlur={this.disableFocus} 
                        />
                        
                        <label 
                            htmlFor='message'
                            className={this.state.messageFieldActive ? "field-active" : ""}
                        >
                            Message: 
                        </label>
                        <textarea 
                            name="message" 
                            type="text" 
                            rows="4" 
                            cols="50" 
                            placeholder="Message" 
                            onChange={this.onChangeInput}
                            onFocus={this.activateField}
                            onBlur={this.disableFocus} 
                        />
                        <button type='submit'>
                        Send
                        </button>
                    </Form>
                </AddintionalWrapper>
            </Wrapper>   
        )        
    }
}