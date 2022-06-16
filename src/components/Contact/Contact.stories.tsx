import { Meta, Story } from '@storybook/react'

import { Contact } from './Contact'
import { ContactInfo } from './ContactInfo'
import { ContactForm } from './ContactForm'

import * as S from './Contact.styled'

export default {
  title: 'Components/Contact',
  component: Contact,
} as Meta

export const Form: Story = () => (
  <S.Container>
    <S.FormContainer>
      <ContactForm />
    </S.FormContainer>
  </S.Container>
)

export const Info: Story = () => (
  <S.Container>
    <S.InfoContainer>
      <ContactInfo />
    </S.InfoContainer>
  </S.Container>
)
