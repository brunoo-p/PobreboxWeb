import React, { useEffect, useState } from 'react'
import { Container, Content, Aside, Form } from './styles';
import { GiBoxTrap } from 'react-icons/gi';

export default function ChangePass() {

    const [newPass, setNewPass ] = useState("");
    const [confirmNewPass, setConfirmNewPass ] = useState("");
    const [borderInput, setBorderInput ] = useState(null);
    const [email, setEmail ] = useState("email@email.com");

    useEffect(() => {

        if(newPass.length >= 1){
            
            if(newPass === confirmNewPass){
                setBorderInput(true);
            }else{ 
                setBorderInput(false);
            }
        }

    }, [confirmNewPass]);
    
    let tryConfirm = true;

    const handleEmailToConfirm = (event) => {
        if(event.keyCode === 13 ){
            setEmail(event.target.value);
            
            submitToConfirm();
        }
    }
    const submitToConfirm = () => {
        /*Post to server*/
    }


    let background = !true ? "rgba(0,0,0,.3)" : "rgba(245,245,245,0.95)" ;
    let className = borderInput === null? '' : borderInput ? 'right' : 'wrong';
    
    return (
        <Container>
            <Content>
                <Aside>

                    {tryConfirm ?
                    <>
                        <section className="requestChange" style={{ backgroundColor: background}}>
                            
                            <p><GiBoxTrap /></p>
                            {!true ? <span>Informe seu e-mail para que possamos enviar um código de confirmação.</span>
                                  : <span>Confirme o código recebido</span> }
                            <input type="email" onKeyDown={handleEmailToConfirm}/>
                            <input type="submit" value="Enviar" onClick={submitToConfirm}/>
                        </section>
                    </>
                    
                    : 
                    <>
                        <section>
                            
                            <p>Pobrebox</p>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Atque ex autem iste error quibusdam ipsam deleniti impedit! In non, suscipit id iste quisquam illum corrupti doloremque ipsum esse, odit asperiores!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ut itaque alias reprehenderit aperiam, molestiae ratione, voluptates maxime, sunt fuga assumenda placeat quae aspernatur.
                                Tenetur a ad eligendi repudiandae dolorem.
                            </span>

                        </section>

                        <Form>
                            <h2>{email}</h2>
                            <input className="password" type="password" placeholder="Digite sua nova senha" onChange={(event) => setNewPass(event.target.value)}/>
                            <input className="confirmPass" type="password" placeholder="Confirme a senha" className= {className} onChange={(event) => setConfirmNewPass(event.target.value)}/>
                            <input className="btnSubmit" type="submit" value="Mudar a Senha"/>
                        </Form>
                    </>
                    }
                </Aside>
            </Content>
        </Container>
    )
}
