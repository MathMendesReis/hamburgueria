import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
padding-top: 1.5rem;
display: flex;
align-items: center;
justify-content: space-between;
width: 90%;

button{
  height:3.5rem;
  width: 14rem;
  border:none;
  border-radius:4px;

  font-weight:700;
  font-size: 1.25rem;
  text-transform: uppercase;
  background: ${({theme})=>theme.colors.red};
  color: ${({theme})=>theme.colors.white};


  transition: background 0.3s;

  &:hover{
    background: ${darken(0.1, '#AA2424')};
  }
}

span{
  font-weight: 500;
  text-transform: uppercase;

  strong{
    margin-left: 0.75rem;
    font-weight: 700;
    font-size: 2.25rem;
  }
}
`
