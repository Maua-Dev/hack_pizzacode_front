import './App.css';
import { ContainerFirstPage, HeaderContainer,SecondContainer, } from './styled-components/Container';
import { HeaderText, SecondText, MainText } from './styled-components/Text';
import Pizza1 from './images/pizza1.png'

function App() {
  return (
    <>
        <HeaderContainer  style={{backgroundImage: `url(${Pizza1})` }}>
              <HeaderText>{"DIVERSAS POSSIBILIDADES DE SABORES"}</HeaderText>
        </HeaderContainer>
      <ContainerFirstPage>
        <SecondContainer>
          <SecondText>
        {"Quer algo diferente? Customize seu pedido!"}
        </SecondText>
        </SecondContainer>
        <MainText>{"Pizza de sabores tradicionais"}</MainText>
     </ContainerFirstPage>
    </>
  );
}

export default App;
