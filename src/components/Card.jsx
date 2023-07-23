import styled from 'styled-components';
// construção do componente Card - react

import { ContainerCard, ContainerImage } from "../styled-components/Container";

import { CardText, ButtonText } from "../styled-components/Text";
import { ComprarButton } from "../styled-components/Button";

export const Card = ({texto, imagem})=> {
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

