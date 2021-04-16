import React  from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router';
import api from '../../Services/api';

import { GoogleSign } from './styles'

export default function Google() {

    let history = useHistory();
    let name;
    let email;
    let password
    const responseGoogle = (response) => {
        console.log(response);
        //console.log(response.profileObj);
       
        if(response.accessToken){

            name = response.profileObj.name;
            email = response.profileObj.email;
            password = response.profileObj.googleId;
            onLogin();
        }else{
            alert("Error");
        }
    }

    const onLogin  = async () => {

        console.log(name);
        console.log(email);
        console.log(password);
        
        const login = await api.post(`/user?email=${email}&password=${password}`);
        console.log("login", login);
        
        if(login.status === 400 || login.status === 500){
            alert("Houve um erro ao tentar o login com este usuário");
            
        }else if(login.status === 200){


            localStorage.setItem('user', JSON.stringify(login.data));

            let storage = JSON.parse(localStorage.getItem('user'));
            console.log("storage", storage);

            history.replace("/app");
        }else {
            await api.post("/user/register?", {name, email, password});
            onLogin();
        }
    
    }

    return (
        <GoogleSign>
            <GoogleLogin
                clientId="778419440289-hi28jer5jccaqid206pg6iqb470homn1.apps.googleusercontent.com"
                buttonText="Sign In"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                theme="dark"
                />
        </GoogleSign>
    )
}
