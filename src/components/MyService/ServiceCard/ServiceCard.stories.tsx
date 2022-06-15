import { Meta, Story } from '@storybook/react'
import { FiCode } from 'react-icons/fi'

import { ServiceCard, ServiceCardProps } from './ServiceCard'

export default {
  title: 'Components/MyService/ServiceCard',
  component: ServiceCard,
  args: {
    title: 'Front End Developer',
  },
} as Meta

export const Default: Story<ServiceCardProps> = (args) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
    <ServiceCard {...args}>
      <FiCode size={40} strokeWidth={1} />
    </ServiceCard>
  </div>
)
