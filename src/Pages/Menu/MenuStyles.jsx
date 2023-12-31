import styled from 'styled-components';
// import { WidgetIngredientes } from './components-Menu/WidgetIngredientes';
// import { Ingredientes } from '../Home/components-Home/Sabores';

// Layout

export const InfoContainer = styled.div`
    display:flex;
    justify-content:start;

    @media only screen and (max-width:767px){
      /* Small Devices, Tablets */
        justify-content:center
    }
`;


export const TextContainer = styled.div`
    width:1033px;
    height:66px;
    margin-top:82px;
    margin-bottom:40px;
    border-radius: 10px;
    background-color:rgba(253, 226, 158, 1);
`;


// Text

/* implementar o estilo bold em uma palavra */

export const BoldWord = styled.span`
    font-weight:bold;
`;


export const Text = styled.p`
    color: black;
    font-size:24px;
    font-family: 'Montserrat', sans-serif;
    font-weight:normal;
    word-wrap:break-word;
    padding-top:18px;
    padding-left:19px;
    padding-bottom:18px;

    @media only screen and (max-width:767px){
      /* Small Devices, Tablets */
      font-size:20px;
    }
`;



// Rows Ingredients

export const FlexIngredientesRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap:wrap;
  gap:40px;

  @media only screen and (max-width:767px){
    /* Small Devices, Tablets */
    justify-content:center;
    margin-bottom:20px;
  }

`;


// Button

export const FinalizarButton = styled.button`
    color: 'black';
    width:331px;
    height:100px;
    margin-top:84px;
    background-color:rgba(255, 225, 148, 1);
    border-radius: 20px;


    @media only screen and (max-width: 767px){
      /* Small Devices, Tablets */
        height:60px;
        width:200px;
        margin:auto;
    }

    cursor:pointer;

    &:hover {
        background-color:rgba(246, 207, 107, 1);

    }

`;


// Text

export const FinalizarText = styled.p`
    font-size:28px;
    font-family: 'Montserrat', sans-serif;
    font-weight:"semibold";
    word-wrap:break-word;
    text-align: center;


    @media only screen and (max-width:767px){
      /* Small Devices, Tablets */

        font-size:20px;
}
    
`;







