import Image from 'next/image'
import { Assets } from '~/assets'

import { ContactInfo } from './ContactInfo'
import { ContactForm } from './ContactForm'

import { useTranslation } from '~/lib/useTranslation'

import * as S from './Contact.styled'

export function Contact() {
  const { t } = useTranslation()

  return (
    <S.Container id='contact'>
      <S.FormContainer>
        <h1>{t('Let me know here.')}</h1>

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
