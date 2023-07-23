import { Container } from "../styled-components/Container"
import { HeaderText } from "../styled-components/Text"
// construção do componente Header - react

import Pizza from '../images/pizza.jpeg'

export const Header = () =>{
    return(
        <Container style = {{backgroundImage: `url(${Pizza})`}}>
            <HeaderText>{"Diversas Possibilidades de Sabores!"}</HeaderText>
        </Container>
    )
}