import Image from 'next/image'
import { Assets } from '~/assets'

import { Info } from './Info'
import { ContactForm } from './ContactForm'

import * as S from './Contact.styled'

export function Contact() {
  return (
    <S.Container id='contact'>
      <S.ContactForm>
        <h1>Let me know here.</h1>

        <ContactForm />
      </S.ContactForm>

      <S.ContactInfo>
        <S.ContainerImage>
          <Image src={Assets.Dot} width='152' height='68' />
        </S.ContainerImage>
        <Info />
      </S.ContactInfo>
    </S.Container>
  )
}
