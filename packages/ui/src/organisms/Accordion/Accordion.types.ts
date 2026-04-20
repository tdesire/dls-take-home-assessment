import type { ReactNode } from 'react'

export interface AccordionItemData {
  id: string;
  title: ReactNode;
  content: ReactNode;
  canCollapse?: boolean;
  regionRole?: boolean;
}

export interface AccordionProps {
  items: AccordionItemData[]
  shouldAllowMultipleExpanded?: boolean
  defaultExpandedItemIds?: string[];
  className?: string;
}