import { Meta, Story } from '@storybook/react'

import { Header } from './Header'

export default {
  title: 'Components/Layout/Header',
  component: Header,
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '100rem', margin: '0 auto' }}>
    <Header />
  </div>
)
