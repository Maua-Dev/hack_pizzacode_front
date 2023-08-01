import styled from 'styled-components';

//Layout Widgets

export const ContainerWidget = styled.div`
    width:218px;
    height:320px;
    background-color:rgba(255, 253, 250, 1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius:20px;
    margin-top:40px;

    @media (max-width:767px){
        width:180px;
        height:250px;

    }
`;

export const ContainerImage = styled.img`
    width:168px;
    height:145px;
    border:2.50px solid #F3C98A ;
    margin-top:45px;
    margin-left:24px;

    @media (max-width:767px){
        width:130px;
        height:120px
        
    }
`;


// Text
export const WidgetText = styled.p`
    color: black;
    font-size:19px;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    word-wrap:wrap;
    text-align:center;
    margin-top:20px;
    margin-bottom:25px;

    @media (max-width:767px){
        font-size:15px;
        margin-top:5px;
        margin-bottom:10px;
    }

    
`;

export const ButtonText = styled.p`
    font-size: 19px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 'semibold';
    word-wrap: 'break-word';

    @media (max-width:767px){
        font-size:15px;
    }
`;

// Buttons

export const ComprarButton = styled.button`
    color: #9B755F;
    width:168px;
    height:42px;
    background-color:#FDE29E;
    border-radius:10px;
    margin-left:25px;
    margin-right:25px;

    cursor:pointer;

    &:hover {
        background-color:rgba(229, 201, 129, 1);
        color:rgba(255, 255, 255, 1)

    }

    @media (max-width:767px){
        width:130px;
        height:30px;
    }
    `;

export const AdicionarButton = styled.button`
    color: #9B755F;
    width:143px;
    height:42px;
    background-color:#FDE29E;
    border-radius:10px;
    margin-left:9px;
    margin-right:5px;

    &:hover {
        background-color:rgba(229, 201, 129, 1);
        color:rgba(255, 255, 255, 1)

    }

    @media (max-width:767px){
        width:115px;
        height:30px;
    }
`;
export const MaisButton = styled.button`
    color: #9B755F;
    width:52px;
    height:42px;
    background-color:#FDE29E;
    border-radius:10px;
    margin-right:9px;
    cursor:pointer;

    &:hover {
        background-color:rgba(229, 201, 129, 1);
        color:rgba(255, 255, 255, 1)

    }

    @media (max-width:767px){
        width:40px;
        height:30px;
    };
`;