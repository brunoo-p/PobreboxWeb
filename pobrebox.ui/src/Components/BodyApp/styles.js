import styled from 'styled-components';
import {FiFilePlus} from 'react-icons/fi';

export const Container = styled.div`
    display: flex;
    width: 90%;
    height: 60%;
    margin: 1% 5%;
    border-radius: 20px;
    
    background: ${({ theme }) => theme.colors.tertiaryColor};
    opacity: 0.95;
    filter: drop-shadow(4px 4px 4px white);
    border: 1px solid white;
    max-width: 1440px;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    margin: 0% 1%;
    align-items: center;
    justify-content: space-around;
    
`;

export const Form = styled.form`
    display: flex;
    width: 10%;
    padding: 15%;
    flex-direction:column;
    align-items: center;
    padding: 6%;
    background: ${({ theme }) => theme.colors.secondaryColor};
    border-radius: 8px;

    
    input[type='file'] {
        display: none
      }
      
    
    label {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5%;
    }

    .btnSubmit{
        display: none;
        align-items: center;
        justify-content: center;
        width: 30%;
        padding: 8px;
        font-weight: 700;
        border-radius: 7px;
        border: 2px solid white;
        max-width: 300px;
        background: ${({ theme }) => theme.colors.tertiaryColor};
        cursor: pointer;

        :hover{
            background: rgba(39, 60, 87, 0.4);
            color: ${({ theme}) => theme.colors.blue};
        }
    }

    @media (min-width: 1024px){
        width: 20%;
    }
`;

export const FileAdd = styled(FiFilePlus)`
    width:80px;
    height: 80px;
    padding: 4px;
    transform: scale(0.9);
    border-radius: 10px;
    cursor: pointer;
    color: ${({theme }) => theme.colors.primaryColor};
    transition: all 0.6s ease-in;
    margin: 5px;
    

    :hover{
        background: rgba(39, 60, 117,0.2);
        fill: rgba(39, 60, 117,0.18);
        color: ${({theme }) => theme.colors.blue};
        transform: scale(1);
        
        transition: all 0.6s ease-in;
    }

`;