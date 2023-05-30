import { useContext } from "react";
import { SnackContext } from "../context/SnackContext";

export function UseSnacks() {
  return useContext(SnackContext)
}
