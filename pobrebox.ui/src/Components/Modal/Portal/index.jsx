import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Content } from './styles';

export default function Portal({children}) {

    const [ className, setClassName ] = useState("");
   
    //-->Time to hidden first background portal
    useEffect(() => {

        let time = setTimeout(() => {
            setClassName("close");
            
            
        }, 3000)
        return () => {
            clearTimeout(time);
        }
    }, []);
    //<--

    const modal = document.getElementById('portal');

    return ReactDOM.createPortal(
        <Container>
            <Content className={className}>
                {children}
            </Content>
        </Container>,
        modal
    )

}
