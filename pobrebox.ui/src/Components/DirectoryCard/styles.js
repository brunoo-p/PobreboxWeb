import styled from 'styled-components';
import {GoFileDirectory} from 'react-icons/go';

export const Wrapper = styled.div`
    display: flex;
    width: 95%;
    margin: 0;
    justify-content: start;
    overflow: hidden;
    max-width: 1440px;
    box-sizing: border-box;

    .contentDirectory{
        display: flex;
        flex: none;
        margin: 0px;
        overflow-x: hidden;
        height: 100%;
        padding: 5px;
        justify-content: start;
        transition: 0.3s ease-out;
        
        
        @media (min-width: 1024px){
            justify-content: space-around;
        }
    }
    
`;

export const Content = styled.div`

    display: inline-block;
    max-width: 110px;
    width: 100%;
    height: 80px;
    transform: scale(0.95);
    transition: 0.2s ease-in;
    margin: 20px;
    perspective: 1200px;
    
    padding: 20px;
    background: #fff;
    
    
    border-radius: 20px;
    border: 2px solid transparent;
    cursor: pointer;
    
    h3{
        display: flex;
        margin-top: -5px;
        justify-content: center;
    }
    span{
        display: flex;
        justify-content: center;
        margin-bottom: 2px;
    }
    p{ 
        display: flex;
        justify-content: center;
    }

    :hover{
        transform: scale(1);
        transition: 0.2s ease-in
    }


    @media (min-width: 1024px){
        max-width: 200px;
        padding: 20px;
        margin: 0px;
    }

    @media (max-width: 550px){
        max-width: 70px;
        padding: 10px;
        
        p{display: none;}
    }

    

    span{
        padding: 4px;
        font-weight: 900;
        font-size: 12px;
    }
    p{
        margin-top: 5px;
        font-size: 9px;
        color: ${({theme}) => theme.font.color};
    }

    

    @media (min-width: 1024px){

        span{
            font-size: 16px;
        }
        p{
            font-size: 10px;
        }
    }
`;

export const DirectoryLogo = styled(GoFileDirectory)`
    width: 30px;
    height: 28px;
    fill: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 50%;
    padding: 5px;
    background: rgba(116, 185, 255,.6);
`;