import { createContext, ReactNode, useState } from 'react'

import { SnackData } from '../interfaces/SnackData'
import { toast } from 'react-toastify'
import { snackEmoji } from '../helpers/snackEmoji'
import { CustomerData } from '../interfaces/customerData'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface RemoveSnackFromCart {
  id: number
  snack: string
}

interface UpdateCartProps {
  id: number
  snack: string
  newQuantity: number
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: (snack:Snack) => void
  updateCart: (snack:Snack) => void
  decrement: (snack:Snack) => void
  PayOder:(customer:CustomerData)=>void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

const localStorageKey = '@foodCommerce:cart'

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Snack[]>(()=>{
    const value = localStorage.getItem(localStorageKey)
    if(value) return JSON.parse(value)
    return[]
  })

  function saveCart(items:Snack[]) {
    setCart(items)
    localStorage.setItem(localStorageKey,JSON.stringify(items))
  }

  function clearLocalStorage() {
    localStorage.removeItem(localStorageKey)
  }

  function addSnackIntoCart(snack: SnackData): void {

    const isSnackInCart =cart.find((item) =>
    item.snack === snack.snack
    &&
    item.id === snack.id
    )

    if(isSnackInCart){
      const newCart = cart.map((item)=>{
        if(item.id === snack.id){
          const quantity = item.quantity + 1
          const subtotal = item.subtotal = item.price * item.quantity
           return {...item, quantity,subtotal}
        }
        return item
      })
      toast.success(`Outor(a) ${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos.`)
      saveCart(newCart)

      return

    }

    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
    const newCart = [...cart, newSnack] // push de um array

    toast.success(` ${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos.`)
    saveCart(newCart)
  }

  function removeSnackFromCart(snack:Snack):void {
   const newCart = cart.filter((item)=>!(
     item.id === snack.id
     &&
     item.snack === snack.snack
   )
   )
   toast.success(` ${snackEmoji(snack.snack)} ${snack.name} removido do pedido.`)
   saveCart(newCart)
  }

  function updateCart(snack:Snack){

    const newCart = cart.map((item)=>{
      if(
        item.id === snack.id
        &&
        item.snack === snack.snack
      ){
        item.quantity = item.quantity + 1
        item.subtotal = item.subtotal +  item.price
      }
      return item
    })
    saveCart(newCart)
  }

  function decrement(snack:Snack) {
    if(snack.quantity === 1)return
    const newCart = cart.map((item)=>{
      if(
        item.id === snack.id
        &&
        item.snack === snack.snack
      ){
        item.quantity = item.quantity - 1
        item.subtotal = item.subtotal - item.price
      }
      return item
    })
    saveCart(newCart)
  }

  function PayOder(customer:CustomerData) {
    clearLocalStorage()
    console.log("payoder", cart,customer)
  }

  return <CartContext.Provider value={{ cart, addSnackIntoCart,removeSnackFromCart,updateCart,decrement,PayOder }}>{children}</CartContext.Provider>
}
