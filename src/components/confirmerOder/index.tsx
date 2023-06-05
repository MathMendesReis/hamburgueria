import { NavLink } from "react-router-dom";
import { currentyFormat } from "../../helpers/currentFormat";
import { UseCarts } from "../../hooks/UseCart";
import { Container } from "./styles";

export function ConfirmeOrder(){
  const {cart} = UseCarts()
  const totalAmmount = cart.reduce((acc,item)=>(acc += item.subtotal),0)
  return <Container>
    <NavLink to='pagamento'>
    <button type="button">
      finalizar pedido
    </button>
   </NavLink>
    <span>
        total <strong>{currentyFormat(totalAmmount)}</strong>
      </span>
  </Container>
}
