import styled from 'styled-components';

/// Layout
export const ContainerLoggin = styled.div`
display:flex;
width:100vw;
height:90vh;
justify-content:center;
background-color:white;
`;

export const BoxButton = styled.div`
align-items:center;

`;
//image
export const Logo = styled.img`
display:flex;
justify-content:center;
margin:auto;
width:400px;

`;
//button
export const ButtonLoggin = styled.button`
color:rgba(0, 0, 0, 1);
width:400px;
height:100px;
background-color:rgba(253, 226, 158, 1);
border-radius:10px;

cursor: pointer;

&:hover {
        background-color:rgba(229, 201, 129, 1);
        color:rgba(255, 255, 255, 1)
    }

@media (max-width:576px){
    width:100%;
    height:80px;
}
`;

// text
export const TextLabel = styled.h1`
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight:bold;
    font-size:32px;
    word-wrap:break-word;

    /* font responsive */
    @media only screen and (max-width:767px){
        /* Small Devices, Tablets */

        font-size:24px;
    }

`;