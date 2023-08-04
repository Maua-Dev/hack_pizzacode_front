import styled from 'styled-components';

export const BoxCenter = styled.div`
margin:60px;
justify-content: center;
`;

export const MainContainerQRCODE = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    flex-wrap: wrap;
    width:1200px;

    @media only screen and (max-width:767px){
        width:400px;
    }

`;