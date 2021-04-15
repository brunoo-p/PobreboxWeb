import styled from 'styled-components';

export const Container = styled.div`
    font-family: ${({ theme }) => theme.font.fontFamily};
    flex: 1;
    height: 90%;
    align-items: center;
    border-left: 2px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 10px;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    height: 80%;
    align-items:center;
    flex-direction: column;

    .settingFile{
        display:flex;
        flex-direction: column;
        width: 60%;
        padding: 10px;
        

        .hiddenInput{
            opacity: 0;
            max-width: 200px;
            border-bottom: 3px solid trasparent;
            padding: 7px;
            margin: 4px;
            font-size:14px;
            font-weight: 700;
            transition: all 0.7s ease-out;
        }
        .change{
            opacity: 1;
            max-width: 200px;
            min-width: 100px;
            border: none;
            border-bottom: 3px solid ${({ theme }) => theme.colors.primaryColor};
            border-radius: 5px;
            padding: 7px;
            margin: 10px;
            font-size: 10px;
            font-weight: 700;
            color: ${({ theme }) => theme.font.color};
            transition: all 0.7s ease-out;
            
            :focus{
                border: 0 none;
                border-bottom: 3px solid ${({ theme }) => theme.colors.blue};
                outline: none;
            }

            @media (min-width: 700px){
                font-size: 14px;
            }

        }

        .selectDirectory{
            max-width: 150px;
            margin: 5px;
            border: 2px solid transparent;
            font-size: 14px;
            font-weight: 700;
            border-radius: 8px;
            padding:8px;
            outline: none;
            cursor: pointer;
            
            :focus{
                border: 2px solid ${({ theme }) => theme.colors.blue};
            }
        }
    }


    @media (min-width: 1024px){
        flex-direction: row;
        padding: 6%;
        margin-top: -4%;
    }

    @media (min-width: 700px){
        .settingFile{
            width: 40%;
        }
    }
`;

export const ImagePreview = styled.div`
    display: none;
    width: 70%;
    max-width: 250px;
    height: 300px;
    border-radius: 10px;
    border: 1px solid ${({theme}) => theme.colors.borderColor};
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    transform: scale(1);
    transition: 0.3s ease-out;
    --x: 0px;
    --y: 0px;

    :hover{
        transform: scale(1.2);
        background-size: 150%, 125%;
        background-position: var(--x) var(--y);
        filter: drop-shadow(3px 2px 6px grey)
    }

    @media (min-width: 1024px){
        display: flex;
        
    }
`;

export const Details = styled.div`
    align-items: center;
    flex-direction: column;
    margin-top: 5%;
    margin-right: 4%;
    color: ${({ theme }) => theme.font.color};
    font-weight: 600;
    margin-left: -90px;
    left: 0;

    h2{
        max-width: 17ch;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: 0.5s ease-out;
        
        :hover{
            max-width: 25ch;
        }
    }

    @media (min-width: 1024px){
        margin: 3%;
    }

    h5{
        font-size: 11px;
        color: ${({ theme }) => theme.colors.blue};
        cursor: pointer;
        padding: 5px 0;

        :hover, :focus{
            color: ${({ theme }) => theme.colors.primaryColor};
            outline: none;
        }
    }
    h2{
        font-size: 15px;
    }
    span{
        font-size: 13px;   
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction:column;
    align-items: start;
    padding: 4%;
    max-width: 200px;
    border-radius: 8px;

    
    .btnSubmit{
        display:flex;
        align-items: center;
        justify-content: center;
        
        width: 50%;
        max-width: 200px;
        padding: 10px;
        
        font-weight: 900;
        border-radius: 7px;
        border: 2px solid white;
        background: ${({ theme }) => theme.colors.tertiaryColor};
        
        cursor: pointer;
        transition: all 0.4s ease-in;

        :hover{
            background: rgba(39, 60, 87, 0.5);
            color: ${({ theme}) => theme.colors.blue};
        }
        :focus{
            outline: none
        }
    }
`;