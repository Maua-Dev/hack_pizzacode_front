import React, { useContext } from "react";

import { ContainerWidget, ContainerImage,WidgetText, ComprarButton, ButtonText } from "../../../styled-components/Widgets";
// construção do componente Widget- react

import { OrderContext } from "../../../contexts/Order";

import { useNavigate } from "react-router-dom";
// navegação entre as páginas por meio do ComprarButton - Page Order

/// components
export const WidgetPizza = ({texto, imagem})=> {
    
    const navigate = useNavigate();

    const {handleOrder} = useContext(OrderContext)

    function comprarPizza(name){
        handleOrder(name)
        navigate('/Order')
    }



    return(
        <ContainerWidget>
            {imagem && <ContainerImage src={imagem} alt = {texto}/>}
            {texto &&<WidgetText>{texto}</WidgetText>}
            <ComprarButton onClick={() => comprarPizza(texto)}>
                <ButtonText>{"Comprar"}</ButtonText>
            </ComprarButton>
        </ContainerWidget>
    )
    
}
;