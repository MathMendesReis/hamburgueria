import { currentyFormat } from "../../helpers/currentFormat";
import { UseCarts } from "../../hooks/UseCart";
import { Container } from "./styles";

export function ConfirmeOrder(){
  const {cart} = UseCarts()
  const totalAmmount = cart.reduce((acc,item)=>(acc += item.subtotal),0)
  return <Container>
    <button type="button">
      finalizar pedido

    </button>
    <span>
        total <strong>{currentyFormat(totalAmmount)}</strong>
      </span>
  </Container>
}
