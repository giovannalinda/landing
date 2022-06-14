import Image from 'next/image'
import { Assets } from '~/assets'

import { ContactInfo } from './ContactInfo'
import { ContactForm } from './ContactForm'

import * as S from './Contact.styled'

export function Contact() {
  return (
    <S.Container id='contact'>
      <S.FormContainer>
        <h1>Let me know here.</h1>

        <ContactForm />
      </S.FormContainer>

      <S.InfoContainer>
        <S.DotImageWrapper>
          <Image src={Assets.Dot} width='152' height='68' />
        </S.DotImageWrapper>

        <ContactInfo />
      </S.InfoContainer>
    </S.Container>
  )
}
