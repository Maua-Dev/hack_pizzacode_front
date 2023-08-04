import React, {useContext} from "react"
import { MainContainerOrder, HeaderTextOrder, ButtonRow } from "./OrderStyles"
import { ListIngredients } from "../../styled-components/ListLayout"
import { OrderContext } from "../../contexts/Order"



export const MainOrder = () =>{
    const{pizza} = useContext(OrderContext)
    const{customMolho} = useContext(OrderContext)
    const{customQueijo} = useContext(OrderContext)
    const {customRecheio} = useContext(OrderContext)


    return (
        <MainContainerOrder>

        <HeaderTextOrder>{"Confirmar o pedido"}</HeaderTextOrder>
        <HeaderTextOrder>{"Pizza"}</HeaderTextOrder>

            <ListIngredients 
            Nome={pizza.name}
            Molho={customMolho.sauce}
            Queijo={customQueijo.cheese}
            Recheio={customRecheio.filling}>
            </ListIngredients>
            <ButtonRow></ButtonRow>
            
        </MainContainerOrder>
    )
}

