
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'
import { UseCarts } from '../../hooks/UseCart'
import { Container } from './styles'

export function MyOrder() {
  const { cart } = UseCarts()

  return (
    <Container to={'cart'}>
      <span>Meu Pedido</span>
      <CartIcon />
      {cart.length !== 0 && <span>{`${cart.length}`.padStart(2, '0')}</span>}
    </Container>
  )
}
