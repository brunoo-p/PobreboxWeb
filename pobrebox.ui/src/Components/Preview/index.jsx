import React, { useEffect, useState } from 'react'
import { Container, Content, ImagePreview, Details, Form } from './styles';
import api from '../../Services/api';
import settingPreview from '../../Assets/settingPreview.png';


export default function Preview({initialState, file, setFile, items, setNameFile, nameFile}) {

    const [ changeDirectory, setChangeDirectory ] = useState("Escolha");
    const [ changeNameFile, setChangeNameFile ] = useState(false);
    const [preview, setPreview ] = useState();
    const [disableSubmit, setDisableSubmit ] = useState(true);

    //--> Set default Name File
    useEffect(() => {
        setNameFile(nameFile);

    }, [nameFile]);
    //<--

    useEffect(() => {
        const el = document.querySelector("#image");

        el.addEventListener("mousemove", (e) => {
        el.style.setProperty('--x', -e.offsetX + "px");
        el.style.setProperty('--y', -e.offsetY + "px");
        console.log(e.offsetY);
        console.log(e.offsetX);
        });
    }, []);

    //--> Filter mimeTypes for Preview
    let isImage;

    useEffect(() => {
        isImage = false;
        let mimeType = file.mimeType.toLowerCase();

        let allowMimeTypes = ".png, .jpg, .jpeg, .gif, .bmp, .svg, .ico";
        
        isImage = allowMimeTypes.includes(mimeType);

        if(isImage) { setPreview(file.preview); }
        else{ setPreview(settingPreview); }
        
    },[file]);
    //<--


    //--> Set className for input change document name 
    //change: show | hiddenInput: hidden
    const className = changeNameFile ? 'change' : 'hiddenInput';

    const handleChangeName = () => {
        setChangeNameFile(!changeNameFile);
        
        if(!changeNameFile)
        {
            document.getElementById('changeNameFile').value= null
        }
    }

    const handleNameFile = (event) => {
        setNameFile(event.target.value);
        if(event.keyCode === 13){
            setChangeNameFile(false);
        };
    }
    //<--


    //--> Create Object Form Data
    
    const onSubmit = async (event) => {
        event.preventDefault();
        
        if(!nameFile.includes(file.mimeType)){
            nameFile += file.mimeType;
        }
        

        let data = new FormData();
        
        data.append('idUser', file.idUser);
        data.append('docName', nameFile);
        data.append('directory', changeDirectory);
        data.append('imagePath', file.content);

        
        postFile(data);
    }
    //<--

    //--> Request POST
    async function postFile(data){

        const response = await api.post('/doc', data);
        
        response.status !== 400 
            ?   alert("Documento adicionado com sucesso!")   
            :   alert("Documento inválido.");

        setFile(initialState);
        setNameFile('');
    }
    //<--


    //--> Set Directory
    const handleDirectory = ({target}) => {
        setChangeDirectory(target.value);
        setDisableSubmit(false);
    }
    //<--
    
    return (
        <Container>
            <Content>
                
                <Details>
                    <h5 onClick={handleChangeName} disabled={!file ? true : false }>{!changeNameFile ? 'Alterar Nome' : 'Salvar Nome'}</h5>
                    <h2>Name: {nameFile}</h2>
                    <span> Size: {file.size} </span>
                </Details>
                
                <ImagePreview src= {preview} id="image"/>
                
                <div className="settingFile">
                    
                    <input type="text" id= "changeNameFile" placeholder="Novo Nome do Arquivo" className={className} onKeyUp={handleNameFile} disabled={!changeNameFile ? true : false } autoFocus/>
                    
                    <p>Escolha o diretório:</p>
                    
                    <select value={changeDirectory} onChange={handleDirectory} className="selectDirectory">
                        {items.map((item, index) => (
                            <option className= "selectOption" key={index} >{item.text}</option>
                        ))}
                        <option className= "selectOption">Escolha</option>
                    </select>

                    <Form onSubmit={onSubmit}>
                        <button type="submit" className="btnSubmit" value= "Enviar" disabled={disableSubmit}>Enviar</button>
                    </Form>

                </div>

            </Content>
        </Container>
    )
}
