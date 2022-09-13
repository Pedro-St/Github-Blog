import styled from "styled-components";


export const HeaderContainer = styled.header`
    background: ${(props)=> props.theme['base-profile']};
    padding: 2.5rem 0 7.5rem;
 

`

 export const HeaderEffect = styled.div`
    display: flex;
    flex-direction: flex-end;
    position: absolute;
  
    width: 100%;
    max-width: 1120px;
    left: 1067px;
    top: 30px;

`


export const HeaderContent = styled.header`
width: 100%;
max-width: 2535px;
margin: 0 auto;
padding: 0 -2.5rem;

display: flex;
justify-content: space-between;
align-items: center;

`