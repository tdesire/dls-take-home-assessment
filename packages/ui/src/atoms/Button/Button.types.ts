import type { ReactNode } from "react"

export interface ButtonProps {
  id?: string
  type?: "button" | "submit" | "reset"
  className?: string
  disabled?: boolean
  onClick?: () => void
  children?: ReactNode;
}