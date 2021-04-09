import React from 'react';
import { Container, HeaderWrapper, Header, PobreboxLogo, Content } from './styles';
//import Lottie from 'react-lottie';

export default function index({ color, title, description, setOpenForm }) {
    const buttonVaiant = Math.round(Math.random());

    const handleForm = () =>  {
        setOpenForm(true);
    }

    return (
        <>
           <Container className={color}>
               <HeaderWrapper>
                   <Header>
                       <h1>
                           <PobreboxLogo/>
                           <span> Pobrebox </span>
                       </h1>

                       <button onClick={handleForm}> {buttonVaiant === 0 ? 'Acessar' : 'Interagir'} </button>
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
