import styled from 'styled-components';
import { GiBoxTrap } from 'react-icons/gi';

export const Container = styled.div`
    display: flex;
    //background: ${({theme}) => theme.colors.quaternaryColor};
    background: linear-gradient(48deg,rgb(34,47,92, 0.9), rgba(2,2,2,.7) 40.26%);
    filter: drop-shadow(1px 1px 88px rgba(245,245,245,.7));
    opacity: 0.99;
    width: 100%;
    height: auto;
    max-width: 1440px;
`;

export const Locked = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    
`;

export const Content = styled.section`
    z-index: 3;
    width: 85%;
    margin-left: 20%;
    color: ${({ theme }) => theme.colors.secondaryColor};
    box-shadow: 0px 2px 18px rgb(34,47,62, 0.9);
    display: flex;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;

    max-width: 1440px;
    margin: 0 auto;
    padding: 10px;

    h1{
        display: flex;
        align-items: center;
        
        span{
            margin-left: 10px;
            font-size: 22px;
            font-weight: 600;
            cursor: default;
        }

        @media (min-width: 700px){
            span{
                font-size: 29px;
            }
            
        }

    }
    .saudation{
        display: none;
        position: absolute;
        

        @media (min-width: 1024px){
            display: flex;
            right: 13%;
        }
    }

    .userInfo{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        
        p{
            font-size: 15px;
            color: white;
            cursor: pointer;
            letter-spacing: 2px;
            transition: all 0.3s linear;
            margin-top: 3px;
            :hover{
                text-decoration: underline white;
                color: red;
            }
        }

        input[type='file'] {
            display: none
        }
    }
`;

export const PobreboxLogo = styled(GiBoxTrap)`
    
    display: none;
    width: 42px;
    height: 42px;
    fill: ${({ theme }) => theme.colors.tertiaryColor};

    @media (min-width: 700px){
        display: flex;
    }
`;

export const ImageUser = styled.div`
    display: flex;    
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    background: url(${(props) => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;


    :hover{
        opacity: 0.7;
    }
`;