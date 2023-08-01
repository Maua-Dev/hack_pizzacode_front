import styled from 'styled-components';
import { FlexRowButton } from '../../styled-components/GlobalStyles';
import { useNavigate } from 'react-router-dom';
//Layout

export const OrderContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;

`;

export const BoxOne = styled.div`
    background-color:rgba(255, 253, 250, 1);
    border-radius:20px;
    margin-top:68px;
    margin-bottom:62px;
    margin-right:43px ;
    margin-left:43px;
    flex-wrap:wrap;
`;
export const BoxSecond = styled.div`
    background-color:rgba(255, 253, 250, 1);
    border-radius:20px;
    border: 3px solid rgba(255, 225, 148, 1);
    margin-top:32px;
    margin-bottom:30px;
    margin-right:24px;
    margin-left:28px;
    flex-wrap:wrap;


`;

export const MainContainerOrder = styled.div`
    display:flex;
    flex-direction:column;
    align-items: start;
    flex-wrap: wrap;
    width:1200px;

    @media only screen and (max-width:767px){
        width:400px;
    }

`;


// Text

export const HeaderTextOrder = styled.h1`
    color:black;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight:bold;
    font-size:50px;
    word-wrap:break-word;
    padding:30px;

    @media only screen and (max-width:767px){
        font-size: 40px;
    }

`;

export const IngredientsTextOrder = styled.p`
    color:black;
    font-family: 'Montserrat', sans-serif;
    font-weight:"medium";
    font-size:32px;
    word-wrap:break-word;
    margin-top:37px;
    margin-bottom:20px;

    @media only screen and (max-width:767px){
        font-size: 24px;
    }
`;

export const IngrientsListText = styled.p`
    color:black;
    font-family:'Montserrat', sans-serif;
    font-weight:"medium";
    font-size:30px;
    word-wrap:break-word;

    @media only screen and (max-width:767px){
        font-size: 20px;
    }
`;

export const PagarTextButton = styled.p`
    color:black;
    font-family:'Montserrat', sans-serif;
    font-weight:"semibold";
    text-align: center;
    font-size:24px;
    word-wrap:break-word;
    margin:10px;

    @media only screen and (max-width: 767px){
        font-size: 16px;
    }
`;

export const ButtonRow = () => {
    return(
        <FlexRowButton>
           <ButtonOrder texto={"Pagar com cartão de crédito"}></ButtonOrder>
            <ButtonOrder texto={"Pagar com cartão de débito"}></ButtonOrder>
            <ButtonOrder texto={"Pagar com pix"}></ButtonOrder>
        </FlexRowButton>
    )
}






//Button

export const PagarButton = styled.button`
    width:331px;
    height:100px;
    background-color:rgba(255, 225, 148, 1);
    border-radius:20px;
    cursor:pointer;
    transition: background-color 0.3s;
    margin-top:50px ;
    margin-bottom: 44px;

    &:hover {
        background-color:rgba(246, 207, 107, 1);

    }

    @media (max-width: 767px){
        height:70px;
        width:200px;
        margin-bottom:5px;
        margin-top:5px;
    }
`;

const ButtonOrder = ({texto}) =>{

    const navigate = useNavigate();

     function PagarPizza(){
        navigate('/QRCode')
     }
    
    return(
        <PagarButton onClick={PagarPizza}>
           { texto && <PagarTextButton>{texto}</PagarTextButton>}
        </PagarButton>
    )
}