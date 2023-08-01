import { OrderContainer, BoxOne, BoxSecond} from "./OrderStyles";
import { MainOrder } from "./MainOrder";

function Order(){
    return(
        <OrderContainer>
            <BoxOne>
                <BoxSecond>
            <MainOrder></MainOrder>
                </BoxSecond>
            </BoxOne>
        </OrderContainer>
    )
}

export default Order;