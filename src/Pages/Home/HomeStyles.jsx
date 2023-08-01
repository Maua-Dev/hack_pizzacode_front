import styled from 'styled-components';
import { FlexRow} from '../../styled-components/GlobalStyles';
import { PizzaTradicionais} from './components-Home/Sabores'
import { WidgetPizza } from './components-Home/WidgetPizza';

//Layout / container and boxs
export const HeaderContainer = styled.div`
/* container Header Home */
display:flex;
justify-content:center;



@media only screen and (max-width:767px){
    /* Small Devices, Tablets */
    height:200px;
    width:100vw;
}

`;
export const MainContainer = styled.div`

margin-left:124px;
margin-right:125px;

@media only screen and (max-width: 767px){
    /* Small Devices, Tablets */
        margin: 0px;
    }

 `;

export const BoxTop = styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
    margin-bottom:150px;

    @media only screen and (max-width: 767px){
        /* Small Devices, Tablets */
        align-items:center;
    }
`;



export const FooterContainer = styled.div`
    display:flex;
    justify-content:start;
    margin-top:160px;
    flex-wrap:wrap;

    @media only screen and (max-width:767px){
        /* Small Devices, Tablets */
        justify-content:start;
        
    }

`;

export const BoxFooter = styled.div`
margin-top:26px;
margin-left:35px;
margin-bottom:13px;
width:1100px;
border-radius: 10px;

@media only screen and (max-width:767px){
    /* Small Devices, Tablets */
        width:380px;
    }
`;


export const BoxIcon = styled.div`
margin-top:26px;
margin-left:35px;
margin-bottom:13px;
width:"306px";
border-radius: 10px;
background-Color:rgba(255, 235, 186, 1);

@media only screen and (max-width:767px){
    /* Small Devices, Tablets */
        width:180px;
    }
`;


export const TextFooterBox = styled.div`
    background-color:rgba(253, 226, 158, 1);
    border-radius: 10px;
    padding:8px;

`;


export const AdressContainer = styled.div`
    gap:10px;
    margin-top:10px;

    @media only screen and (max-width:767px){
        /* Small Devices, Tablets */
        width:150px;
    }

`;

export const IconContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;

`;




//Button
export const CustomizarButton = styled.button`
    color: 'black';
    width:1033px;
    height:66px;
    margin-top:82px;
    margin-bottom:40px;
    background-color:rgba(253, 226, 158, 1);
    border-radius: 10px;
    text-align: start;


    @media only screen and (max-width: 767px){
        /* Small Devices, Tablets */
        height:80px;
        width:100vw;
    }

    cursor:pointer;

    &:hover {
        background-color:rgba(229, 201, 129, 1);
        color:rgba(255, 255, 255, 1)

    }

`;


// Text

export const HeaderTextH = styled.h1`
    color:#3F0E0E;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight:bold;
    font-size:64px;
    word-wrap:break-word;
    padding:30px;

    /* font responsive */
    @media only screen and (max-width:767px){
        /* Small Devices, Tablets */

        font-size:44px;
    }

`;

export const ButtonTextH = styled.p`
    font-size:24px;
    font-family: 'Montserrat', sans-serif;
    font-weight:normal;
    word-wrap:break-word;
    text-align: start;
    padding-top:18px;
    padding-left:19px;
    padding-bottom:18px;

    @media (max-width:767px){
        /* Small Devices, Tablets */

        font-size:20px;
        text-align:center;
}
`;

export const MainTextH = styled.h2`
    color: black;
    font-size:40px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    word-wrap:break-word;
    margin-top:82px;
    text-align: start;

    @media (max-width:767px){
        /* Small Devices, Tablets */

    font-size:28px;
    margin-top: 10px;;
    }
`;


export const FooterText = styled.p`
    color: black;
    font-weight:bold;
    font-size:25px;
    word-wrap:break-word;
    font-family: 'Montserrat', sans-serif;
    padding-top:18px;
    padding-left:19px;
    padding-bottom:18px;

    @media only screen and (max-width:767px){
        /* Small Devices, Tablets */
        font-size: 18px;
    }

`;
export  const AdressTextFooter = styled.p`
    color: black;
    font-size:15px;
    font-family: 'Montserrat', sans-serif;
    font-weight:bold;
    word-wrap:break-word;
    padding-top:18px;
    padding-left:19px;
    padding-bottom:18px;

    @media only screen and (max-width:767px){
        /* Small Devices, Tablets */
        font-size: 12px;
    }
`;

export const TelTextFooter = styled.p`
    color: black;
    font-size:15px;
    font-family: 'Montserrat', sans-serif;
    font-weight:"semibold";
    word-wrap:break-word;
    padding-left:19px;
    padding-bottom:18px;

    @media only screen and (max-width:767px){
        /* Small Devices, Tablets */
        font-size: 12px;
    }
`;

// Widgets

// Rows Pizzas Tradionais
export const PizzaWidgetsRow = () => {
    const startIndexRow = 0;
    const endIndexRow = 4;
    const startIndexSecondRow = 4;
    const endIndexSecondRow = 8;
    return (
      <>
      <FlexRow>
        {PizzaTradicionais.pizzas.slice(startIndexRow,endIndexRow).map((pizza, index) => (
          <WidgetPizza key={index} texto={pizza.nome} imagem={pizza.tipo} />
        ))}
      </FlexRow>
      <FlexRow>
        {PizzaTradicionais.pizzas.slice(startIndexSecondRow,endIndexSecondRow).map((pizza, index) => (
          <WidgetPizza key={index} texto={pizza.nome} imagem={pizza.tipo} />
        ))}
      </FlexRow>
      </>
    );
  };


