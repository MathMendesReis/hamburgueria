import { currentyFormat } from "../../helpers/currentFormat";
import { UseCarts } from "../../hooks/UseCart";
import { Container } from "./styles";

export function ConfirmePayment(){
  const {cart} = UseCarts()
  const totalAmmount = cart.reduce((acc,item)=>(acc += item.subtotal),0)
  return <Container>
    <button type="submit">
      pagar pedido
    </button>
    <span>
    total <strong>{currentyFormat(totalAmmount)}</strong>
    </span>
  </Container>
}
