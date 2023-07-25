
import { ButtonRow } from "../styled-components/ButtonLayour"
import { MainContainerOrder } from "../styled-components/Container"
import {HeaderTextOrder} from "../styled-components/Text"
import { ListIngredients } from "../styled-components/ListLayout"



export const MainOrder = () =>{
    return (
        <MainContainerOrder>
            <HeaderTextOrder>{"Confirmar o pedido"}</HeaderTextOrder>
            <ListIngredients Molho={"Molho Apimentado"}
            Queijo={"Mussarela"}
            Queijo2={"Parmesão"}
            Recheio={"Tomate"}
            Recheio2={"Presunto em dobro"}></ListIngredients>
            <ButtonRow></ButtonRow>
            
        </MainContainerOrder>
    )
}

