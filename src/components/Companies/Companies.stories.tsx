/* eslint-disable @next/next/no-img-element */
import { Meta, Story } from '@storybook/react'

import { Assets } from '~/assets'

import { Companies } from './Companies'
import * as S from './Companies.styled'

export default {
  title: 'Components/Companies',
  component: Companies,
} as Meta

export const Company: Story = () => (
  <S.CompaniesList>
    <li>
      <S.CompanyCard target='_blank' rel='noreferrer' href='https://google.com'>
        <img src={Assets.LogoGoogle} width='113' height='26' />
      </S.CompanyCard>
    </li>
  </S.CompaniesList>
)
