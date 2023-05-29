import { ReactNode } from "react";
import { Title } from "./styles";

export interface titleProps {
  children:ReactNode
}

export function SnackTitle({children}:titleProps) {
  return (
    <Title>{children}</Title>
  )
}
