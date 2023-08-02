import styled from 'styled-components';


export const FlexRow = styled.div`
/* Row dos Widgets */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap;
  gap:40px;

  @media (max-width:767px){
    flex-direction:column;
  }
`;

export const FlexColums= styled.div`
/* Columns do Footer/Adress */
  display: flex;
  align-items: start;
  justify-content: start;
  flex-wrap:wrap;
  gap:40px;
`;

export const FlexRowButton = styled.div`
/* Row Buttons Page Order */
  display: flex;
  justify-content:center;
  align-items: center;
  flex-wrap:wrap;
  gap:10px;
  margin:auto;

`;
