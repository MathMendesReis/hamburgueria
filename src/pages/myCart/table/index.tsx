import { useEffect, useState } from "react"
import { UseCarts } from "../../../hooks/UseCart"
import { TableDesktop } from "../tableDesktop"
import { TableMobile } from "../tableMobile"
import { EmptyCart } from "../../../components/EmptyCart"

export function Table(){
  const [windowWith, setWindowWith] = useState(
    document.documentElement.clientHeight
  )
  const {cart} = UseCarts()

  useEffect(()=>{
    function updateTableComponetBasedInWindownWidth() {
      const currentWidth = document.documentElement.clientWidth
    setWindowWith(currentWidth)
  }
  window.addEventListener('resize',updateTableComponetBasedInWindownWidth)
  return()=>{
    window.removeEventListener('resize',updateTableComponetBasedInWindownWidth)
  }
  },[])


  if(cart.length === 0){
    return <EmptyCart title='Ops! Parece que voce nao tem pedidos,peça já!'/>
  }
  return windowWith > 768? <TableDesktop />: <TableMobile />
}
