import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonLoggin,ContainerLoggin, Logo, TextLabel } from "./LogginStyles";
import { BoxCenter } from "../QRCode/QRCodeStyles";
import { FlexRow } from "../../styled-components/GlobalStyles";
import logo from "../../images/PIZZACODE2 1.png";


function Loggin(){

    const navigate = useNavigate();

    function NavCliente(){
        navigate('/Home')

    }
    function NavAdministrativo(){
        navigate('/MainAdm')
    }
    return(
    <>
    <ContainerLoggin>
        <BoxCenter>
            <Logo src={logo}></Logo>
            <FlexRow style={{marginTop:"80px"}}>
            <ButtonLoggin onClick={NavCliente}>
                <TextLabel>{"Cliente"}</TextLabel></ButtonLoggin>
                <ButtonLoggin onClick={NavAdministrativo}>
                <TextLabel>{"Administrativo"}</TextLabel></ButtonLoggin>
            </FlexRow>
        </BoxCenter>
    </ContainerLoggin>
        
    </>)
}

export default Loggin;