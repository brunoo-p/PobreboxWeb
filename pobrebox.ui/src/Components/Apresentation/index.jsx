import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Portal} from '..';
import Lottie from 'react-lottie';
import avatarDefault from '../../Assets/avatar.png';
import { Container, Content, PobreboxLogo, ImageUser, Locked } from './styles';
import locked from '../../Assets/Lotties/blocked.json';

export default function Apresentation() {

    let storage;
    const history = useHistory();
    const [ avatar, setAvatar ] = useState();
    const [ name, setName ] = useState("");
    const [blocked, setBlocked ] = useState(false);
    
    //--> Get storage to later add user interaction 
    useEffect(() => {
        storage = JSON.parse(localStorage.getItem('user'));
        setName(storage.name);

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
        setBlocked(true);
        
        setTimeout(() => {
            localStorage.removeItem('user');
            history.push("/");
        }, 3700)
    }
    //<--

    //--> Lottie default options
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: locked,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    }
    //<--

    return (
        <>
            <Container>
                { blocked &&
                    <Portal>
                        
                        <Locked >
                            <Lottie options ={defaultOptions} width={500} height={500}/>
                        </Locked>
                        
                    </Portal>
                }
                
                <Content>
                    <h1>
                        <PobreboxLogo/>
                        <span> Pobrebox </span>
                    </h1>

                        <label className="saudation"> Olá, {name} </label>

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
