import React from 'react';
import { Wrapper } from './styles';

export default function DirectoryCard({children, openModal, items, setDirectory}) {
    
    return (
        <Wrapper >
             {children}
        </Wrapper>
    )
}
