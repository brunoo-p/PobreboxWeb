import React from 'react';
import { Wrapper, Content, DirectoryLogo } from './styles';

export default function DirectoryCard({ items, openModal, scrollDir }) {
    
    return (
        <Wrapper >
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
        </Wrapper>
    )
}
