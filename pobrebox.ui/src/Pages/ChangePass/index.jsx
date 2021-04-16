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
    const [aleatoryCode, setAleatoryCode ] = useState("");
    const [user, setUser ] = useState(null);
    const [tryConfirm, setTryConfirm ] = useState(true);
    const [emailSended, setEmailSended ] = useState(false);

    let history = useHistory();

    //--> Input border color
    useEffect(() => {

        if(newPass.length >= 1){
            
            if(newPass === confirmNewPass){
                setBorderInput(true);
            }else{ 
                setBorderInput(false);
            }
        }

    }, [confirmNewPass]);
    //<--


    //--> Set const with input values
    const handleEmailToConfirm = ({target}) => {
        setEmail(target.value);

    }
    const handleCodeToConfirm = ({target}) => {
        setCode(target.value);
    }
    //<--


    //--> Find User and Send Code To Confirm
    const submitToConfirm = async () => {
        if(!emailSended){
            
            const isValid = await validate("email", email);

            if(isValid){

                let code = await generateCode();
                console.log(code);
                setAleatoryCode(code);
                
                document.querySelector("#btnSubmit").value = "Enviando ...";
                const response = await api.get(`/user/settingpass/${email}/${code}`);
                console.log(response);

                if(response.status === 200){
                    setUser(response.data);
                    document.querySelector("#inputsetting").value = "";
                    setEmailSended(true);
                }
                else{
                    alert("Algo deu errado. Iremos analisar as configurações da sua conta");
                    history.goBack();
                }
            }else{
                alert("Você digitou algo errado no seu e-mail.");
            }
            
        }else{

            if(code === aleatoryCode){

                setTryConfirm(false);
            }else{

                alert("Código incorreto.");
                history.push("/");
            }
        }
        
        async function generateCode(){

            const allowCode = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let code = "";
            
            
            for( let i = 0; i < 6; i++ ){
               let current = Math.floor(Math.random() * 26);
               code += allowCode[current];
            }
            return code;
        }
    }
    //<--

    const handleSubmitChange = async (event) => {
        event.preventDefault();
        
        if(user !== null){
            let id = user.id;

            try{
                const isValid = await validate("password", newPass);

                if(isValid){
                    await api.post(`/user/changePass?id=${id}&newPass=${newPass}`);
                    alert("Senha Alterada com Sucesso!");
                    
                    document.querySelector("#newPass").value="";
                    document.querySelector("#confirmnNewPass").value="";
                    
                    history.replace("/");

                }else{
                    alert("A nova senha precisa conter: Letras maiúsculas, Letras minúsculas, Mínimo 1 número e 8 Caracteres.");
                }
            
            }catch(erro){
                console.log(erro);
            }
        }
    }


    let backgroundColor = emailSended ? "rgba(0,0,0,.5)" : "rgba(245,245,245,0.95)";
    let nameClass = borderInput === null? '' : borderInput ? 'right' : 'wrong';
    
    return (
        <Container>
            <Content>
                { tryConfirm && <input className="backHome" type="button" value="Voltar para a Home" onClick={() => history.replace("/")}/> }
                <Aside>

                    {tryConfirm ?
                    <>
                        <section className="requestChange" style={{ backgroundColor: backgroundColor}}>
                            
                            <p><GiBoxTrap style={{fill:"#c8ecdd"}}/></p>
                            {!emailSended ?
                                <>
                                    <span>Informe seu e-mail de cadastro.</span>
                                    <input type="text"  id="inputsetting" onChange={handleEmailToConfirm} placeholder="E-mail"/>
                                </>
                            :
                                <>
                                    <span style={{color: "white"}}>Confirme o código recebido.</span>
                                    <input type="text"  id="inputsetting" onChange={handleCodeToConfirm} placeholder="6-Digit Code"/>
                                </>
                            }
                            <input className="btnSubmit" type="submit" value="Enviar" onClick={submitToConfirm} id="btnSubmit"/>
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
                            <input className="password" type="password" placeholder="Digite sua nova senha" onChange={(event) => setNewPass(event.target.value)} id="newPass"/>
                            <input className={nameClass} type="password" placeholder="Confirme a senha" onChange={(event) => setConfirmNewPass(event.target.value)} id="confirmnNewPass"/>
                            <input className="btnSubmit" type="submit" value="Mudar a Senha" onClick={handleSubmitChange} style={{backgroundColor: "rgba(23,123,223,0.6"}}/>
                        </Form>
                    </>
                    }
                </Aside>
            </Content>
        </Container>
    )
}
