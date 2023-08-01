// construção do componente Main - react

import { FlexRow } from "../../../styled-components/GlobalStyles";
import { MainContainer } from "../../Home/HomeStyles";
import { InfoContainer, Text, BoldWord, TextContainer,MolhoWidgetsRow, QueijosWidgetsRow, RecheioWidgetsRow, FinalizarButton, FinalizarText  } from "../MenuStyles";
import { useNavigate } from "react-router-dom";
// navegação entre as páginas por meio do Button Finalizar - Page Order




export const MainM = () =>{

    const navigate = useNavigate();
    function FinalizarPizza(){
        navigate('/Order')
    }
    return(
        <MainContainer>
            <InfoContainer>
                <TextContainer>
                <Text>{"Escolha o seu "}<BoldWord>{ "molho !"}</BoldWord></Text>
                </TextContainer>
                {/* Ingredientes */}
            </InfoContainer>
                <MolhoWidgetsRow></MolhoWidgetsRow>
            <InfoContainer>
                <TextContainer>
                <Text>{"Escolha o seu "}<BoldWord>{ "Queijo !"}</BoldWord></Text>
                </TextContainer>
            </InfoContainer>
            <QueijosWidgetsRow></QueijosWidgetsRow>
            <InfoContainer>
                <TextContainer>
                <Text>{"Escolha o seu "}<BoldWord>{ "Recheio !"}</BoldWord></Text>
                </TextContainer>
            </InfoContainer>
            < RecheioWidgetsRow></ RecheioWidgetsRow>
            <FlexRow>
            <FinalizarButton onClick={FinalizarPizza}><FinalizarText>{"Finalizar pedido"}</FinalizarText></FinalizarButton>
            </FlexRow>
        </MainContainer>
    )
}