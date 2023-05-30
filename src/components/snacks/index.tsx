import { currentyFormat } from "../../helpers/currentFormat"
import { SnackData } from "../../interfaces/SnackData"
import { SkeletonSnack } from "../skeletonSnack"
import { Container } from "./styles"
import { FiPlus } from 'react-icons/fi'
interface snacksPropps{
  snacks:SnackData[]
}

export function Snacks({snacks}:snacksPropps) {
  return <Container>
      {!snacks.length?
      [1,2,3,4].map((n)=>< SkeletonSnack key={n}/>)
      :
      snacks.map((snack) => (
        <div key={snack.id} className="snack">
          <h2>{snack.name}</h2>
          <img src={snack.image} alt={snack.name} />
          <p>{snack.description}</p>
          <div>
            <strong>{currentyFormat(snack.price)}</strong>
            <button type='button'>
              <FiPlus/>
              </button>
          </div>
        </div>
      ))}
  </Container>
}
