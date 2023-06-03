import { Container } from "./styles";
import logoImg from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'
import { UseCarts } from "../../hooks/UseCart";



export default function OderHeader() {
  const { cart } = UseCarts()

  return (
    <Container>
      <Link to='/'>
          <img src={logoImg} alt='logo' />
      </Link>
      <div>
        <div>
          <h3>Meus pedidos</h3>
          <span>
               <strong>
              {`${cart.length}`.padStart(2, '0')} lache(s)
               </strong>
            </span>
        </div>
        <CartIcon />
      </div>

    </Container>
  )
}
