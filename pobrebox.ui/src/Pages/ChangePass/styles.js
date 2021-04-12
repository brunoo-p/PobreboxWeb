import styled from 'styled-components';
import fundo from '../../Assets/flayer.jpg';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background: rgba(30,45,59,.9);
    color: ${({ theme }) => theme.font.color};
    justify-content: center;
    align-items: center;
    font-family: ${({theme}) => theme.font.fontFamily};


`;

export const Content = styled.div`
    display: flex;
    border-radius: 10px;
    width: 90vw;
    height: 90vh;
    align-items: center;
    flex-direction: column;

    background: url(${fundo});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.9;
    
    .backHome{
        z-index: 1;
        display: flex;
        width: 150px;
        position: absolute;
        margin-top: 40px;
        background: none;
        border: none;
        
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;

        :hover{
            color: ${({ theme }) => theme.colors.primaryColor};
        }
        :focus{
            outline: none;

        }

    }

    section{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 50%;
        max-height: 70%;
        background: rgba(55,34,17,0.1);
        padding: 15px;
        border-radius: 10px;

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
    width: 50%;
    height: 90%;
    
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
    border-radius: 10px;
    transform: scale(1);
    animation 0.8s show ;

        @keyframes show {
            from{
                transform:scale(0);
            }
            to{
                transform: scale(1);
            }
        }

    .requestChange{
        width: 70%;
        height: 50%;
        max-width: 450px;  
        max-height: 300px;
        
        align-items: center;
        justify-content: space-evenly;
        
        border-radius: 15px;
        border: 3px solid rgba(145,145,145, 0.1);
        
        transform: scale(1);

        animation 0.8s show ;

        @keyframes show {
            from{
                transform:scale(0);
            }
            to{
                transform: scale(1);
            }
        }

        span{
            display: flex;
            width: 80%;
            align-items:center;
            justify-content: center;
            
            font-size: 18px;
        }
        input{
            display: flex;
            padding: 10px;
            
            font-size: 16px;
            font-weight: 700;
            
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

        .btnSubmit{
            cursor: pointer;
            :hover{
                background: rgba(40,140,200, 0.4);
                border: 1px solid ${({ theme }) => theme.colors.blue};
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