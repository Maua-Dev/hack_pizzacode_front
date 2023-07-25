import {FlexAdressContainer, FooterContainer, InformationFooter, TextFooterContainer,AdressContainer } from "../styled-components/Container";
import { FooterText, AdressTextFooter, TelTextFooter} from "../styled-components/Text";
import { FacebookIcon, InstagramIcon, TwitterIcon, TelephoneIcon,WhatsAppIcon } from "./Icons";



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
            <InformationFooter style={{backgroundColor:"rgba(255, 235, 186, 1)"}}>
                    <TextFooterContainer style={{backgroundColor:"rgba(254, 245, 224, 1)", margin: "8px"}}>
                    <FooterText>{"Nossas unidades"}</FooterText>
                    </TextFooterContainer>
                    <FlexAdressContainer>
                        <ContactFooter textoUnidade={"Unidade Santo André"} textoTelefone={"(11) 9999-9999"} textoCel={"(11) 9999-9999"}></ContactFooter>
                        <ContactFooter textoUnidade={"Unidade Santo André"} textoTelefone={"(11) 9999-9999"} textoCel={"(11) 9999-9999"}></ContactFooter>
                        <ContactFooter textoUnidade={"Unidade Santo André"} textoTelefone={"(11) 9999-9999"} textoCel={"(11) 9999-9999"}></ContactFooter>
                    </FlexAdressContainer>
            </InformationFooter >
            <InformationFooter style={{backgroundColor:"rgba(255, 235, 186, 1)", width:"324px"}}>
                    <TextFooterContainer style={{backgroundColor:"rgba(254, 245, 224, 1)", margin: "8px", width:"292px"}}>
                    <FooterText>{"Siga-nos"}</FooterText>
                    </TextFooterContainer>
                    <FlexAdressContainer>
                       <FacebookIcon/><InstagramIcon/><TwitterIcon/>
                    </FlexAdressContainer>
            </InformationFooter >
        </FooterContainer>

    );
}

