import { Meta, Story } from '@storybook/react'
import Image from 'next/image'
import { Assets } from '~/assets'

import { WorkCard, WorkCardProps } from './WorkCard'

export default {
  title: 'WorkCard',
  component: WorkCard,
} as Meta

export const Default: Story<WorkCardProps> = (args) => (
  <WorkCard {...args}>
    <Image src={Assets.ImgWork1} width='424' height='332' />
  </WorkCard>
)
