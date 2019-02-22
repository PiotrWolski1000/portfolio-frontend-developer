import styled from 'styled-components'

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    min-height: 300px;
    width: 100%;
    z-index: 0;
    color: #707070;
    .sentMessage{
        position: fixed;
        top: 0px;
        z-index: 9999;
        display: flex;
        justify-content: space-around;
        align-items: center;
        
        height: 100px !important;
        width: 100%;
        text-align: center;
        background-color: lightblue;
        transition: height 0.5s ease;
        
        p{
            font-size: 1.1rem;
            margin-left: 1rem;
            position: relative;
            top: 12px;
            display: block !important;
        }
        .cross{
            width: 50px;
            height: 50px;
            border-radius: 25px;
            background-color: #0a5d84;
            margin: 1rem;
            -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
            -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
            box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            ${this}:hover{
                cursor: pointer;
            }
        }
        .cross div {
            width: 30px;
            height: 5px;
            margin: 0.1rem;
            background-color: white;                            
            ${this}:nth-child(1){
                position: relative;
                left: 12px;
                top: 0px;
                transform: rotate(135deg);
            }
            ${this}:nth-child(2){
                position: relative;
                left: -12px;
                top: 0px;
                transform: rotate(-135deg);
            }
        }
    }
    h3 {
        margin-top: 1rem;
    }
    form{
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        @media(min-width: 320px){
            width: 250px;
        }
        @media(min-width: 425px){
            width: 350px;
        }
        @media(min-width: 768px){
            width: 500px;
        }
        @media(min-width: 1024px){
            width: 768px;
        }
        textarea[type='text'], input[type='tel'], input[type='text'],input[type='password'],input[type='email'] {
            all: initial;
            background-color: white;
            padding: 0.3rem 0.2rem;
            border-radius: 3px;
            z-index: 2;
            outline: none;
            border-bottom: 2px solid #E52321;;
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
            /* color: #ffffff; */
            color: black;
            cursor: default;
        }
        label.field-active {
            transform: translateY(-30px);
            font-size: .8rem;
        }
        .floating-label {
            -webkit-appearance: none !important;
        }
        textarea:focus::-webkit-input-placeholder,input:focus::-webkit-input-placeholder{
            opacity: 0;
            transition: opacity 0.5s ease; 
        }
        textarea:not(:focus)::-webkit-input-placeholder,input:not(:focus)::-webkit-input-placeholder{
            opacity: 1;
            transition: opacity 0.5s ease; 
        }
        button{
            all: initial;
            cursor: pointer;
            height: 55px;
            display: block;
            margin: 0 auto;
            margin-top: 4rem;
            background-color: #E52321;
            border-radius: 25px;
            text-align: center;
            
            color: white; 
            font-size: 1.5rem;
            
            @media (max-width: 500px) {
                font-size: 1.3rem;
                min-width: 200px;
            }
            @media (max-width: 768px) {
                min-width:250px;
            }
            @media(min-width: 769px){
                min-width: 300px;
            }
            @media(min-width: 1280px){
                min-width: 400px;
            }
            -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
            -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
            box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
            outline: none;
            &:hover{
                text-decoration: underline;
            }
            ${this}:active{
                background-color: #CE1715;
                color: white;
                text-decoration: none !important;
                transition: all 0.25s ease;
            }
        }
    }
`

export const Message = styled.div`
    -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
`