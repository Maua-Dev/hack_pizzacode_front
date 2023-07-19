import styled from 'styled-components';

const ContainerFirstPage = styled.div`
    width:100;
    height:100px;
    background-color:rgba(255, 244, 217, 1);
`

const HeaderContainer= styled.div`
    width: 100%;
    height: 100%;
    flex-shrink: 0;   
    background-color: rgba(169, 105, 31, 0.3)
;
`;

const HeaderImageContainer= styled.div`
    width: 100%;
    height: 100%;
    transform: rotate()(-89.75deg);
    transform-origin:0 0;
`;

const SecondContainer = styled.div`
    width:60%;
    background-color:rgba(253, 226, 158, 1);
    border-radius:10;

`;
export{ContainerFirstPage,HeaderContainer, HeaderImageContainer,SecondContainer };