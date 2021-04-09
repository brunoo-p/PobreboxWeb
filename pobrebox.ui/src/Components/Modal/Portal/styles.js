import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(4,4,4,.8);
`;

export const Content = styled.div`
    z-index: 9999;
    width: 90%;
    height: 98%;
    margin: 4%;
    border-radius: 10px;
    
    background: #fff;
    transform: translateX(0);
    transition: 0.5s ease-out;
     
    &.close{
        width: 60%;
        height: 60%;
        transition: 0.35s ease-in;
        transform: translateX(170%);
    }
    
`;