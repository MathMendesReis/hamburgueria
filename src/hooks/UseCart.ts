import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function UseCarts() {
  return useContext(CartContext)
}
