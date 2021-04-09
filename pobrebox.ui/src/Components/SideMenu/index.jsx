import React, {useEffect, useState } from 'react'
import { Container } from './styles';

export default function SideMenu({ openForm, children }) {
    
    const [ scrollValue, setScrollValue ] = useState(0);
    const [ isActive, setIsActive ]  = useState(false);
    
    //--> Set Scroll-Y value 
    useEffect(() => {
        function onScroll(){
            setScrollValue(window.scrollY);
            setIsActive(false);
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])
    //<--
    
    //--> Open side form
    const setClass = [
        isActive ? 'open' : '',
        openForm ? 'open' : '',
        scrollValue <= 300 ? 'scrollOpen' : ''
    ];

    const className = setClass.join(' ').trim();
    //<--
    
    return (
        <Container className= {className}>{children}</Container>
    )
}
