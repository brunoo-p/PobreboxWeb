import styled from 'styled-components';
import fundo from '../../Assets/flayer.jpg';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background: rgba(30,45,59,.9);
    justify-content: center;
    align-items: center;
    font-family: ${({theme}) => theme.font.fontFamily};


`;

export const Content = styled.div`
    display: flex;
    border-radius: 10px;
    width: 90vw;
    height: 90vh;
    justify-content: space-around;
    align-items: center;

    background: url(${fundo});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.9;

    section{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 75%;

        p{
            display: flex;
            position: relative;
            flex-direction: column;
            font-size: 30px;
            font-weight: 700;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            color: ${({theme}) => theme.colors.primaryColor};
        }
        
    }
`;

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 90%;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;

    .requestChange{
        width: 70%;
        height: 50%;
        max-width: 450px;  
        max-height: 300px;
        align-items: center;
        justify-content: space-evenly;

        border-radius: 15px;
        border: 3px solid rgba(145,145,145, 0.1);

        span{
            width: 80%;
            font-size: 18px;
        }
        input{
            padding: 10px;
            font-size: 16px;
            border-radius: 10px;
            border: 1px solid ${({ theme }) => theme.colors.borderColor};
            transition: 0.4s ease-out;
            
            :focus{
                transition: 0.4s ease-out;
                border: 1px solid ${({ theme }) => theme.colors.blue};
                background: rgba(40,140,200, 0.2);
                outline: none;
            }
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.font.color};
    align-items: center;
    justify-content: center;

    h2{
        display: flex;
        justify-content: center;
        padding: 8px;
        border-radius: 50px;
        border: 2px solid ${({theme}) => theme.colors.secondaryColor};
        margin-bottom: 20px;

        font-weight: 900;
        font-size: 16px;
        
        background: ${({theme}) => theme.colors.secondaryColor};
        opacity: 0.8;
        cursor: default;
        
    }

    input{
        padding: 10px;
        border-radius: 10px;
        border: none;
        font-size: 14px;
        font-weight: 700;
        margin-top: 5px;

        :focus{
            outline: none;
        }
    }

    .wrong{
        border: 1px double red;
        transition: 0.3s ease-out;
    }
    .right{
        border: 1px double green;
        transition: 0.3s ease-out;
    }
    
    .btnSubmit{
        width: 70%;
        cursor: pointer;
        border: 1px solid transparent;
        letter-spacing: 1px;
        transition: 0.3s ease-out;

        :hover{
            background: rgba(30,50,222, .7);
            border: 1px solid white;
            color: ${({theme}) => theme.colors.secondaryColor};
        }
        :focus{
            outline: none;
        }
    }
`;