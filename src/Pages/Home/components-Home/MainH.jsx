import { CustomizarButton} from "../HomeStyles";
import { MainContainer, BoxTop, ButtonTextH, MainTextH, PizzaWidgetsRow } from "../HomeStyles";

import { useNavigate } from "react-router-dom";


export const MainH = () => {

    const navigate = useNavigate();

    function CustomPizza(){
        navigate('/Menu')

    }
    
    return(
        <MainContainer>
            <BoxTop>
                <CustomizarButton onClick = {CustomPizza}>
                    <ButtonTextH>{"Quer algo diferente? Customize seu pedido!"}</ButtonTextH>
                </CustomizarButton>
                <MainTextH>{"Pizza de sabores tradicionais"}</MainTextH>
                <PizzaWidgetsRow></PizzaWidgetsRow>
            </BoxTop>
        </MainContainer>
    )
}
