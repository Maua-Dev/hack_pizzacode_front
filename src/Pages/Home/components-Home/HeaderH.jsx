import { HeaderContainer, HeaderTextH } from "../HomeStyles"
// construção do componente Header - react

import fundoPizza from '../../../images/fundoHome.jpg'

export const HeaderH = () =>{
    return(
        <>
        <HeaderContainer style = {{backgroundImage: `url(${fundoPizza})`}}>
            <HeaderTextH>{"Diversas Possibilidades de Sabores!"}</HeaderTextH>
        </HeaderContainer>
        </>
    )
}