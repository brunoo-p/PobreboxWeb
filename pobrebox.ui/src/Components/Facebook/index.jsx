import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { useHistory } from 'react-router';
import { FacebookSign, FbIcon } from './styles';
import api from '../../Services/api';

export default function Facebook(){

    let history = useHistory();

    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const responseFacebook = (response) => {
        console.log(response);
       
        if(response.accessToken){

            setName(response.name);
            setEmail(response.email);
            setPassword(response.id);
        }
        onLogin();
    }

    const onLogin  = async () => {

        console.log(name);
        console.log(email);
        console.log(password);
        
        const login = await api.post(`/user?email=${email}&password=${password}`);
        console.log("login", login);
        
        if(login.status === 400 || login.status === 500){
            alert("Houve um erro ao tentar login com este usuário");
            
        }else if(login.status === 200){


            localStorage.setItem('user', JSON.stringify(login.data));

            let storage = JSON.parse(localStorage.getItem('user'));
            console.log("storage", storage);

            history.push("/app");
        }else {
            await api.post("/user/register?", {name, email, password});
            onLogin();
        }
    
    }

    const componentClicked = () => { 
        setIsLoggedIn(true);
    }

    return (
        <FacebookSign>
            <FacebookLogin
                appId="1121109254980948"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
                cssClass="btnFacebook"
                icon={<FbIcon/>}
            />
        </FacebookSign>
    )
}



