import { MainQRCode } from "./MainQRCode";
import { OrderContainer, BoxOne, BoxSecond} from "../Order/OrderStyles";

function QRCode(){
    return(
        <OrderContainer>
            <BoxOne>
                <BoxSecond>
                    <MainQRCode></MainQRCode>
                    {/* Main Order vai ser onde o QRCode */}
                </BoxSecond>
            </BoxOne>
        </OrderContainer>
    )
}

export default QRCode;