import styled from 'styled-components';
import { ButtonOrder } from '../components-Order/ButtonOrder';



const FlexRowButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap;
  gap:20px;
  margin-top:42px;
  margin-bottom:42px;
  margin-left:5px;
  margin-right:5px;

`;

export const ButtonRow = () => {
    return(
        <FlexRowButton>
           <ButtonOrder texto={"Pagar com cartão de crédito"}></ButtonOrder>
            <ButtonOrder texto={"Pagar com cartão de débito"}></ButtonOrder>
            <ButtonOrder texto={"Pagar com pix"}></ButtonOrder>
        </FlexRowButton>
    )
}