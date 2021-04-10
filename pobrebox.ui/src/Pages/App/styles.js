import styled from 'styled-components';
import {GoFileDirectory} from 'react-icons/go';
import { BiRightArrowCircle, BiLeftArrowCircle } from 'react-icons/bi';
import { TiFolderAdd } from 'react-icons/ti';
import download from '../../Assets/saved.jpg';
import fundo from '../../Assets/fundo.png';

export const Aside = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 100vh;
    background: url(${fundo});
    background-repeat: no-repeat;
    background-size: cover;
    font-family: ${({ theme }) => theme.font.fontFamily};
    overflow: hidden;
    
    .inputDirectory{
        position: absolute;  
        display: flex;
        width: 20px;
        height: 20px;
    
        padding: 10px;
        border-radius: 50%;
        right: 0;
        opacity: 0;
        margin-right: 50px;
        margin-top: -0.7%;
        transition: all 0.5s ease-out;
    }
    .add{
        position: absolute;  
        display: flex;
        z-index: 1;
        width: 122px;
        height: 20px;
    
        right: 0;
        margin-right: 80px;
        margin-top: -0.35%;
        transition: all 0.5s ease-out;
        opacity: 1;
        background: #fff;
        border: 1px solid transparent;
        border-radius: 10px;
        padding: 7px;
        font-size: 14px;
        font-weight: 700;
        color: ${({ theme }) => theme.font.color};
        
        :focus{
            border: 0 none;
            background: rgba(245,245,249, 0.8);
            border: 1px solid rgba(255, 234, 167,0.8);
            outline: none;
        }
    }
`;

export const Padlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
export const Wrapper = styled.div`
    display: flex;
    width: 90vw;
    width: 89.4%;
    margin: 1% 5%;
    height: 140px;
    background-color: rgba(8,8,8,0.3);
    border-radius: 20px;
    align-items: center;
    padding: 5px;
    list-style: none;

`;

export const AddDirectory = styled(TiFolderAdd)`
    position: absolute;  
    display: flex;
    width: 25px;
    height: 25px;

    padding: 10px;
    border-radius: 50%;
    right: 3.5%;
    margin-top: -0.7%;
    cursor: pointer;

    transform: scale(0.94);
    transition: 0.3s ease-out;

    background: rgba(255, 234, 167);
    opacity: 0.6;
    fill: #218c46;
    
    
    :hover{
        transform: scale(1);
        transition: 0.3s ease-out;
        opacity: 1;
    }
    :focus{
        background: rgba(255, 234, 167);
    }
    
`;
export const ContentModal = styled.div`
    width: 90%;
    flex-direction: column;
    background: white;
    align-items: center;
    border-radius: 10px;
    overflow-x: hidden;
    transition: 0,5s ease-out;
    opacity: 0.92;

    animation: slider linear 1.5s ;

    @keyframes slider {
        0%   { transform: translateX(-110%);  background: rgba(4,4,4,.65);}
        50%  { transform: translateX(0);     }
        70%  { transform: translateX(10%);   }
        100% { transform: translateX(0);     }
    }
    

    h1{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        font-size: 21px;
        color: ${({ theme }) => theme.font.color};

    }
    .content{
        overflow-x: hidden;
        transition: 0.5s ease-out;

        :hover{
            MoveCardToLeft {
                opacity: 1;
            }
            MoveCardToRight {
                opacity: 1;
            }
        }
        
    
        h2{
            font-size: 15px;
            padding: 5px;
            margin-left: 20px;
            background: rgba(14,140,180,.25);
            border-radius: 10px;

            @media (min-width: 600px){
                font-size: 18px;
            }
        }
    }
`;

export const MoveCardsToLeft = styled(BiLeftArrowCircle)`
    position: absolute;
    z-index: 5;
    width: 25px;
    height: 88px;
    display: flex;

    align-items: center;
    justify-content: center;

    fill: white;
    border-radius: 10px;
    background: rgba(5,5,5,.62);
    cursor: pointer;
    opacity: 0.3;
    transition: 0.3s ease-in;

    :hover{
        opacity: 1;
    }
`;

export const MoveCardsToRight = styled(BiRightArrowCircle)`
    position: absolute;
    z-index: 5;
    width: 25px;
    height: 88px;
    display: flex;

    align-items: center;
    justify-content: center;

    right: 14.5%;
    fill: white;
    border-radius: 10px;
    background: rgba(5,5,5,.62);
    cursor: pointer;
    opacity: 0.3;
    transition: 0.3s ease-in;

    :hover{
        opacity: 1;
    }
`;

export const FileDB = styled.div`
    display: inline-block;
    width: 100px;
    height: 80px;
    align-items: center;
    justify-content: center;
    padding: 4px;
    
    

    .btnExclude{
        z-index: 2;
        display: flex;
        position: relative;
        width: 22px;
        height: 20px;

        background: #e55039;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        margin-bottom: -18px;

        font-weight: 900;
        color: white;
        
        transform: scale(0.9);
        transition: 0.1s ease-in;
        
        :hover{
            text-decoration: none;
            transform: scale(1.05);
        }
        :focus{
            outline: none;
        }
    }
    h3{
        font-size: 14px;
        margin-left: 7px;
        font-weight: 700;
        max-width: 15ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const ImageModal = styled.div`
    width: 80%;
    height: 80%;
    transform: scale(0.97);
    transition: 0.2s ease-out;
    cursor: pointer;

    :hover{
        transform: scale(1);
        background: url(${download});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.7;
        
    }
    
    border: 1px solid ${({theme}) => theme.font.color};
    border-radius: 10px;

    background-image: url(${(props) => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

`;

export const Content = styled.div`

    display: inline-block;
    max-width: 110px;
    width: 100%;
    height: 80px;
    transform: scale(0.95);
    transition: 0.2s ease-in;
    margin: 0px;
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

export const Skeleton = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: black;
`;
