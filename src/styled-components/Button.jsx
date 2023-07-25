import styled from 'styled-components';

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
`
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


`;

export const PagarButton = styled.button`
    width:331px;
    height:100px;
    background-color:rgba(255, 225, 148, 1);
    border-radius:20px;
    cursor:pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color:rgba(246, 207, 107, 1);

    }
`;