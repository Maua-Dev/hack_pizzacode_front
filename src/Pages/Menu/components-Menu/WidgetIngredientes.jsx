import React, { useContext, useState } from "react";
import { OrderContext } from "../../../contexts/Order";
// importando as imagens dos Ingredientes//
// molhos
import MolhoTomate from '../../../images/Ingredientes/MolhoTomate.png';
import MolhoPicante from '../../../images/Ingredientes/MolhoPicante.png'
// queijos
import Parmesao from '../../../images/Ingredientes/Parmesao.png';
import Provolone from '../../../images/Ingredientes/Provolone.png';
import Mussarela from '../../../images/Ingredientes/Mussarela.png';
import Gorgonzola from '../../../images/Ingredientes/Gorgonzola.png';
import Catupiry from  '../../../images/Ingredientes/Catupiry.png';
// recheio
import Tomate from '../../../images/Ingredientes/Tomate.png';
import TomateSeco from '../../../images/Ingredientes/TomateSeco.png';
import Frango from '../../../images/Ingredientes/Frango.png';
import Azeitona from '../../../images/Ingredientes/Azeitona.png';
import Presunto from '../../../images/Ingredientes/Presunto.png';
import Cebola from '../../../images/Ingredientes/Cebola.png';
import OvoCozido from '../../../images/Ingredientes/OvoCozido.png';
import Atum from '../../../images/Ingredientes/Atum.png';

/// importando o Layout
import { ContainerWidget, ContainerImage,WidgetText, AdicionarButton, ButtonText, MaisButton } from "../../../styled-components/Widgets";
import { FlexIngredientesRow } from '../MenuStyles';


// construção do componente Widget- react
export const WidgetMolho = ()=> { 
    
    const [buttonTextTomate, setButtonTextTomate] = useState("+");
    const [buttonTextPicante, setButtonTextPicante] = useState("+");
    const { handleCustomMolho } = useContext(OrderContext);
  
    function comprarCustom(sauce) {
      handleCustomMolho(sauce);
    }
  
    function handleClickTomate() {
      comprarCustom("Molho de tomate");
      setButtonTextTomate("+2");
    }
  
    function handleClickPicante() {
      comprarCustom("Molho de pimenta");
      setButtonTextPicante("+2");
    }

    return(
        <FlexIngredientesRow>
        <ContainerWidget>
            <ContainerImage src={MolhoTomate} alt = {"Molho de tomate"}/>
            <WidgetText>{"Molho de tomate"}</WidgetText>
            <AdicionarButton>
                <ButtonText>{"Adicionar"}</ButtonText>
            </AdicionarButton>
                <MaisButton onClick={handleClickTomate}><ButtonText>{buttonTextTomate}</ButtonText></MaisButton>
        </ContainerWidget>
        <ContainerWidget>
            <ContainerImage src={MolhoPicante} alt = {"Molho picante"}/>
            <WidgetText>{"Molho picante"}</WidgetText>
            <AdicionarButton>
                <ButtonText>{"Adicionar"}</ButtonText>
            </AdicionarButton >
                <MaisButton onClick={handleClickPicante} ><ButtonText>{buttonTextPicante}</ButtonText></MaisButton>
        </ContainerWidget>
        </FlexIngredientesRow>
    )
    
};

