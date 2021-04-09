import styled from 'styled-components';

export const Container = styled.div`
    z-index: 10;
    position: fixed;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;


    background: ${({ theme }) => theme.colors.tertiaryColor};

    @media (min-width: 1024px)
    {
        width: calc(100% / 3);
        box-Shadow: -7px 0 5px -6px rgba(0,0,0,0.075);
    }

    @media (min-width: 1440px)
    {
        widht: calc(480px + ((100vw -  1440px) / 2));
    }

    transform: translateX(100%);
    transition: all 0.5s ease-out;

    &.open{
        transform: translateX(0);
    }
    @media (min-width: 1024px)
    {
        &.scrollOpen{
            transform: translateX(0);
        }

        &.scrollOpen .action--close{
            display: none;
        }
    }
`;