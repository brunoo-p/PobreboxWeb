import React from 'react';
import { Container, HeaderWrapper, Header, PobreboxLogo, Content } from './styles';
//import Lottie from 'react-lottie';

export default function index({ color, title, description }) {
    const buttonVaiant = Math.round(Math.random());

    return (
        <>
           <Container className={color}>
               <HeaderWrapper>
                   <Header>
                       <h1>
                           <PobreboxLogo/>
                           <span> Pobrebox </span>
                       </h1>

                       <button> {buttonVaiant === 0 ? 'Acessar' : 'Interagir'} </button>
                   </Header>
               </HeaderWrapper>
                <Content>
                    <h2> {title} </h2>
                    <p> {description} </p>
                </Content>   
                
            </Container>  
        </>
    )
}
