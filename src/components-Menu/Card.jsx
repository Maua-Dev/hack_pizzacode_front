
// construção do componente Card - react

import {ContainerCard, ContainerImage} from "../styled-components/Container";
import { CardText, ButtonText } from "../styled-components/Text";
import { ComprarButton, AdicionarButton, MaisButton } from "../styled-components/Button";

export const CardComprar = ({texto, imagem})=> {
    return(
        <ContainerCard>
            {imagem && <ContainerImage src={imagem} alt = {texto}/>}
            {texto &&<CardText>{texto}</CardText>}
            <ComprarButton>
                <ButtonText>{"Comprar"}</ButtonText>
            </ComprarButton>
        </ContainerCard>
    )
    
}

export const CardAdicionar = ({texto, imagem})=> {
    return(
        <ContainerCard>
            {imagem && <ContainerImage src={imagem} alt = {texto}/>}
            {texto &&<CardText>{texto}</CardText>}
            <AdicionarButton>
                <ButtonText>{"Adicionar"}</ButtonText>
            </AdicionarButton>
                <MaisButton><ButtonText>{"+"}</ButtonText></MaisButton>
        </ContainerCard>
    )
    
}



