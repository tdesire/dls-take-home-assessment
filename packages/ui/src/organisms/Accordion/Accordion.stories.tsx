import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion } from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Organisms/Accordion',
  component: Accordion,
}

export default meta
type Story = StoryObj<typeof Accordion>

const items = [
  {
    id: 'panel1',
    title: 'Header for panel one',
    content: 'Content for panel one',
    canCollapse: true
  },
  {
    id: 'panel2',
    title: 'Header for panel two',
    content: 'Content for panel two',
    canCollapse: true
  },
  {
    id: 'panel3',
    title: 'Header for panel three',
    content: 'Content for panel three',
    canCollapse: true
  }
];

export const Default: Story = {
  args: {
    items
  }
}

export const SingleExpandedPanel: Story = {
  args: {
    items,
    defaultExpandedItemIds: ['panel2'],
  }
}

export const MultipleExpandedPanels: Story = {
  args: {
    items,
    defaultExpandedItemIds: ['panel1', 'panel3']
  }
}

export const ShouldAllowMultipleExpandedDisabled: Story = {
  args: {
    items,
    shouldAllowMultipleExpanded: false
  }
}