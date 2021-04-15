import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(4,4,4,.8);
    z-index: 999;
`;

export const Content = styled.div`
    z-index: 9999;
    width: 90%;
    height: 98%;
    margin: 4%;
    border-radius: 10px;
    
    background: #fff;
    transform: translateX(0);
    transition: 0.5s ease-out;
    

    &.close{
        transform: scale(0);
        animation 0.7s show ;

        @keyframes hidden {
            from{
                transform:scale(1);
            }
            to{
                transform: scale(0);
            }
        }
    }

    transform: scale(1);
    animation 0.7s show ;

    @keyframes show {
        from{
            transform:scale(0);
        }
        to{
            transform: scale(1);
        }
    }
    
`;