import { Section, Heading, Button, Text } from "../../atoms"
import type { AccordionItemProps } from "./AccordionItem.types";
import "./AccordionItem.css";

export const AccordionItem = ({
  id,
  title,
  children,
  isExpanded,
  onToggle,
  canCollapse = true,
  regionRole = true,
  className,
}: AccordionItemProps) => {
  const buttonId = `${id}-trigger`
  const panelId = `${id}-panel`
  const isDisabled = isExpanded && !canCollapse

  return (
    <Section
      className={`accordion-item${isExpanded ? " accordion-item--expanded" : ""}${isDisabled ? " accordion-item--disabled" : ""}${className ? ` ${className}` : ""}`}
    >
      <Heading>
        <Button
          id={buttonId}
          type="button"
          className="accordion-item__trigger"
          aria-expanded={isExpanded}
          aria-controls={panelId}
          aria-disabled={isDisabled}
          onClick={onToggle}
          disabled={isDisabled}
        >
          <span className="accordion-item__title">{title}</span>
          <span className="accordion-item__icon" aria-hidden="true" />
        </Button>
      </Heading>
      <Section
        id={panelId}
        className="accordion-item__panel"
        hidden={!isExpanded}
        {...(regionRole
          ? {
              role: "region",
              "aria-labelledby": buttonId,
            }
          : {})
        }
      >
        {
          isExpanded && (
            <Text className="accordion-item__content" as="p">
              {children}
            </Text>
          )
        }
      </Section>
    </Section>
  );
}