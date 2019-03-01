import styled from 'styled-components'

export  const MainWrapper = styled.div`
    display: flex;
    font-family: 'Roboto';
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #393E46;
    color: white;
    width: 100%;
    height: auto;
    border-top: #416B89 solid 2px;
    padding-top:50px;
    padding-bottom: 50px;
    position: relative;
    top: 100px;
`

export const BottomFooter = styled.div`
    margin-top:150px;
    color: white;
    
    @media(max-width: 600px){
        font-size:1.1rem;
    }
    @media(min-width: 600px){
        font-size: 1.3rem;
        
    }
    @media(min-width: 720px){
        font-size: 1.5rem;
        line-height: 1.5rem
    }
`
export const Wrapper = styled.div`
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
        padding-left: 20px;
        border-left: 2px solid rgba(255,255,255, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
            @media (max-width: 600px){
                font-size: 1.2rem;
                line-height: 1.2rem;
                border-left: none;
                padding-left: 0px;
                &::after{
                    content:"";
                    width: 50%;
                    padding-bottom: 50px;
                    border-bottom: 2px solid white;
                }
                &:last-child{
                    border-bottom: none;
                }
            }
        
        img {
            width: 50px;
            height: 50px;
        }
        span{
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

export const MiniTitle = styled.h2`
    margin: 0px 0px 100px 0px;
    text-align: center;
    /* text-indent: 50px; */
    @media(max-width: 600px){
        /* left: 0px; */
    }
`