export const WidgetQueijo = ()=> {
    
    const [buttonTextParmesao, setButtonTextParmesao] = useState("+");
    const [buttonTextProvolone, setButtonTextProvolone] = useState("+");
    const [buttonTextMussarela, setButtonTextMussarela] = useState("+");
    const [buttonTextGorgonzola, setButtonTextGorgonzola] = useState("+");
    const [buttonTextCatupiry, setButtonTextCatupiry] = useState("+");
    const { handleCustomQueijo } = useContext(OrderContext);
  
    function comprarCustom(cheese) {
      handleCustomQueijo(cheese);
    }
  
    function handleClickParmesao() {
      comprarCustom("Parmesão");
      setButtonTextParmesao("+2");
    }
  
    function handleClickProvole() {
      comprarCustom("Provolone");
      setButtonTextProvolone("+2");
    }

    function handleClickMussarela() {
        comprarCustom("Mussarela");
        setButtonTextMussarela("+2");
      }
    
      function handleClickGorgonzola() {
        comprarCustom("Gorgonzola");
        setButtonTextGorgonzola("+2");
      }

      function handleClickCatupiry() {
        comprarCustom("Catupiry");
        setButtonTextCatupiry("+2");
      }
    return(
        <FlexIngredientesRow>
        <ContainerWidget>
            <ContainerImage src={Parmesao} alt = {"Parmesão"}/>
            <WidgetText>{"Parmesão"}</WidgetText>
            <AdicionarButton>
                <ButtonText>{"Adicionar"}</ButtonText>
            </AdicionarButton>
                <MaisButton onClick={handleClickParmesao}><ButtonText>{buttonTextParmesao}</ButtonText></MaisButton>
        </ContainerWidget>
        <ContainerWidget>
            <ContainerImage src={Provolone} alt = {"Provole"}/>
            <WidgetText>{"Provole"}</WidgetText>
            <AdicionarButton>
                <ButtonText>{"Adicionar"}</ButtonText>
            </AdicionarButton>
                <MaisButton onClick={handleClickProvole} ><ButtonText>{buttonTextProvolone}</ButtonText></MaisButton>
        </ContainerWidget>
        <ContainerWidget>
            <ContainerImage src={Mussarela} alt = {"Mussarela"}/>
            <WidgetText>{"Mussarela"}</WidgetText>
            <AdicionarButton>
                <ButtonText>{"Adicionar"}</ButtonText>
            </AdicionarButton>
                <MaisButton onClick={handleClickMussarela} ><ButtonText>{buttonTextMussarela}</ButtonText></MaisButton>
        </ContainerWidget>
        <ContainerWidget>
            <ContainerImage src={Gorgonzola} alt = {"Gorgonzola"}/>
            <WidgetText>{"Gorgonzola"}</WidgetText>
            <AdicionarButton>
                <ButtonText>{"Adicionar"}</ButtonText>
            </AdicionarButton>
                <MaisButton onClick={handleClickGorgonzola}><ButtonText>{buttonTextGorgonzola}</ButtonText></MaisButton>
        </ContainerWidget>
        <ContainerWidget>
            <ContainerImage src={Catupiry} alt = {"Catupiry"}/>
            <WidgetText>{"Catupiry"}</WidgetText>
            <AdicionarButton>
                <ButtonText>{"Adicionar"}</ButtonText>
            </AdicionarButton>
                <MaisButton onClick={handleClickCatupiry}><ButtonText>{buttonTextCatupiry}</ButtonText></MaisButton>
        </ContainerWidget>
        </FlexIngredientesRow>
    )
    
};


