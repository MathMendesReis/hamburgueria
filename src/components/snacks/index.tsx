import { currentyFormat } from "../../helpers/currentFormat"
import { UseCarts } from "../../hooks/UseCart"
import { SnackData } from "../../interfaces/SnackData"
import { SkeletonSnack } from "../skeletonSnack"
import { Container } from "./styles"
import { FiPlus } from 'react-icons/fi'
interface snacksPropps{
  snacks:SnackData[]
}


export function Snacks({snacks}:snacksPropps) {
const {addSnackIntoCart,cart} = UseCarts()

  return <Container>
      {!snacks.length?
      [1,2,3,4].map((n)=>< SkeletonSnack key={n}/>)
      :
      snacks.map((snack) => {
        const isSnackInCart = cart.find(item=>
          item.id ===snack.id
          &&
          item.snack === snack.snack
          )
        return(
        <div key={snack.id} className="snack">
          {isSnackInCart &&  <span>{isSnackInCart.quantity}</span>}
          <h2>{snack.name}</h2>
          <img src={snack.image} alt={snack.name} />
          <p>{snack.description}</p>
          <div>
            <strong>{currentyFormat(snack.price)}</strong>
            <button type='button' onClick={()=>addSnackIntoCart(snack)}>
              <FiPlus/>
              </button>
          </div>
        </div>)
})}
  </Container>
}
