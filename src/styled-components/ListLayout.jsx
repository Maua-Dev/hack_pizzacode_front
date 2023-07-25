import styled from 'styled-components';
import { IngrientsListText, IngredientsTextOrder } from './Text';

const FlexColum = styled.div`
  display: flex;
  flex-direction:column;
  align-items: start;
  flex-wrap:wrap;
  padding: 20px;

`;

const List = styled.ul`
    padding-left:20px;
`;

const ListItem = styled.li`
    margin-bottom:5px;

    ::before {
        content: '•';
        margin-right:10px;
    }
`;

export const ListIngredients = ({Molho, Queijo, Queijo2,Recheio, Recheio2 }) =>{
    return(
        <FlexColum>
        <IngredientsTextOrder>{"Ingredientes :"}</IngredientsTextOrder>
        <List>
            <ListItem>{Molho && <IngrientsListText>{Molho}</IngrientsListText>}</ListItem>
            <ListItem>{Queijo && <IngrientsListText>{Queijo}</IngrientsListText>}</ListItem>
            <ListItem>{Queijo2 && <IngrientsListText>{Queijo2}</IngrientsListText>}</ListItem>
            <ListItem>{Recheio && <IngrientsListText>{Recheio}</IngrientsListText>}</ListItem>
            <ListItem>{Recheio2 && <IngrientsListText>{Recheio2}</IngrientsListText>}</ListItem>
        </List>
        </FlexColum>
    )
}