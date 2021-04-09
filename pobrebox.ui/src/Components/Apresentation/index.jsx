import React, { useEffect, useState } from 'react';
//import { useUserForm } from '../../Context/SetUser';
import avatarDefault from '../../Assets/avatar.png';
import { Container, Content, PobreboxLogo, ImageUser } from './styles';
import { useHistory } from 'react-router-dom';

export default function Apresentation() {

    let storage;
    const history = useHistory();
    const [ avatar, setAvatar ] = useState();
    
    //--> Get storage to later add user interaction 
    useEffect(() => {
        storage = JSON.parse(localStorage.getItem('user'));
        console.log(storage);

    }, []);
    //<--

    //--> Change avatar image
    const handleAvatar = ({target}) => {
        let file = target.files[0];
        if(file !== null){
            console.warn(file);
            let preview;
            preview = URL.createObjectURL(file);
            console.log(preview);
            setAvatar(preview);
        }
    }
    //<--

    //--> Remove localStorage and Exit
    const handleExit = () => {
        setTimeout(() => {
            localStorage.removeItem('user');
            history.push("/");
        }, 2000)
        
        
    }

    return (
        <>
            <Container>
                
                <Content>
                    <h1>
                        <PobreboxLogo/>
                        <span> Pobrebox </span>
                    </h1>

                    <div className="userInfo">

                        <label htmlFor="fileAvatar"> <ImageUser src={avatar? avatar : avatarDefault} title="Alterar Imagem"/> </label>
                        <input type="file" id='fileAvatar' onChange={handleAvatar}/>
                        <p onClick={handleExit}>Sair</p>
                        
                    </div>

               </Content>
            </Container>
        </>
    )
}
