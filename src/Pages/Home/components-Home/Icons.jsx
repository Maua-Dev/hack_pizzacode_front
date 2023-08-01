import { AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai";
import { BsTelephoneOutboundFill,BsFacebook } from "react-icons/bs";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FlexRow } from "../../../styled-components/GlobalStyles";

export const Icons = () =>{
    return(
        <FlexRow style={{gap:"5px", margin:"50px"}}>
            <FacebookIcon></FacebookIcon>
            <InstagramIcon></InstagramIcon>
            <TwitterIcon></TwitterIcon>
        </FlexRow>
    )
}


export const TelephoneIcon = () =>{
    return(

            <BsTelephoneOutboundFill size={15}/>
    )
}

export const WhatsAppIcon = () =>{
    return(
            <BiLogoWhatsapp size={15}/>
    )
}

export const FacebookIcon = () =>{
    return(
        <BsFacebook size={"45"}>
        </BsFacebook>
    )
}

export const InstagramIcon = () =>{
    return(
        <AiFillInstagram size={"50"}>
        </AiFillInstagram>
    )
}

export const TwitterIcon = () =>{
    return(
        <AiFillTwitterCircle size={"50"}>
        </AiFillTwitterCircle>
    )
}