import type { ReactNode } from "react"

export interface AccordionItemProps {
  id: string
  title: ReactNode
  children: ReactNode
  isExpanded: boolean
  onToggle: () => void
  canCollapse?: boolean
  regionRole?: boolean
  className?: string
}