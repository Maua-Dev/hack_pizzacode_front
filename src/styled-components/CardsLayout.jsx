import React from 'react';
import styled from 'styled-components';
import { CardAdicionar, CardComprar } from '../components-Menu/Card';
import { PizzaTradicionais, Ingredientes } from '../components-Menu/Sabores';



const FlexRowCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap;
  gap:40px;

`;

const FlexMolhoRowCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap;

  /* @media (min-width: 769) {
    
    margin-left: 250px;
  }; */
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
        <CardComprar key={index} texto={pizza.nome} imagem={pizza.tipo} />
      ))}
    </FlexRowCards>
    <FlexRowCards>
      {PizzaTradicionais.pizzas.slice(startIndexSecondRow,endIndexSecondRow).map((pizza, index) => (
        <CardComprar key={index} texto={pizza.nome} imagem={pizza.tipo} />
      ))}
    </FlexRowCards>
    </>
  );
};
// Rows Ingredients

export const MolhoCardsRow = () => {
  return (
    <FlexMolhoRowCards>
      {Ingredientes.molhos.map((molhos, index) => (
        <CardAdicionar key={index} texto={molhos.nome} imagem={molhos.tipo} />
      ))}
    </FlexMolhoRowCards>
  );
};

export const QueijosCardsRow = () => {
  return (
    <FlexRowCards>
      {Ingredientes.queijo.map((queijo, index) => (
        <CardAdicionar key={index} texto={queijo.nome} imagem={queijo.tipo} />
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
        <CardAdicionar key={index} texto={recheio.nome} imagem={recheio.tipo} />
      ))}
    </FlexRowCards>
    <FlexRowCards>
      {Ingredientes.recheio.slice(startIndexSecondRow,endIndexSecondRow).map((recheio, index) => (
        <CardAdicionar key={index} texto={recheio.nome} imagem={recheio.tipo} />
        ))}
    </FlexRowCards>
    </>
  );
};