import styled from 'styled-components';
import {TiSocialFacebookCircular} from 'react-icons/ti';

export const FacebookSign = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    .btnFacebook{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px;
        border-radius: 8px;
        border: 1px solid #1877F2;
        color: #1877F2;
        background: white;
        font-weight: 700;

        transform: scale(0.9);
        transition: 0.3s ease-in;

        :hover{
            transform: scale(1);
            background: #1877F2;
            color: white;
        }
    }
`;
export const FbIcon = styled(TiSocialFacebookCircular)`
    width: 25px;
    height: 25px;
    margin-right: 3px;
`;