import styled from 'styled-components';
import { GiBoxTrap } from 'react-icons/gi'

export const Container = styled.div`
    font-family: ${({ theme }) => theme.font.fontFamily};
    --padding-top: 100px;
    --padding-bottom: 100px;
    --heading-font-size: 32px;
    --content-width: 70%;

    &.blue {
        --bg-color: ${({theme}) => theme.colors.primaryColor};
        --text-color: ${({ theme }) => theme.colors.tertiaryColor};
        --logo-color: ${({ theme }) => theme.colors.secondaryColor}; 
    }
    &.beige {
        --bg-color: ${({theme}) => theme.colors.secondaryColor};
        --text-color: ${({ theme }) => theme.colors.quaternarycolor};
        --logo-color: ${({ theme }) => theme.colors.primaryColor}; 
    }
    &.white {
        --bg-color: ${({theme}) => theme.colors.tertiaryColor};
        --text-color: ${({ theme }) => theme.colors.quaternarycolor};
        --logo-color: ${({ theme }) => theme.colors.blue}; 
    }
    &.black {
        --bg-color: ${({theme}) => theme.colors.quaternaryColor};
        --text-color: ${({ theme }) => theme.colors.tertiaryColor};
        --logo-color: ${({ theme }) => theme.colors.blue}; 
    }
    
    &:first-child {
        --padding-top: 130px;
        --heading-font-size: 51px;

        @media (min-width: 1024px) {
            --content-width: 50%;
            --heading-font-size: 71px;
        }
    }

    background: var(--bg-color);
    position: relative;
`;

export const HeaderWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    clip: rect(auto, auto, auto, auto);
`;

export const Header = styled.header`
    z-index: 3;
    background: var(--bg-color);

    display: flex;
    justify-content: space-between;

    max-width: 1440px;
    margin: 0 auto;
    padding: 16px 32px;

    h1{
        display: flex;
        align-items: center;

        span{
            color: var(--text-color);
            margin-left: 10px;
            font-size: 29px;
            font-weight: 600;
        }
    }
    button{
        color: var(--text-color);
        background: none;
        border: none;
        outline: none;
        font-size: 16px;
        cursor: pointer;
        font-weight: 500;

        &:hover{
            text-decoration: underline;
        }
    }
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

`;

export const PobreboxLogo = styled(GiBoxTrap)`
    width: 46px;
    height: 42px;
    fill: var(--logo-color);
`;

export const Content = styled.div`
    z-index: 2;
    positon: realative;
    max-width: 1440px;
    margin: 0 auto;

    >h2 {
        font-size: var(--heading-font-size);
        color: var(--logo-color);
        max-width: var(--content-width);
    }

    p {
      margin-top: 20px;
      line-height: 1.6;
      font-size: 18px;
      color: var(--text-color);
      max-width: var(--content-width);  
    }

    padding: var(--padding-top) 32px var(--padding-bottom);
`;
