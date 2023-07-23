

// construção do componente Main - react

import  { PizzaCardsRow ,MolhoCardsRow, QueijosCardsRow, RecheioCardsRow} from "../styled-components/CardsLayout";
import { MainContainer,TextContainer, TopContainer, InfoContainer } from "../styled-components/Container";
import { BoldWord, MainText, Text } from "../styled-components/Text";


export const Main = () =>{
    return(
        <MainContainer>
            <TopContainer>
                <TextContainer>
                    <Text>{"Quer algo diferente? Customize seu pedido!"}</Text>
                    <MainText>{"Pizza de sabores tradicionais"}</MainText>
                </TextContainer>
            </TopContainer>
            {/* Pizzas Tradicionais */}
            <PizzaCardsRow></PizzaCardsRow>
            <InfoContainer>
                <TextContainer>
                <Text>{"Escolha o seu "}<BoldWord>{ "molho !"}</BoldWord></Text>
                </TextContainer>
                {/* Ingredientes */}
            </InfoContainer>
                <MolhoCardsRow></MolhoCardsRow>
            <InfoContainer>
                <TextContainer>
                <Text>{"Escolha o seu "}<BoldWord>{ "Queijo !"}</BoldWord></Text>
                </TextContainer>
            </InfoContainer>
            <QueijosCardsRow></QueijosCardsRow>
            <InfoContainer>
                <TextContainer>
                <Text>{"Escolha o seu "}<BoldWord>{ "Queijo !"}</BoldWord></Text>
                </TextContainer>
            </InfoContainer>
            < RecheioCardsRow></ RecheioCardsRow>

        </MainContainer>
    )
}