export const WidgetRecheio= ()=> {
    
    const [buttonTextTomate, setButtonTextTomate] = useState("+");
    const [buttonTextTomateSeco, setButtonTextTomateSeco] = useState("+");
    const [buttonTextFrango, setButtonTextFrango] = useState("+");
    const [buttonTextAzeitona, setButtonTextAzeitona] = useState("+");
    const [buttonTextPresunto, setButtonTextPresunto] = useState("+");
    const [buttonTextCebola, setButtonTextCebola] = useState("+");
    const [buttonTextOvoCozido, setButtonTextOvoCozido] = useState("+");
    const [buttonTextAtum, setButtonTextAtum
    ] = useState("+");


    const { handleCustomRecheio} = useContext(OrderContext);
  
    function comprarCustom(filling) {
      handleCustomRecheio(filling);
    }
  
    function handleClickTomate() {
      comprarCustom("Tomate");
      setButtonTextTomate("+2");
    }
  
    function handleClickTomateSeco() {
      comprarCustom("Tomate Seco");
      setButtonTextTomateSeco("+2");
    }

    function handleClickFrango() {
        comprarCustom("Frango");
        setButtonTextFrango("+2");
      }
    
      function handleClickAzeitona() {
        comprarCustom("Azeitona");
        setButtonTextAzeitona("+2");
      }

      function handleClickPresunto() {
        comprarCustom("Presunto");
        setButtonTextPresunto("+2");
      }
      function handleClickCebola() {
        comprarCustom("Cebola");
        setButtonTextCebola("+2");
      }
    
      function handleClickOvoCozido() {
        comprarCustom("Ovo cozido");
        setButtonTextOvoCozido("+2");
      }

      function handleClickAtum() {
        comprarCustom("Atum");
        setButtonTextAtum("+2");
      }
    
    return(
        <>
        <FlexIngredientesRow>
        <ContainerWidget>
            <ContainerImage src={Tomate} alt = {"Tomate"}/>
            <WidgetText>{"Tomate"}</WidgetText>
            <AdicionarButton>
                <ButtonText>{"Adicionar"}</ButtonText>
            </AdicionarButton>
                <MaisButton onClick={handleClickTomate}><ButtonText>{buttonTextTomate}</ButtonText></MaisButton>
        </ContainerWidget>
        <ContainerWidget>
            <ContainerImage src={TomateSeco} alt = {"Tomate Seco"}/>
            <WidgetText>{"Tomate Seco"}</WidgetText>
            <AdicionarButton>
                <ButtonText>{"Adicionar"}</ButtonText>
            </AdicionarButton>
                <MaisButton onClick={handleClickTomateSeco}><ButtonText>{buttonTextTomateSeco}</ButtonText></MaisButton>
        </ContainerWidget>
        <ContainerWidget>
            <ContainerImage src={Frango} alt = {"Frango"}/>
            <WidgetText>{"Frango"}</WidgetText>
            <AdicionarButton>
                <ButtonText>{"Adicionar"}</ButtonText>
            </AdicionarButton>
                <MaisButton onClick={handleClickFrango}><ButtonText>{buttonTextFrango}</ButtonText></MaisButton>
        </ContainerWidget>
        <ContainerWidget>
            <ContainerImage src={Azeitona} alt = {"Azeitona"}/>
            <WidgetText>{"Azeitona"}</WidgetText>
            <AdicionarButton>
                <ButtonText>{"Adicionar"}</ButtonText>
            </AdicionarButton>
                <MaisButton onClick={handleClickAzeitona}><ButtonText>{buttonTextAzeitona}</ButtonText></MaisButton>
        </ContainerWidget>
        </FlexIngredientesRow>
        <FlexIngredientesRow>
        <ContainerWidget>
            <ContainerImage src={Presunto} alt = {"Presunto"}/>
            <WidgetText>{"Presunto"}</WidgetText>
            <AdicionarButton>
                <ButtonText>{"Adicionar"}</ButtonText>
            </AdicionarButton>
                <MaisButton onClick={handleClickPresunto}><ButtonText>{buttonTextPresunto}</ButtonText></MaisButton>
        </ContainerWidget>
        <ContainerWidget>
            <ContainerImage src={Cebola} alt = {"Cebola"}/>
            <WidgetText>{"Cebola"}</WidgetText>
            <AdicionarButton>
                <ButtonText>{"Adicionar"}</ButtonText>
            </AdicionarButton>
                <MaisButton onClick={handleClickCebola}><ButtonText>{buttonTextCebola}</ButtonText></MaisButton>
        </ContainerWidget>
        <ContainerWidget>
            <ContainerImage src={OvoCozido} alt = {"Ovo cozido"}/>
            <WidgetText>{"Ovo cozido"}</WidgetText>
            <AdicionarButton>
                <ButtonText>{"Adicionar"}</ButtonText>
            </AdicionarButton>
                <MaisButton onClick={handleClickOvoCozido}><ButtonText>{buttonTextOvoCozido}</ButtonText></MaisButton>
        </ContainerWidget>
        <ContainerWidget>
            <ContainerImage src={Atum} alt = {"Atum"}/>
            <WidgetText>{"Atum"}</WidgetText>
            <AdicionarButton>
                <ButtonText>{"Adicionar"}</ButtonText>
            </AdicionarButton>
                <MaisButton onClick={handleClickAtum}><ButtonText>{buttonTextAtum}</ButtonText></MaisButton>
        </ContainerWidget>
        </FlexIngredientesRow>
        </>
    )
    
}




























































