import React, { useState } from "react"

import { ContainerWidget, ContainerImage,WidgetText, AdicionarButton, ButtonText, MaisButton } from "../../../styled-components/Widgets";



// construção do componente Widget- react
export const WidgetIngredientes = ({texto, imagem})=> {    

const [buttonText, setButtonText] = useState("+")

function handleClick(){
    setButtonText("+2")
}

    return(
        <ContainerWidget>
            {imagem && <ContainerImage src={imagem} alt = {texto}/>}
            {texto &&<WidgetText>{texto}</WidgetText>}
            <AdicionarButton>
                <ButtonText>{"Adicionar"}</ButtonText>
            </AdicionarButton>
                <MaisButton onClick={handleClick}><ButtonText>{buttonText}</ButtonText></MaisButton>
        </ContainerWidget>
    )
    
}