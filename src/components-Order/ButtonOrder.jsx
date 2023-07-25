 import { PagarButton } from "../styled-components/Button"
 import { PagarTextButton } from "../styled-components/Text"


export const ButtonOrder = ({texto}) =>{
    return(
        <PagarButton>
           { texto && <PagarTextButton>{texto}</PagarTextButton>}
        </PagarButton>
    )
}
