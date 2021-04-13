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
        padding: 10px;
        border-radius: 20px;
        background: rgb(32,35,199, 0.9);
    }
`;
export const FbIcon = styled(TiSocialFacebookCircular)`
    width: 25px;
    height: 25px;
    margin-right: 3px;
`;