import { MainOrder } from "./components-Order/MainOrder";
import { OrderContainer, OrderFirstContainer, OrderSecondContainer } from "./styled-components/Container";

function Order(){
    return(
        <OrderContainer>
            <OrderFirstContainer>
                <OrderSecondContainer>
            <MainOrder></MainOrder>
                </OrderSecondContainer>
            </OrderFirstContainer>
  
        </OrderContainer>
    )
}

export default Order;