import { currentyFormat } from "../../../helpers/currentFormat"
import { UseCarts } from "../../../hooks/UseCart"
import { Container } from "../styles"
import plusImg from "../../../assets/circle-plus.svg"
import minusImg from "../../../assets/circle-minus.svg"
import {FaTrashAlt} from 'react-icons/fa'
import { ConfirmeOrder } from "../../../components/confirmerOder"


export function TableMobile() {
  const {cart,removeSnackFromCart,updateCart,decrement} = UseCarts()

  return (<Container>
    {cart.map((item) => (
      <div key={`${item.snack}-${item.id}`} className='order-item'>
        <div>
          <img src={item.image} alt={item.name} />
        </div>
        <div>
          <h4>{item.name}</h4>
          <span>{currentyFormat(item.price)}</span>
          <div>
            <div>
              <button type='button' onClick={() => decrement(item)}>
                <img src={minusImg} alt='Remover quantidade' />
              </button>
              <span>{`${item.quantity}`.padStart(2, '0')}</span>
              <button type='button' onClick={() => updateCart(item)}>
                <img src={plusImg} alt='Adicionar quantidade' />
              </button>
            </div>
            <button type='button' onClick={() => removeSnackFromCart(item)}>
              <FaTrashAlt />
            </button>
          </div>
          <h5>
            <span>Subtotal</span> {currentyFormat (item.subtotal)}
          </h5>
        </div>
      </div>
    ))}

    <ConfirmeOrder />
  </Container>)
}
