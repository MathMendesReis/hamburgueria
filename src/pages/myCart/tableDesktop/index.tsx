import { UseCarts } from "../../../hooks/UseCart";
import { Container } from "./styles";
import plusImg from "../../../assets/circle-plus.svg"
import minusImg from "../../../assets/circle-minus.svg"
import { currentyFormat } from "../../../helpers/currentFormat";
import {FaTrashAlt} from 'react-icons/fa'
import { ConfirmeOrder } from "../../../components/confirmerOder";


export function TableDesktop() {

  const {cart,removeSnackFromCart,updateCart,decrement} = UseCarts()
  return (
    <Container>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Lanches</th>
          <th>Qtd</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {
        cart.map((item)=>(
        <tr key={item.id}>
          <td>
            <img src={item.image} alt={item.name} />
          </td>
          <td>
            <h4>
            {item.name}
            </h4>
            <span>
              {item.price}
            </span>
          </td>
          <td>
            <div>
            <button type="button" onClick={()=>decrement(item)}>
                  <img src={minusImg} alt="remover item" />
                </button>
              <span>
              {`${item.quantity}`.padStart(2, '0')}
              </span>
              <button type="button" onClick={()=>updateCart(item)}>
                  <img src={plusImg} alt="adiconar item" />
                </button>
            </div>
          </td>
          <td>
            <h5>
              {currentyFormat(item.subtotal)}
            </h5>
          </td>
          <td>
            <button type="button" onClick={()=>removeSnackFromCart(item)}>
              <FaTrashAlt/>
            </button>
          </td>
        </tr>
        ))
      }
      </tbody>
    </table>
    <ConfirmeOrder/>
    </Container>
  )
}
