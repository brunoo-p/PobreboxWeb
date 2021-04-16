import styled from 'styled-components';
import { GiBoxTrap } from 'react-icons/gi';

export const Container = styled.div`
    font-family: ${({ theme }) => theme.font.fontFamily};
    color: ${({ theme }) => theme.font.color};
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1024px)
    {
        max-width: 480px;
    }
`;

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 16px 32px;
    min-height: 61px;

    h1{
        display: flex;
        align-items: center;

        span{
            margin-left: 10px;
            font-size: 29px;
        }
    }

    button{
        background: none;
        border: none;
        font-weight: bold;
        font-size: 10px;
        outline: 0;
        cursor: pointer;
    }

    @media (min-width: 1024px)
    {
        h1{
            display: none;
        }
    }
`;

export const PobreboxLogo = styled(GiBoxTrap)`
    width: 35px;
    height: 32px;
    fill: ${({ theme }) => theme.colors.blue};
`;


export const Form = styled.form`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;

    padding: 0 32px;
    max-width: 480px;
    margin: 0 auto;

    
    .title{
        font-size: 25px;
        font-weight: 500;
        cursor: default;
    }
    .subtitle{
        font-size: 12px;
        margin-top: 5px;
        font-weight: 700;
        cursor: pointer;
        color: ${({theme}) => theme.colors.blue};
    }
    input{
        background: ${({ theme }) => theme.colors.tertiaryColor};
        border:1px solid ${({ theme }) => theme.colors.borderColor};
        padding: 13px 18px;
        font-size: 15px;
        font-weight: 700;

        border-radius: 8px;
        margin-top: 18px;

        :focus{
            outline: none;
            border: 1px solid ${({ theme }) => theme.colors.blue};
        }
    }

    .forgotPass{
        margin-top: 8px;
        font-size: 12px;
        cursor: pointer;
        :hover{
            opacity: 0.8;
        }
    }

    button{
        margin-top: 18px;
        padding: 13px 18px;
        font-size: 16px;
        background-color: ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.tertiaryColor};
        border: none;
        cursor: pointer;
        border-radius: 10px;

        :hover{
            opacity: 0.7;
        }
        :focus{
            outline:none;
        }
    }

    .otherLogin{
        display: flex;
        width: 100%;
        height: 25px;
        padding: 5px;
        margin-top: 3px;
        align-items: center;
        justify-content: space-between;
    }
    .or{

        display: flex;
        width: 100%;
        height: 25px;
        padding: 10px;
        margin-top: 15px;
        align-items: center;
        justify-content: center;
        cursor: default;

        p{

            font-size: 14px;
            margin-right: 10%;
            padding: 8px;

            color: ${({ theme }) => theme.font.color};
            border-radius: 50px;
            border: 1px solid rgba(16,126,216,0.3);

        }
    }
    p{
        display: flex;
        justify-content: center;
        font-size: 10px;
        font-weight: 700;
        margin-bottom: 15px;
        color: ${({ theme }) => theme.colors.blue};
        align-items: center;

        .check{
          cursor: pointer;
        }
        .terms{
            font-size: 13px;
            opacity: 0.65;
            margin-top: 15px;
            cursor: default;

            a{
                color: ${({ theme }) => theme.colors.blue};

                :hover{
                    opacity: 1;
                }
            }
        }
    }
`;

export const PasswordCaracters = styled.div`
    display: flex;
    align-tems: center;
    justify-content: space-around;
     
    p{
        font-size: 12px;
        justify-content: space-around;
        cursor: default;
        transition: 0.2s ease-out;
    }
    
    
`;

export const Arrow = styled.div`
    cursor: pointer;
    width: 200px;
    height: 40px;
`;