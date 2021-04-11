import React, { useEffect, useState } from 'react'
import { Container, Content, Aside, Form } from './styles';
import { GiBoxTrap } from 'react-icons/gi';
import validate from '../../Services/validate';
import api from '../../Services/api';
import { useHistory } from 'react-router';

export default function ChangePass() {

    const [newPass, setNewPass ] = useState("");
    const [confirmNewPass, setConfirmNewPass ] = useState("");
    const [borderInput, setBorderInput ] = useState(null);
    const [email, setEmail ] = useState("");
    const [code, setCode ] = useState("");
    const [tryConfirm, setTryConfirm ] = useState(true);
    const [emailSended, setEmailSended ] = useState(false);

    let history = useHistory();
    useEffect(() => {

        if(newPass.length >= 1){
            
            if(newPass === confirmNewPass){
                setBorderInput(true);
            }else{ 
                setBorderInput(false);
            }
        }

    }, [confirmNewPass]);
    


    const handleEmailToConfirm = ({target}) => {
        setEmail(target.value);

    }
    const handleCodeToConfirm = ({target}) => {
        setCode(target.value);
    }

    const submitToConfirm = async () => {
        if(!emailSended){
            
            const isValid = validate("email", email);
            if(isValid){
                const response = await api.get(`/user/settingpass/${email}`);
                console.log(response);

                if(response.status == 200){
                    document.querySelector("#inputsetting").value = "";
                    console.log(response);
                    setEmailSended(true);
                }
                else{
                    alert("Algo deu errado. Iremos analisar as configurações da sua conta");
                    history.goBack();
                }
            }
            
        }else{
            
            console.log("email", email);
            console.log("code", code);

            let codeFake = "AK3S6";
            if(code === codeFake){

                setTryConfirm(false);
            }else{

                alert("Código incorreto.");
                history.push("/");

            }
        }
    }

    let backgroundColor = emailSended ? "rgba(0,0,0,.5)" : "rgba(245,245,245,0.95)";
    let className = borderInput === null? '' : borderInput ? 'right' : 'wrong';
    
    return (
        <Container>
            <Content>
                <input className="backHome" type="button" value="Voltar para a Home" onClick={() => history.goBack()}/>
                <Aside>

                    {tryConfirm ?
                    <>
                        <section className="requestChange" style={{ backgroundColor: backgroundColor}}>
                            
                            <p><GiBoxTrap /></p>
                            {!emailSended ?
                                <>
                                    <span>Informe seu e-mail de cadastro.</span>
                                    <input type="text"  id="inputsetting" onChange={handleEmailToConfirm}/>
                                </>
                            :
                                <>
                                    <span style={{color: "white"}}>Confirme o código recebido.</span>
                                    <input type="text"  id="inputsetting" onChange={handleCodeToConfirm}/>
                                </>
                            }
                            <input className="btnSubmit" type="submit" value="Enviar" onClick={submitToConfirm}/>
                        </section>
                    </>
                    
                    : 
                    <>
                        <section>
                            
                            <p>Pobrebox</p>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Atque ex autem iste error quibusdam ipsam deleniti impedit! In non, suscipit id iste quisquam illum corrupti doloremque ipsum esse, odit asperiores!
                                
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
