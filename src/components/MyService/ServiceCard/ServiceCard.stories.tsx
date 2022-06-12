import { Meta, Story } from '@storybook/react'
import { FiCode } from 'react-icons/fi'

import { ServiceCard, ServiceCardProps } from './ServiceCard'

export default {
  title: 'ServiceCard',
  component: ServiceCard,
} as Meta

export const Default: Story<ServiceCardProps> = (args) => (
  <ServiceCard {...args}>
    <FiCode size={40} strokeWidth={1} />
  </ServiceCard>
)
