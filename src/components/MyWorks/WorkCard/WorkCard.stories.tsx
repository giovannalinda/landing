/* eslint-disable @next/next/no-img-element */
import { Meta, Story } from '@storybook/react'

import { Assets } from '~/assets'

import { WorkCard, WorkCardProps } from './WorkCard'

export default {
  title: 'Components/MyWorks/WorkCard',
  component: WorkCard,
  args: {
    href: 'https://url.com.br',
    title: 'Title',
  },
} as Meta

export const Default: Story<WorkCardProps> = (args) => (
  <WorkCard {...args}>
    <img src={Assets.ImgWork1} width='424' height='332' />
  </WorkCard>
)
