import React, { useState } from 'react'
import { Container, Content, Form, FileAdd } from './styles';
import filesize from 'filesize';
import { Preview } from '..';


export default function BodyApp({items}) {
    const initialState = {
        idUser: '',
        docName:  '--',
        mimeType: '',
        content: "",
        directory: "",
        size: 0,
        preview: ''
    };

    const [uploadFile, setUploadFile ] = useState(initialState);
    const [ nameFile, setNameFile ] = useState("");

    //--> Set File Input
    const onChange = async ({target}) => {
        
        let files = target.files[0];
        
        if(files !== null){ 
            let name = files.name;

            setNameFile(name);
            
            let mimeType = name.substring(name.lastIndexOf("."));
            
        
            let userLogged = JSON.parse(localStorage.getItem('user'));
            console.log(userLogged);
            let userId = userLogged.id;
            console.log("antes", userId);
            
            if(userId.length > 4 ){

                userId = userId.substring(userId.length -4 , userId.length);
                
                userId = Number(userId);
                console.log("depois", userId);
            }

            const uploadedFiles = {
                idUser: userId,
                docName: nameFile,
                mimeType: mimeType,
                content: files,
                directory: "",
                size: filesize(files.size),
                preview: URL.createObjectURL(files)
            };
            
            console.log(uploadedFiles);
            
            setUploadFile(uploadedFiles);
        }    
    };
    //<--

    return (
        <Container>
            <Content>
            
                <Form >
                    <input type="file" id="file" onChange={onChange} className="file"/>
                    <label htmlFor="file"> <FileAdd/> </label>
                </Form>

                <Preview
                    file={uploadFile}
                    setFile={setUploadFile}
                    items={items}
                    initialState={initialState}
                    setNameFile={setNameFile}
                    nameFile={nameFile}
                />
            
            </Content>
        </Container>
    )
}
