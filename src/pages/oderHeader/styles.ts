import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 40%;
padding-top: 5rem;

img{
  width: 8rem;
}
>div{
  background: none;
  border: none;

  display: flex;
  align-items:center;
  gap: 0.5rem;
  svg {
  width: 2.875rem;
  height: 2.875rem;
  fill: ${({theme})=>theme.colors.white};

}

div{
  text-align: right;
  h3{
    margin-bottom: 0.125rem;
    font-weight: 500;
    color: ${({theme})=>theme.colors.white};
  }
  span{
    color: ${({theme})=>theme.colors.yellow};
    strong{
      font-weight: 500;
      font-size: 1.25rem;
    }

    }
}
}

`
