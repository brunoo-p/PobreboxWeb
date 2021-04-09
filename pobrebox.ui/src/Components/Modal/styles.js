import styled from 'styled-components';
import fundo from  '../../Assets/flayer.jpg';

export const Container = styled.div`
    display: flex;
    width: 96%;
    height: 100%;
    
    justify-content: space-around;   
    border-radius: 10px;
    margin: 2%;
    background: url(${fundo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    button{
        height: 30px;
        padding: 10px;
        border: none;
        font-weight: 700;
        cursor:pointer;
        background: none;

        &:hover{
            text-decoration: underline red;
        }
        &:focus{
            outline: none;
        }
        
    }
    
`;