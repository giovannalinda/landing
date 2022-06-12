import { Meta, Story } from '@storybook/react'
import { Title } from './Title'

export default {
  title: 'Title',
  component: Title,
} as Meta

export const Default: Story = () => <Title>Example</Title>
