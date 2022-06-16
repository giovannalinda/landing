import { Meta, Story } from '@storybook/react'
import { FiHeart } from 'react-icons/fi'
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

export const Icon: Story<ButtonProps> = (args) => (
  <Button {...args}>
    <FiHeart size={20} />
  </Button>
)
