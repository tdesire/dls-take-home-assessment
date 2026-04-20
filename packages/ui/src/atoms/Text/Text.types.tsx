import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export type TextProps = ComponentPropsWithoutRef<"span"> & {
  children: ReactNode
  as?: "span" | "p"
}
