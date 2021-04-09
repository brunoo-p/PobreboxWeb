import React, { useEffect, useState } from 'react';
import { Container, Navigation, PobreboxLogo, Form, PasswordCaracters, Arrow} from './styles';
import Lottie from 'react-lottie';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import arrowData from '../../Assets/Lotties/arrow.json';
import api from '../../Services/api';
import validate from '../../Services/validate';

import { useHistory } from 'react-router-dom';


export default function MenuForm({setOpenForm}) {

    const [ ToggleLogin, setToggleLogin ] = useState(false);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ name, setName ] = useState("");

    const [ lowerCase, setLowerCase ] = useState("blue");
    const [ upperCase, setUpperCase ] = useState("blue");
    const [ number, setNumber ] = useState("blue");
    const [ minChar, setminChar ] = useState("blue");

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

    //--> UX password
    useEffect(() => {
        
        //Mínimo uma Letra Maiúscula
        /^(?=.*[A-Z])/.test(password) ? setUpperCase("green") : setUpperCase("blue");

        //Mínimo uma Letra Minúsculaa
        /^(?=.*[a-z])/.test(password) ? setLowerCase("green") : setLowerCase("blue");
        
        //Mínimo um Número
        /^(?=.*\d)/.test(password) ? setNumber("green") : setNumber("blue");
        
        //Mínimo 8 caracteres
        password.length >= 8 ? setminChar("green") : setminChar("blue");

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

        let isValid = await validate("email", email);
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

        const isValid = await validate("password", password);
        console.log(isValid);


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

                <PasswordCaracters style={{marginTop: 10}}>
                    <p style={{color: upperCase}}> <IoMdCheckmarkCircleOutline style={{marginRight:1}}/> Letra Maiúscula </p>
                    <p style={{color: lowerCase}}>  <IoMdCheckmarkCircleOutline style={{marginRight:1}}/> Letra Minúscula </p>
                </PasswordCaracters>

                <PasswordCaracters>
                    <p style={{color: minChar}}> <IoMdCheckmarkCircleOutline style={{marginRight:1}}/> Mínimo 8 caractéres</p>
                    <p style={{color: number}}> <IoMdCheckmarkCircleOutline style={{marginRight:1}}/> Um número</p>
                </PasswordCaracters>
                
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
