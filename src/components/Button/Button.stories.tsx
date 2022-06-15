import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    as: 'button',
    size: 'md',
    rounded: false,
    variant: 'purple',
  },
} as Meta

export const Default: Story<ButtonProps> = (args) => (
  <Button {...args}>Example</Button>
)
