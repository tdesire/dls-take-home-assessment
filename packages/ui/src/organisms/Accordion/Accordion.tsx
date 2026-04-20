import { useState } from 'react'
import { AccordionItem } from '../../molecules'
import { Section } from '../../atoms'
import type { AccordionProps } from './Accordion.types'
import './Accordion.css'

export const Accordion = ({
  items,
  shouldAllowMultipleExpanded = true,
  defaultExpandedItemIds = [],
  className,
}: AccordionProps) => {
  const [expandedItemIds, setExpandedItemIds] = useState<string[]>(defaultExpandedItemIds)

  const handleToggle = (itemId: string) =>
    setExpandedItemIds((current) => {
      const isCurrentlyExpanded = current.includes(itemId)

      if (shouldAllowMultipleExpanded) {
        return isCurrentlyExpanded
          ? current.filter((id) => id !== itemId)
          : [...current, itemId];
      }

      return isCurrentlyExpanded ? [] : [itemId]
    })

  return (
    <Section className={`accordion${className ? ` ${className}` : ""}`}>
      {
        items.map(({ id, title, content, canCollapse, regionRole }) => (
          <AccordionItem
            key={id}
            id={id}
            title={title}
            isExpanded={expandedItemIds.includes(id)}
            onToggle={() => handleToggle(id)}
            canCollapse={!!canCollapse}
            regionRole={!!regionRole}
          >
            {content}
          </AccordionItem>
        ))
      }
    </Section>
  )
}