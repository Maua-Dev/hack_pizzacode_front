import React from 'react';
import styled from 'styled-components';
import { Card } from '../components/Card';
import { PizzaTradicionais, Ingredientes } from '../components/Sabores';



const FlexRowCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap;
  gap:40px;

`;


// Rows Pizzas Tradionais
export const PizzaCardsRow = () => {
  const startIndexRow = 0;
  const endIndexRow = 4;
  const startIndexSecondRow = 4;
  const endIndexSecondRow = 8;
  return (
    <>
    <FlexRowCards>
      {PizzaTradicionais.pizzas.slice(startIndexRow,endIndexRow).map((pizza, index) => (
        <Card key={index} texto={pizza.nome} imagem={pizza.tipo} />
      ))}
    </FlexRowCards>
    <FlexRowCards>
      {PizzaTradicionais.pizzas.slice(startIndexSecondRow,endIndexSecondRow).map((pizza, index) => (
        <Card key={index} texto={pizza.nome} imagem={pizza.tipo} />
      ))}
    </FlexRowCards>
    </>
  );
};
// Rows Ingredients

export const MolhoCardsRow = () => {
  return (
    <FlexRowCards>
      {Ingredientes.molhos.map((molhos, index) => (
        <Card key={index} texto={molhos.nome} imagem={molhos.tipo} />
      ))}
    </FlexRowCards>
  );
};

export const QueijosCardsRow = () => {
  return (
    <FlexRowCards>
      {Ingredientes.queijo.map((queijo, index) => (
        <Card key={index} texto={queijo.nome} imagem={queijo.tipo} />
      ))}
    </FlexRowCards>
  );
};

export const RecheioCardsRow = () => {
  const startIndexRow = 0;
  const endIndexRow = 4;
  const startIndexSecondRow = 4;
  const endIndexSecondRow = 8;
  return (
    <>
    <FlexRowCards>
      {Ingredientes.recheio.slice(startIndexRow,endIndexRow).map((recheio, index) => (
        <Card key={index} texto={recheio.nome} imagem={recheio.tipo} />
      ))}
    </FlexRowCards>
    <FlexRowCards>
      {Ingredientes.recheio.slice(startIndexSecondRow,endIndexSecondRow).map((recheio, index) => (
        <Card key={index} texto={recheio.nome} imagem={recheio.tipo} />
        ))}
    </FlexRowCards>
    </>
  );
};