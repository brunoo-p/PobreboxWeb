import React, { useEffect, useState } from 'react';
import { Container, Navigation, PobreboxLogo, Form, Arrow} from './styles';
import Lottie from 'react-lottie';
import arrowData from '../../Assets/Lotties/arrow.json';
import api from '../../Services/api';
//import validate from '../../Services/validate';

import { useHistory } from 'react-router-dom';


export default function MenuForm({setOpenForm}) {

    const [ ToggleLogin, setToggleLogin ] = useState(false);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ name, setName ] = useState("");

    const history = useHistory();

    //--> Redirect to principal route
    useEffect(() => {
        const getStorage = JSON.parse(localStorage.getItem('user'));        
        
        if(getStorage){
            
            history.push("/app");
            console.log("redirect");
            
        };
        
    }, [password]);
    //<--

    //--> Lottie options
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: arrowData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    //<--
    
    //--> Request Login / separate from Submit for reuse
    let errorRequest = 203;

    const getLogin = async () =>{

        const response = await api.post(`/user?email=${email}&password=${password}`);
        console.log("response", response);

        if(response.status === errorRequest){
            alert("Usuário ou senha inválidos.");

        }else{

            
            localStorage.setItem('user', JSON.stringify(response.data));

            let storage = JSON.parse(localStorage.getItem('user'));
            console.log(storage);
        }
        setEmail("");
        setPassword("");

    }
    //<--

    //--> Login submit
    const onLogin = async (event) => {
        event.preventDefault();

        /*user and password validation
            not implemented*/
        
        //let isValid = await validate("email", email);
        let isValid = true;
        console.log(isValid, email);

        if(!isValid){
            
            alert("Digite um e-mail válido.");
            setEmail("");
            setPassword("");
        }
        else{
            await getLogin();
        }
        
    }
    //<--

    //--> Register submit
    const onRegister = async (event) => {
        event.preventDefault();

        /*user and password validation
            not implemented*/
        //const isValid = validate("password", password);

        let isValid = true;
        if(!isValid){
            alert("Senha muito fraca");

        }else{

            const data = {
                name,
                email,
                password
            };

            console.log('register');
            console.log(data);
            const response = await api.post("/user/register?", {name, email, password});
            console.log("response", response);

            if(response.status === 400 || response.status === 500){
                alert("Houve um erro ao tentar cadastrar este usuário");
            
            }else{
                console.log('fazendo login');
                getLogin();
            }
        }
    };
    //<--

    
    return (

        <Container>
            <Navigation>
                
                <h1>
                    <PobreboxLogo/>
                    <span> Pobrebox </span>
                </h1>

                <button onClick={() => setOpenForm(false)} className="action--close"> Close </button>
            
            </Navigation>

            {!ToggleLogin ?
            <Form onSubmit={onRegister}>
                
                <span className="title"> Registre-se </span>
                <span className="subtitle" onClick={() => setToggleLogin(true)}> Quero fazer Login </span>

                <input type="text" onChange={(event) => setName(event.target.value)} value={name} placeholder="Digite seu nome completo" required/>
                <input type="email" onChange={(event) => setEmail(event.target.value)} value={email} placeholder="Digite seu e-mail" required/>
                <input type="password" onChange={(event) => setPassword(event.target.value)} value={password} placeholder="Registre uma senha" required/>

                <button onClick={onRegister}> Registrar </button>
                <p>
                    <input className="check" type="checkbox" required/>
                    <span className="terms"> Eu não quero ler <a href='#'>isso</a>. </span>
                </p>
            
            </Form>
            :
            <Form onSubmit={onLogin}>
                
                <Arrow onClick={() => setToggleLogin(false)}>
                    <Lottie 
                        options={defaultOptions}
                        title="Voltar para Registro"
                    />
                </Arrow>
                
                <p>Voltar para Registro</p>
                <span className="title"> Login </span>
                <span className="subtitle"> Vamos Nessa!! </span>

                <input type="email" onChange={(event) => setEmail(event.target.value)} value={email} placeholder="Digite seu e-mail" required/>
                <input type="password" onChange={(event) => setPassword(event.target.value)} value={password} placeholder="Agora sua senha" required/>

                <button onClick={onLogin}> Login </button>
                <p>
                    <span className="terms"> Copyright © Bruno Paulino </span>
                </p>
            </Form>
            }
        </Container>
    )
}
