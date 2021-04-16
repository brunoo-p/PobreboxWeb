import React, { useEffect, useState } from 'react';
import { Aside, Wrapper, ContentModal, MoveCardsToLeft, MoveCardsToRight, FileDB, ImageModal, Content, DirectoryLogo, Padlock, AddDirectory} from './styles';
import { Apresentation, BodyApp, DirectoryCard, Modal, Portal} from '../../Components';
import api from '../../Services/api';
import { base64ToArrayBuffer, createAndDownloadBlobFile } from '../../Services/ToArrayBuffer';

import disquete from '../../Assets/disquete.jpeg';

import Lottie from 'react-lottie';
import loadingPacMan from '../../Assets/Lotties/loading.json';
import padlock from '../../Assets/Lotties/padlock.json';
import clipFile from '../../Assets/Lotties/clipFile.json';


export default function Application() {
    const defaultDirectories = [
        { id: 0, text:"Viagem" },
        { id: 1, text: "Files" },
        { id: 2, text: "Festa" }
    ]
    
    const [showModal, setShowModal ] = useState(false);
    const [directory, setDirectory ] = useState("");
    const [items, setItems ] = useState(defaultDirectories);
    const [documents, setDocuments ] = useState("");
    const [search, setSearch ] = useState(false);
    const [login, setLogin ] = useState(true);
    const [scrollX, setScrollX ] = useState(21);
    const [scrollDir, setScrollDir ] = useState(21);
    const [addDirectory, setAddDirectory ] = useState(false);

    //Default Directories
    useEffect(() => {
        setItems(defaultDirectories);
        
    }, []);
    //<--

    //Set Time to hidden Portal with Lottie login
    useEffect(() => {
        let time = setTimeout(() => {
            setLogin(false);
        }, 3700);

        return(() => {
            clearTimeout(time);
        })
    })
    //<--

    //--> Request files by directory
    useEffect(() => {
        (async function getDocs(){
            if(search){
                let storage = JSON.parse(localStorage.getItem('user'));
                
                const response = await api.get(`/doc/${storage.id}/${directory}`);

                await verifyContent(response);
            }
        }) ();

        return (() => {
            setSearch(false);
        })
    
    }, [search, documents, directory]);
    //<--

    
    //--> Checking and filtering request response
    const nenhumArquivo = 203;
    const falhaRequisicao = [ 405, 500 ];

    const verifyContent = async (response) => {
        console.log(response.status);

        if(response.status === nenhumArquivo){
            setDocuments({docName: "Nenhum arquivo Encontrado. Aproveite para guardar alguns."});
            
            

        }else if(response.status === falhaRequisicao[0] || response.status === falhaRequisicao[1]){
            setDocuments({docName: "Desculpe, tivemos um problema para carregar seus arquivos."});

        }else{

            console.log(response);
            const files = response.data.map( file => {

                const {id, idUser, docName, directory, content} = file;
                return {id, idUser, docName, directory, content };
    
            });

            setDocuments(files);
        }
    }
    //<--


    //--> Handle Modal
    const openModal = (dir) => {
        setShowModal(true);
        setDirectory(dir);
        setSearch(true);
        setScrollX(21);
        
    }

    const closeModal = () => {
        setShowModal(false);

        setDocuments(documents);
    }
    //<--

    //--> Set flag for file deleted in the database 
    const handleExclude = async (id) => {
        await api.delete(`/doc/${id}`);
        
        setDocuments(documents);
        setSearch(true);
    }
    //<--

    //--> Config Lottie Files
    const setLottie = (loop, data) => {
        const options = {
            loop: loop,
            autoplay: true,
            animationData: data,
            rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
            }
        }
        return options;
    }
    //<--

    //--> SET new directory for files
    const className = addDirectory ? 'add' : 'inputDirectory';

    const handleAddDirectory = () => {
        setAddDirectory(!addDirectory);
    }

    const handleNameDir = (event) => {
        console.log(event);

        if(event.keyCode === 13){
            setItems([...items, {id: 3, text: event.target.value}]);
            setAddDirectory(false);

            document.getElementById('addDir').value= null
        }
    }
    //<--

    //--> Slide arrow for Carousel
    const handleMoveCardsToLeft = (type) => {
        
        if(type === "files"){
            let x = scrollX + Math.round(window.innerWidth / 2);
            if(x > 21) { x = 21 };

            setScrollX(x);
        }
        else if(type === "dir"){
            let x = scrollDir + Math.round(window.innerWidth / 2);
            if(x > 0) { x = 0 };

            setScrollDir(x);
            console.log(scrollDir);
        }
    }
    const handleMoveCardsToRight = (type) => {
        
        if(type === "files"){
            let x = scrollX - Math.round(window.innerWidth / 2);
            
            let listWidth = documents.length * 150;
            
            if((window.innerWidth - listWidth) > x) {
                x = (window.innerWidth - listWidth) - 80;
            }
            setScrollX(x);

        }else if(type === "dir"){
            let x = scrollDir - Math.round(window.innerWidth / 2);

            let listWidth = items.length * 400;
            
            if((400 - listWidth) > x) {
                x = (window.innerWidth - listWidth) - 400;
            }
            setScrollDir(x);
        }
        
    }
    //<--

    //--> Recover file from database
    const handleDownload = (idFile) => {
        let file = documents.filter(doc => ( doc.id === idFile ));

        let name = file[0].docName;

        const arrayBuffer = base64ToArrayBuffer(file[0].content); 
        createAndDownloadBlobFile (arrayBuffer, name);
        
    }
    //<--


    return (
        <Aside>
            {login &&
                <Portal>
                    
                    <Padlock >
                        <Lottie options ={setLottie(false, padlock)} width={300} height={300}/>
                    </Padlock>
                    
                </Portal>
            }

            <Apresentation/>

            <BodyApp
                setDirector={setDirectory}
                directory={directory}
                items={items}
            />
            
            {!showModal && <div> <input id="addDir" className={className} type="text" placeholder="Nome do diretório" onKeyDown={handleNameDir}/>
            <AddDirectory onClick={handleAddDirectory} style={{opacity: addDirectory && 1}}/></div> }
            
            <Wrapper>
            {showModal ?
            <Modal show={showModal} close={closeModal} directory={directory}>

                <ContentModal >
                    <h1> {directory} </h1>
                    {documents.length !== 0 && <MoveCardsToLeft onClick={() => handleMoveCardsToLeft("files")}/>}
                    {documents.length !== 0 && <MoveCardsToRight onClick={() => handleMoveCardsToRight("files")}/>}
                        
                        <div className='content' style={{width: documents.length > 0 ? documents.length * 150 : 250, marginLeft: scrollX}} >
                        
                        {documents && documents.length > 0 ? documents.map((doc, index) => (

                            <FileDB key={index} >
                                <button className= "btnExclude" title="Excluir" onClick={() => handleExclude(doc.id)}> X </button>
                                <ImageModal src={disquete} title="Recuperar" onClick={() => handleDownload(doc.id)}/>
                                <h3>{doc.docName}</h3>
                            </FileDB>
                        ))
                        
                            :    documents.docName !== undefined  ? <> <h2>{documents.docName}</h2> <Lottie options={setLottie(true, clipFile)} width={250} height={50}/> </>
                            
                            :   <Lottie 
                                    options={setLottie(true, loadingPacMan)}
                                    width={110}
                                    height={110}
                                />

                        }

                        </div>

                </ContentModal>
                
                    
            </Modal>
            :
            <>
                {items.length > 2 && <MoveCardsToLeft onClick={() => handleMoveCardsToLeft("dir")}/>}
                
                <DirectoryCard openModal={openModal} items={items} setDirectory={setDirectory}>

                        
                    <div className="contentDirectory" style={{width: items.length * 350, marginLeft: scrollDir}}>
                    
                    { items && items.map((item, index) => {
                        
                        return(
                            <ol key={index} >
                                <li >
                                    <Content onClick={() => openModal(item.text)} >
                                        <h3><DirectoryLogo/></h3>
                                        <span>{item.text}</span>
                                        <p>click para ver os arquivos salvos</p>
                                    </Content>
                                </li>
                            </ol>
                        )})
                    }
                    </div>
                </DirectoryCard>

                {items.length > 2 && <MoveCardsToRight onClick={() => handleMoveCardsToRight("dir")}/>}
            </>
            }
            </Wrapper>
        </Aside>
    )
}
