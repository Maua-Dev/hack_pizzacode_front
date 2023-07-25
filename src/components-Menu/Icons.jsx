import { AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai";
import { BsTelephoneOutboundFill,BsFacebook } from "react-icons/bs";
import { BiLogoWhatsapp } from "react-icons/bi";
import { IconContainer } from "../styled-components/Container";



export const TelephoneIcon = () =>{
    return(

            <BsTelephoneOutboundFill size={20}/>
    )
}

export const WhatsAppIcon = () =>{
    return(
            <BiLogoWhatsapp size={25}/>
    )
}

export const FacebookIcon = () =>{
    return(
        <IconContainer>
        <BsFacebook size={65}>
        </BsFacebook>
        </IconContainer>
    )
}

export const InstagramIcon = () =>{
    return(

        <IconContainer>
        <AiFillInstagram size={75}>
        </AiFillInstagram>
        </IconContainer>
    )
}

export const TwitterIcon = () =>{
    return(
        <IconContainer>
        <AiFillTwitterCircle size={75}>
        </AiFillTwitterCircle>
        </IconContainer>
    )
}