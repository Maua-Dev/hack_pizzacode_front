import React from "react";

import { ContainerWidget, ContainerImage,WidgetText, ComprarButton, ButtonText } from "../../../styled-components/Widgets";
// construção do componente Widget- react

import { useNavigate } from "react-router-dom";
// navegação entre as páginas por meio do ComprarButton - Page Order

/// components
export const WidgetPizza = ({texto, imagem})=> {
    
    const navigate = useNavigate();

    function ComprarPizza(){
        navigate('/Order')
    }


    return(
        <ContainerWidget>
            {imagem && <ContainerImage src={imagem} alt = {texto}/>}
            {texto &&<WidgetText>{texto}</WidgetText>}
            <ComprarButton onClick={ComprarPizza}>
                <ButtonText>{"Comprar"}</ButtonText>
            </ComprarButton>
        </ContainerWidget>
    )
    
}
;