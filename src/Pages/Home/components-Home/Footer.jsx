import { FlexColums} from "../../../styled-components/GlobalStyles";
import { AdressContainer,BoxFooter,FooterContainer,BoxIcon,TextFooterBox  } from "../HomeStyles";
import {AdressTextFooter,TelTextFooter, FooterText } from "../HomeStyles";
import {TelephoneIcon,WhatsAppIcon, Icons } from "./Icons";



const ContactFooter = ({textoUnidade, textoTelefone, textoCel}) =>{
    return(
        <AdressContainer>
            {textoUnidade && <AdressTextFooter>{textoUnidade}</AdressTextFooter>}
            {textoTelefone && <TelTextFooter>
             <TelephoneIcon /> {/* Ícone de telefone */}
          {textoTelefone}
          </TelTextFooter>}
          {textoTelefone && <TelTextFooter>
             <WhatsAppIcon /> {/* Ícone de telefone */}
          {textoTelefone}
          </TelTextFooter>}
        </AdressContainer>
    )
}


export const Footer = () =>{

    return(
        <FooterContainer style={{backgroundColor:"rgba(253, 226, 158, 1)"}}>
            <BoxFooter  style={{backgroundColor:"rgba(255, 235, 186, 1)"}}>
                    <TextFooterBox style={{backgroundColor:"rgba(254, 245, 224, 1)", margin: "8px"}}>
                    <FooterText>{"Nossas unidades"}</FooterText>
                    </TextFooterBox>
                    <FlexColums>
                        <ContactFooter textoUnidade={"Unidade Santo André"} textoTelefone={"(11) 9999-9999"} textoCel={"(11) 9999-9999"}></ContactFooter>
                        <ContactFooter textoUnidade={"Unidade Santo André"} textoTelefone={"(11) 9999-9999"} textoCel={"(11) 9999-9999"}></ContactFooter>
                        <ContactFooter textoUnidade={"Unidade Santo André"} textoTelefone={"(11) 9999-9999"} textoCel={"(11) 9999-9999"}></ContactFooter>
                        <ContactFooter textoUnidade={"Unidade Santo André"} textoTelefone={"(11) 9999-9999"} textoCel={"(11) 9999-9999"}></ContactFooter>
                    </FlexColums>
            </BoxFooter >
            <BoxIcon>
                    <TextFooterBox style={{backgroundColor:"rgba(254, 245, 224, 1)", margin: "8px"}}>
                    <FooterText>{"Siga-nos"}</FooterText>
                    </TextFooterBox>
                    <Icons/>
            </BoxIcon>
        </FooterContainer>

    );
}

