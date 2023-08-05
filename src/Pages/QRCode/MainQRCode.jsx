
import { HeaderTextOrder} from "../Order/OrderStyles"
import { MainContainerQRCODE } from "./QRCodeStyles";
import { BoxCenter } from "./QRCodeStyles";
import React, {useContext} from "react"
import { OrderContext } from "../../contexts/Order"
import QRCode from 'react-qr-code';

export const MainQRCode = () =>{

    const{pizza} = useContext(OrderContext)
    const{customMolho} = useContext(OrderContext)
    const{customQueijo} = useContext(OrderContext)
    const {customRecheio} = useContext(OrderContext)

    var pizzaName = pizza.name;
    var molhoSauce = customMolho.sauce;
    var queijoCheese = customQueijo.cheese;
    var recheioFilling = customRecheio.filling;
    var vir = ", ";
    var ee = " e ";

   if (pizzaName !== ""){
    var pedido = pizzaName
   }
    else{
        pedido = pizzaName +molhoSauce + vir + queijoCheese + ee + recheioFilling
    }
    

        return (
            <MainContainerQRCODE>
                <HeaderTextOrder>{"Gerador QR do pedido"}</HeaderTextOrder>
                <BoxCenter>
                        <QRCode
                        value={pedido}
                    />
                </BoxCenter>
            </MainContainerQRCODE>
        )
    }
    