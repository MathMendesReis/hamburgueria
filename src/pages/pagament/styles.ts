import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;

main{
background-color: ${({theme})=>theme.colors.black};
padding: 2rem 2.5rem;
border-radius: 8px;
}

p{
  color: ${({theme})=>theme.colors.red};
}
`

export const Formulario = styled.form`
display: flex;
flex-direction: column;
width: 100%;
h4{
  margin-bottom: 2rem;
}

.grouped{
  flex: 1;
  display: flex;
  gap: 2rem;
}
.field{
  flex: 1;
  margin-bottom: 1rem;
}

label{
  display: block;
  margin-bottom: 0.5rem;
  color: ${({theme})=>theme.colors.white};
}

input[type="email"],
input[type="tel"],
input[type="document"],
input[type="text"],
select
{
flex: 1;
border: 1px solid transparent;
background: ${({theme})=>theme.colors.gray900};
color: ${({theme})=>theme.colors.white};
border-radius: 4px;
transition: all 0.2s;
height: 42px;
width: 100%;
margin: 0 0 1rem;
padding: 0.7rem;

}
`
