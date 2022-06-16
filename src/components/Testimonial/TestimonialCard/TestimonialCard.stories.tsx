import { Meta, Story } from '@storybook/react'

import { TestimonialCard, TestimonialCardProps } from './TestimonialCard'

export default {
  title: 'Components/Testimonial/TestimonialCard',
  component: TestimonialCard,
  args: {
    name: 'John Doe',
    office: 'CEO e Founder',
    company: 'Google',
  },
} as Meta

export const Default: Story<TestimonialCardProps> = (args) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
    <TestimonialCard {...args} />
  </div>
)
